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
        <div className="detailLogo">카드 기반 포즈 추천 서비스</div>

        <div className = "innerCameraFrame"/>

        <div className="mainButtons">
          <div className="cardNumControlButton font500 ">
            <div className="titleBox">사진 컷수</div>
            <div onClick={() => {setCardNum(rev => rev <= 4 ? rev : rev - 1)}}>
              {
                cardNum > 4 
                ? <div className="leftArrow centerAlign whiteText">-</div>
                : <div className="leftArrowMax"/>
              }
            </div>
            {cardNum}
            <div onClick={() => {setCardNum(rev => rev >= 10 ? rev : rev + 1)}}>
              {
                cardNum < 10 
                ? <div className="rightArrow centerAlign whiteText">+</div>
                : <div className="rightArrowMax"/>
              }
            </div>
          </div>
          <div className="enter"></div>
          <div className="startButton" onClick={() => {
              navigate("/PocaRan");
              setPictureNum(cardNum);
            }}/>
          {/* <br></br> */}
          {/* <div className="startButton" onClick={() => (navigate("/EventRan"))}/> */}
          {/* <br></br> */}
        </div>
      </div>
    </div>
  )     

}

export default Home