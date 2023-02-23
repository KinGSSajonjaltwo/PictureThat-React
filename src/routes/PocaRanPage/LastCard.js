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

    // <div className="frontCardBG flexGrow flexColumn cardBody centerAlign">
    //   <div className="centerAlign font500 FirstCardTitle">
    //     맨 뒷장
    //   </div>
    //   <div className ="FirstCardReady font500">
    //     [ 수고하셨습니다 ]
    //   </div>
    //   <div className = "FirstCardHowto font500">
    //     집으로 가는 길은
    //   </div>
    //   <div className = "FirstCardHowto font500">
    //     왼쪽 아래 버튼
    //   </div>
    //   <div className = "FirstCardHowto font500">
    //     집 말고 사진 그거 한번 더
    //   </div>
    //   <div className = "FirstCardHowto font500">
    //     어때~~~?
    //   </div>
    //   <div className = "FirstCardFlexGrow"></div>
    //   <div className="FirstCardHoneyTip font400 ">
    //     인생 네컷 꿀팁 - 텐션을 든다!
    //   </div>
    //   <div className="FirstCardHoneyTip font400">
    //     꺄르르 꺄르르 꺄르르
    //   </div>
    // </div>
  )
}