import React, { useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css"
import "../../components/CardGenerator";
import { getRandomCards, getRandomCardsTest } from "../../components/CardGenerator";
import { useNavigate } from "react-router-dom";
import { LastCard } from "./LastCard";
import { FirstCard } from "./FirstCard";

function Cau() {

  const [page, setPage] = useState(0);

  return (
    <div className="entire">
      {/* <div className="backRec"/> */}
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
        page !== 8 + 1
        && (<div className="appBarText centerAlign font400">{page}/{8}</div>)
      }
      <div className="moreIcon icon"></div>
    </div> 
  )
}


const PocaRanBody = ({setPage}) => {
  const [datas, setDatas] = useState([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5','5'], ['6','6'], ['7', '7'], ['8','8'],['바보', '멍충이']])
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
      var tmp = [ 
        ["#중앙대"  , "http://cdn.edujin.co.kr/news/photo/202209/40103_81823_483.jpg"], 
        ["#빼광", "https://lh3.googleusercontent.com/-qPWUBhIPg1U/WoqvkxrShjI/AAAAAAABKMw/wKmMO_jNJJU2ERwy6cbZzVYWN6_nPR5FwCHMYCw/s0/ee12bf513f3215e397a45ba257f512cb34635470.jpg"], ["#여름생일자\n#입수#전통\n#생일#언제야\n#지구본속타임캡슐\n#지금#너의목표는", "https://image.ajunews.com/content/image/2018/03/02/20180302143826754542.jpg"], 
        ["#한강뷰\n#여의도 #한강공원" , "https://i.ytimg.com/vi/nX68bcwtd0Q/maxresdefault.jpg"] ,
        ["#축제대기공간\n#대학교축제\n#좋아하는연예인\n#축제부스", "https://i.ytimg.com/vi/W91ktbndDd0/maxresdefault.jpg"] , 
        ["#사진하나\n#남기자\n#만남의장소\n#우리다음에\n#만나면\n#아는척?" , "https://i.ytimg.com/vi/W91ktbndDd0/maxresdefault.jpg"], 
        ["#미디어실\n#영화감상\n#좋아하는영화\n#최근에본영화\n#최근에읽은책","https://i.ytimg.com/vi/W91ktbndDd0/maxresdefault.jpg"] ,
        ["#mbti#맞추기\n#저녁#메뉴", "https://i.ytimg.com/vi/W91ktbndDd0/maxresdefault.jpg"] ]
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
          {currentIndex <= 0 && <LastCard/>}
          {datas.map((data, index) => (
            index === currentIndex ?
                (
                  <TinderCard 
                    ref={childRefs[index]}
                    className="swipe cardBody centerAlign" 
                    key={data[1]} 
                    onSwipe={(dir) => swiped(dir, data[1], index)}
                    onCardLeftScreen={() => outOfFrame(data[1], index)}>
                      <div className="cardBody centerAlign shadowEffect flipAni frontCardBG" id={"frontCardId" + currentIndex}>
                        {index == 8 ? <FirstCard/> 
                        : (
                          <div className="cardImageContainer">
                            <img className = "backCardImg" src={data[1]} />
                          </div>
                        )}
                      </div>
                      <pre className="cardBody centerAlign shadowEffect flipAni flipCard font700 fontBig backCardBG" id={"backCardId" + currentIndex}>
                          {data[0]}
                      </pre>
                  </TinderCard> 
                )
             : 
              <TinderCard 
              ref={childRefs[index]}
              className="swipe cardBody centerAlign frontCardBG" 
              key={data[1]} 
              onSwipe={(dir) => swiped(dir, data[1], index)}
              onCardLeftScreen={() => outOfFrame(data[1], index)}>
                <div className="cardBody centerAlign">
                  {/* 빈칸 */}
                </div>
                <pre className="cardBody centerAlign flipAni flipCard  font700 fontBig">
                  {/* 빈칸 */}
                </pre>
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


export default Cau