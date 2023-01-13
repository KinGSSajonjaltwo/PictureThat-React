import React, { useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css"
import "../../components/CardGenerator";
import { getRandomCardsTest } from "../../components/CardGenerator";
import { useNavigate } from "react-router-dom";

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
      <div className="appBarText centerAlign">{page}/8</div>
      <div className="moreIcon icon"></div>
    </div> 
  )
}

const PocaRanBody = ({setPage}) => {
  const datas = getRandomCardsTest();
  const [currentIndex, setCurrentIndex] = useState(datas.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [isFront, setIsFront] = useState(true);
  const [smallPage, setSmallPage] = useState(9999);

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
    console.log('swipe')
    setLastDirection(direction)
    updateCurrentIndex(index - 1);
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
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
    setPage(8 - currentIndex);
    setIsFront(true);
    console.log(smallPage + '1000')
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
    console.log(isFront);
    if (isFront === false) {
      document.getElementById("frontCardId" + currentIndex).classList.add("flipCard");
      document.getElementById("backCardId" + currentIndex).classList.remove("flipCard");
    } else {
      document.getElementById("frontCardId" + currentIndex).classList.remove("flipCard");
      document.getElementById("backCardId" + currentIndex).classList.add("flipCard");
    }
  }, [isFront, currentIndex]);

  return (
    <div className="ranBody">
      <div className="middle centerAlign">
        <div className="cardsHouse">
          <div className="cardBody shadowEffect">I'mmmmm Base Card!!!</div>
          {datas.map((data, index) => (
            index === currentIndex ?
                <TinderCard 
                  ref={childRefs[index]}
                  className="swipe cardBody centerAlign" 
                  key={data[0]} 
                  onSwipe={(dir) => swiped(dir, data[0], index)}
                  onCardLeftScreen={() => outOfFrame(data[0], index)}>
                    <div className="cardBody centerAlign shadowEffect flipAni" id={"frontCardId" + currentIndex}>
                      {data[0]}
                    </div>
                    <div className="cardBody centerAlign shadowEffect flipAni flipCard" id={"backCardId" + currentIndex}>
                      <img src={data[1]} width="100" height="50" align="center" border="0" />
                    </div>
                </TinderCard> 
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
        <div className="playIcon icon" onClick={() => swipe('right')}/>
      </div>
    </div> 
  )
}


export default PocaRan