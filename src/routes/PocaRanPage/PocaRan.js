import React, { useState } from "react";
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
      <div className="closeIcon"/>
      <div className="appBarText">{page}/8</div>
      <div className="moreIcon"></div>
    </div> 
  )
}

const PocaRanBody = ({page}) => {
  return (
    <div className="ranBody">
      <div className="middle">
        <div className="cardBody"></div>
      </div>
      <div className="bottomMenu">
        <div className="closeIcon"/>
        <div className="closeIcon"/>
      </div>
    </div> 
  )
}


export default PocaRan