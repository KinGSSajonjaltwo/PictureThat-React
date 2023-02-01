import "./style.css"
import "./LastCard.css"
import React, { useState } from "react";

export const LastCard = (datas) => {

  const getText = () => {
    var tmpText = '';
    datas['datas'].slice(0, 8).reverse().forEach((element, index) => {
      tmpText += (index + 1) + '. ' + element[0] + '\n';
    });
    return tmpText;
  }

  const doCopy = text => {
    // 흐음 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
    }
  };
  

  return (
    <div className="cardBody centerAlign shadowEffect frontCardBG">
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
          <button className="downButtom centerAlign shadowEffect font500" onClick={() => 
            doCopy(getText())}>
              클립보드 복사
          </button>
        </div>
      </div>
    </div>
  )
}