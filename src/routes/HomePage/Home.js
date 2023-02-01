import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

import { getRandomCards } from "../../components/CardGenerator";

function Home() {
  let navigate = useNavigate();
  return(
    <div className = "mainBG">
      <div className= "outerCameraFrame">
        
        <div className = "camera1"/>
        <div className = "camera2"/>
        <div className = "camera3"/>
        <div className = "camera4"/>
        <div className="mainLogo" onClick={() => (navigate("/Cau"))} />

        <div className = "innerCameraFrame"/>

        <div className="mainButtons">
          <div className="startButton" onClick={() => (navigate("/pocaran"))}/>
          <br></br>
          <div className="eventButton" onClick={() => (navigate("/EventRan"))}/>
          <br></br>
        </div>
      </div>
    </div>
    // <>
    //   <iframe src = {iaaaa} className = "mainBG">
    //   </iframe>

    // </>
  )
}

export default Home