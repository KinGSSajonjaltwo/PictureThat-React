import "./style.css"
import "./FirstCard.css"
import { g_pictureNum } from "../../assets/define/define";

export const FirstCard = () =>{
  return (
    <div className="FirstCardContainer flexGrow flexColumn">
      <div className="centerAlign font500 FirstCardTitle">
        안내사항
      </div>
      <div className ="FirstCardReady font500">
        [ 포즈 카드 {g_pictureNum}장 준비 완료 ]
      </div>
      <div className = "FirstCardHowto font500">
        포즈 카드 앞면은 포즈
      </div>
      <div className = "FirstCardHowto font500">
        포즈 카드 뒷면은 태그
      </div>
      <div className = "FirstCardHowto font500">
        버튼으로 카드 넘기기
      </div>
      <div className = "FirstCardHowto font500">
        카드를 눌러서 카드 뒤집기
      </div>
      <div className = "FirstCardFlexGrow"></div>
      <div className="FirstCardHoneyTip font400 ">
        텐션 올리는 법 - 텐션을 든다!
      </div>
      <div className="FirstCardHoneyTip font400">
        꺄르르 꺄르르 꺄르르
      </div>
    </div>
    

  )
}