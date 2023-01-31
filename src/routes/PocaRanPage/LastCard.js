import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";
import html2canvas from "html2canvas";

export const LastCard = (datas) => {

  const getText = () => {
    var tmpText = '';
    datas['datas'].slice(0, 4).reverse().forEach((element, index) => {
      tmpText += (index + 1) + '. ' + element[0] + '\n';
    });
    return tmpText;
  }

  const doCopy = () => {
    html2canvas(document.querySelector("#copy_space")).then(function(canvas){
      if (navigator.msSaveBlob) {
        var blob = canvas.msToBlob(); 
        return navigator.msSaveBlob(blob, 'test.jpg'); 
      } else { 
        var el = document.createElement("a");
        el.href = canvas.toDataURL("image/jpeg");
        el.download = 'test.jpg';
        el.click();
      }
    })
  };
  

  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg flexGrow flexColumn">
        <div className="titleSize centerAlign font500">
          오늘의 포즈
        </div>
        <div className="keywordSize centerAlign" id="copy_space">
          <div className="smallBox centerAlign">
            <div className="blockBox">
              {datas && datas['datas'].slice(0, 4).reverse().map((data, index) => (
                <div className="keywordText" key={index}>{index + 1}. {data[0]}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="centerAlign"><hr/></div>
        <div className="bottomSize centerAlign">
          <button className="downButtom centerAlign shadowEffect font500" onClick={() => 
            doCopy(getText())}>
              클립보드 복사
          </button>
        </div>
      </div>
    </div>
  )
}