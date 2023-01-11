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
      <PocaRanBody page={page}/>  
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

const PocaRanBody = ({page}) => {
  const datas = getRandomCardsTest();
  const [currentIndex, setCurrentIndex] = useState(datas.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [isFrontFlip, setIsForntFlip] = useState(true);

  var mouseX = 0;
  var mouseY = 0;
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
    //currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
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
    console.log('distance :' + distance);

    if (distance < 50) {
      document.getElementById("clickId").textContent = distance;
    }
  } 

  const touchStartF = (e) => {
    mouseClickX = e.touches[0].pageX;
    mouseClickY = e.touches[0].pageY;
  } 

  const touchEndF = (e) => {
    var distance = (mouseClickX - e.changedTouches[0].clientX) ** 2 +
      (mouseClickY - e.changedTouches[0].clientY) ** 2;
    console.log('distance :' + distance);

    if (distance < 50) {
      document.getElementById("clickId").textContent = distance;
    }
  } 

  useEffect(() => {
    var clickInstance = document.getElementById("clickId");
    clickInstance.addEventListener("mousedown",
      (m) => {
        mouseDownF(m);
    });
    clickInstance.addEventListener("mouseup",
      (m) => {
         mouseUpF(m);
    });

    clickInstance.addEventListener("touchstart",
      (e) => {
        touchStartF(e);
    });
    clickInstance.addEventListener("touchend",
      (e) => {
        touchEndF(e);
    });
  }, [currentIndex]);

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
                  <div className="cardBody centerAlign shadowEffect" id="clickId" onClick={() => console.log(1)}>
                    아주 윗면
                  </div>
              </TinderCard> : 
              <TinderCard 
              ref={childRefs[index]}
              className="swipe cardBody centerAlign" 
              key={data[0]} 
              onSwipe={(dir) => swiped(dir, data[0], index)}
              onCardLeftScreen={() => outOfFrame(data[0], index)}>
                <div className="cardBody centerAlign" onClick={() => console.log(1)}>
                  옛날면
                </div>
            </TinderCard>
          ))}
          {/* <div className="cardbody centerAlign">123</div> */}
        </div>
      </div>
      <div className="bottomMenu">
        <div 
          style={{opacity: !canGoBack && 0.3}} 
          className="rotateIcon icon" onClick={goBack}/>
        <div id="txt">마우스 좌표: ( 0, 0 )</div>
        <div className="playIcon icon" onClick={swipe}/>
      </div>
    </div> 
  )
}


export default PocaRan