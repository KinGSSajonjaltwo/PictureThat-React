import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css"

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
  const datas = ['1', '2', '3', '4'];
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="ranBody">
      <div className="middle centerAlign">
        <div className='cardContainer'>
          {datas.map((data) => (
            <TinderCard className="swipe cardBody centerAlign" key={data} onSwipe={(dir) => swiped(dir, data)}
              onCardLeftScreen={() => outOfFrame()}>
                <h3>{data}</h3>
            </TinderCard>
          ))}
          {/* <div className="cardBody centerAlign">123</div> */}
        </div>
      </div>
      <div className="bottomMenu">
        <div className="rotateIcon icon"/>
        <div className="playIcon icon"/>
      </div>
    </div> 
  )
}


export default PocaRan