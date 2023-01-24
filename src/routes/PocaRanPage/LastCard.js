import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";

export const LastCard = (datas) =>{
  console.log(datas);
  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg flexGrow fontText flexColumn">
        <div className="fontBig titleSize centerAlign">
          오늘의 포즈
        </div>
        <div className="keywordSize centerAlign">
          <div className="gridBox smallBox centerAlign">
            {datas && datas['datas'].slice(0, 8).reverse().map((data, index) => (
              <div className="keywordText" key={index}>{index + 1}. {data[0]}</div>
            ))}
         </div>
        </div>
        <div className="centerAlign"><hr/></div>
        <div className="bottomSize centerAlign">
          <div className="downButtom centerAlign shadowEffect">
            키워드 화면
          </div>
        </div>
      </div>
    </div>
  )
}
