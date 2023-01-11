import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css"
import "../../components/CardGenerator";
import { getRandomCardsTest } from "../../components/CardGenerator";

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
  return (
    <div className="ranAppBar">
      <div className="closeIcon icon"/>
      <div className="appBarText centerAlign">{page}/8</div>
      <div className="moreIcon icon"></div>
    </div> 
  )
}

const PocaRanBody = ({page}) => {
  const datas = getRandomCardsTest();
  const [currentIndex, setCurrentIndex] = useState(datas.length - 1)
  const [lastDirection, setLastDirection] = useState()

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

  return (
    <div className="ranBody">
      <div className="middle centerAlign">
        <div className="cardsHouse">
          <div className="baseCard cardBody">I'mmmmm Base Card!!!</div>
          {datas.map((data, index) => (
            <TinderCard 
              ref={childRefs[index]}
              className="swipe cardBody centerAlign" 
              key={data[0]} 
              onSwipe={(dir) => swiped(dir, data[0], index)}
              onCardLeftScreen={() => outOfFrame(data[0], index)}>
                {data[0]}
            </TinderCard>
          ))}
          {/* <div className="cardbody centerAlign">123</div> */}
        </div>
      </div>
      <div className="bottomMenu">
        <div 
          style={{opacity: !canGoBack && 0.3}} 
          className="rotateIcon icon" onClick={goBack}/>
        <div className="playIcon icon" onClick={swipe}/>
      </div>
    </div> 
  )
}


export default PocaRan