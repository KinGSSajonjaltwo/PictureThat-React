import React, { useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css"
import "../../components/CardGenerator";
import { getRandomCards } from "../../components/CardGenerator";
import { useNavigate } from "react-router-dom";
import { LastCard } from "./LastCard";
import { FirstCard } from "./FirstCard";

function PocaRan() {

  const [page, setPage] = useState(0);

  return (
    <div className="entire">
      <div className="backRec"/>
      <PocaRanAppBar page={page}/>
      <PocaRanBody setPage={setPage}/>  
    </div>
  )  
}

const PocaRanAppBar = ({page}) => {
  let navigate = useNavigate();
  return (
    <div className="ranAppBar">
      <div className="closeIcon icon"onClick={() => (navigate("/"))}/>
      {
        page !== 9
        && (<div className="appBarText centerAlign font400">{page}/8</div>)
      }
      <div className="moreIcon icon"></div>
    </div> 
  )
}


const PocaRanBody = ({setPage}) => {
  const [datas, setDatas] = useState([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9','9']])
  const [first, setFirst] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(datas.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [isFront, setIsFront] = useState(true);
  const [smallPage, setSmallPage] = useState(9999);
  let navigate = useNavigate();

  var mouseClickX = 0;
  var mouseClickY = 0;


  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () => 
      Array(datas.length)
        .fill(0)
        .map((i) => React.createRef()),
      []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  }
  
  const canGoBack = currentIndex < datas.length - 1
  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1);
  }

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < datas.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  const mouseDownF = (m) => {
    mouseClickX = m.clientX;
    mouseClickY = m.clientY;
  } 

  const mouseUpF = (m) => {
    var distance = (mouseClickX - m.clientX) ** 2 +
      (mouseClickY - m.clientY) ** 2;

    if (distance < 50) {
      setIsFront((recv) => !recv);
    }
  } 

  const touchStartF = (e) => {
    mouseClickX = e.touches[0].pageX;
    mouseClickY = e.touches[0].pageY;
  } 

  const touchEndF = (e) => {
    var distance = (mouseClickX - e.changedTouches[0].clientX) ** 2 +
      (mouseClickY - e.changedTouches[0].clientY) ** 2;

    if (distance < 50) {
      setIsFront(recv => !recv);
    }
  } 

  useEffect(() => {
    async function init() {
      var tmp = await getRandomCards();
      if (first === true) {
        setFirst(false);
        tmp.push(['0','0']);
        setDatas(tmp);
      }
    }
    init();
  }, [])

  useEffect(() => {
    setPage(8 - currentIndex);
    setIsFront(true);
    if (!canSwipe || smallPage <= currentIndex) return; 
    var clickInstance = [];
    setSmallPage(currentIndex);

    clickInstance[0] = document.getElementById("frontCardId" + currentIndex);
    clickInstance[1] = document.getElementById("backCardId" + currentIndex);

    for (var i = 0; i < 2; i++) {
      clickInstance[i].addEventListener("mousedown", mouseDownF);
      clickInstance[i].addEventListener("mouseup", mouseUpF);
      clickInstance[i].addEventListener("touchstart", touchStartF);
      clickInstance[i].addEventListener("touchend", touchEndF);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!canSwipe) return; 
    if (isFront === false) {
      document.getElementById("frontCardId" + currentIndex).classList.add("flipCard");
      document.getElementById("backCardId" + currentIndex).classList.remove("flipCard");
    } else {
      document.getElementById("frontCardId" + currentIndex).classList.remove("flipCard");
      document.getElementById("backCardId" + currentIndex).classList.add("flipCard");
    }
  }, [isFront, currentIndex]);

  return (
    <div className="flexColumn">
      <div className="flexGrow centerAlign">
        <div className="cardsHouse">
          {currentIndex === -1 && <LastCard datas={datas}/>}
          {datas.map((data, index) => (
            index === currentIndex ?
                (index === 8 ?
                  // 첫 페이지인 경우
                  <TinderCard 
                  ref={childRefs[index]}
                  className="swipe cardBody centerAlign" 
                  key={data[0]} 
                  onSwipe={(dir) => swiped(dir, data[0], index)}
                  onCardLeftScreen={() => outOfFrame(data[0], index)}>
                    <div className="cardBody centerAlign shadowEffect flipAni font700 fontBig" id={"frontCardId" + currentIndex}>
                      <FirstCard/>
                    </div>
                    <div className="cardBody centerAlign shadowEffect flipAni flipCard" id={"backCardId" + currentIndex}>
                      <div className="cardImageContainer">
                        <img className = "backCardImg" src={data[1]} />
                      </div>
                    </div>
                </TinderCard> 
                : // 첫 페이지가 아닌 경우
                  <TinderCard 
                    ref={childRefs[index]}
                    className="swipe cardBody centerAlign" 
                    key={data[0]} 
                    onSwipe={(dir) => swiped(dir, data[0], index)}
                    onCardLeftScreen={() => outOfFrame(data[0], index)}>
                      <div className="cardBody centerAlign shadowEffect flipAni font700 fontBig" id={"frontCardId" + currentIndex}>
                        {data[0]}
                      </div>
                      <div className="cardBody centerAlign shadowEffect flipAni flipCard" id={"backCardId" + currentIndex}>
                        <div className="cardImageContainer">
                          <img className = "backCardImg" src={data[1]} />
                        </div>
                      </div>
                  </TinderCard> 
                )
             : 
              <TinderCard 
              ref={childRefs[index]}
              className="swipe cardBody centerAlign" 
              key={data[0]} 
              onSwipe={(dir) => swiped(dir, data[0], index)}
              onCardLeftScreen={() => outOfFrame(data[0], index)}>
                <div className="cardBody centerAlign">
                  {/* 빈칸 */}
                </div>
                <div className="cardBody centerAlign flipAni flipCard">
                  {/* 빈칸 */}
                </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <div className="bottomMenu">
        <div 
          style={{opacity: !canGoBack && 0.3}} 
          className="rotateIcon icon" onClick={goBack}/>
        {
          canSwipe 
          ? (<div className="playIcon icon" onClick={() => swipe('right')}/>)
          : (<div className="homeIcon icon" onClick={() => {navigate("/")}}/>)
        }
      </div>
    </div> 
  )
}


export default PocaRan