import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";

export const LastCard = (datas) => {

  const getText = () => {
    var tmpText = '';
    datas['datas'].slice(0, 8).reverse().forEach((element, index) => {
      tmpText += (index + 1) + '. ' + element[0] + '\n';
    });
    console.log(tmpText);
    return tmpText;
  }

  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg flexGrow flexColumn">
        <div className="titleSize centerAlign font500">
          오늘의 포즈
        </div>
        <div className="keywordSize centerAlign">
          <div className="smallBox centerAlign">
            <div className="blockBox">
              {datas && datas['datas'].slice(0, 8).reverse().map((data, index) => (
                <div className="keywordText" key={index}>{index + 1}. {data[0]}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="centerAlign"><hr/></div>
        <div className="bottomSize centerAlign">
          <button className="downButtom centerAlign shadowEffect font500" text={getText()} onCopy={() => alert("클립보드에 복사되었습니다.")}>
              키워드 화면
          </button>
        </div>
      </div>
    </div>
  )
}
