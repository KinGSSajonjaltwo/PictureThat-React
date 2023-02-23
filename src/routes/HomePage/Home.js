import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import {g_pictureNum, setPictureNum} from "../../assets/define/define"

import { getRandomCards } from "../../components/CardGenerator";


function Home() {
  let navigate = useNavigate();

  const [cardNum, setCardNum] = useState(g_pictureNum);

  return(
    <div className = "mainBG">
      <div className= "outerCameraFrame">
        
        <div className = "camera1"/>
        <div className = "camera2"/>
        <div className = "camera3"/>
        <div className = "camera4"/>
        <div className="mainLogo"/>

        <div className = "innerCameraFrame"/>

        <div className="mainButtons">
          <div className="cardNumControlButton">
            <div onClick={() => {setCardNum(rev => rev <= 4 ? rev : rev - 1)}}>
              <div className="leftArrow centerAlign">-</div>
            </div>
            {cardNum}
            <div onClick={() => {setCardNum(rev => rev >= 10 ? rev : rev + 1)}}>
              <div className="rightArrow centerAlign">+</div>
            </div>
          </div>
          <div className="enter"></div>
          <div className="startButton" onClick={() => {
              navigate("/PocaRan");
              setPictureNum(cardNum);
            }}/>
          <br></br>
          <div className="startButton" onClick={() => (navigate("/EventRan"))}/>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Home