import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";
import html2canvas from "html2canvas";
import {jQuery} from "jquery";

export const LastCard = (datas) => {

  const getText = () => {
    var tmpText = '';
    datas['datas'].slice(0, 4).reverse().forEach((element, index) => {
      tmpText += (index + 1) + '. ' + element[0] + '\n';
    });
    return tmpText;
  }

  const doCopy = () => {
    var ELEMENT = jQuery("#ELEMENT");
    console.log('1');

    //get element width and height
    var w = ELEMENT.width();
    var h = ELEMENT.height();

    //scale up your element
    ELEMENT.css({
      'transform': 'scale(3)',
      '-ms-transform': 'scale(3)',
      '-webkit-transform': 'scale(3)' });

      //run html2canvas
      html2canvas(ELEMENT, {
        onrendered: function(canvas) {
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
    }});
  };
  

  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg flexGrow flexColumn">
        <div className="keywordSize centerAlign">
          <div className="copySpace" id="ELEMENT">
            <div className="pictureFrame" id="copy_space"></div>
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