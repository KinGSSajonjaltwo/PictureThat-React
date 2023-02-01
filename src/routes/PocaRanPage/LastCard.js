import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { useEffect } from "react";

export const LastCard = (datas) => {

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures(getUrls());
  }, [])

  const getUrls = () => {
    var tmpUrl = ['', '', '', ''];
    datas['datas'].slice(0, 4).reverse().forEach((element, index) => {
      tmpUrl[index] = element[1];
    });
    return tmpUrl;
  }

  const doCopy = () => {
    console.log(pictures);
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
    })};

  

  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg flexGrow flexColumn">
          <div className="copySpace" id="copy_space">
            { pictures && pictures.map((data, index) => (
              <img className={"picture" + index + " commonPicture"} key={index} src={data}></img>
            ))}
           <div className="pictureFrame"></div>
          </div>
      </div>
    </div>
  )
}