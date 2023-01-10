import React, { useState } from "react";
import "./style.css"

function PocaRan() {

  const [page, setPage] = useState(0);

  return (
    <div className="entire">
      <PocaRanAppBar page={page}/>
      <PocaRanBody page={page}/>  
      <div className="backRec"/>
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
      12321312312312
    </div> 
  )
}


export default PocaRan