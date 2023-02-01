import "./style.css"
import "./FirstCard.css"

export const FirstCard = () =>{
  return (
    <div className="FirstCardContainer flexGrow flexColumn">
      <div className="centerAlign font500 FirstCardTitle">
        안내사항
      </div>
      <div className ="FirstCardReady font500">
        [ 중대 8경 카드 준비 완료 ]
      </div>
      <div className = "FirstCardHowto font500">
        카드 앞면은 사진
      </div>
      <div className = "FirstCardHowto font500">
        카드 뒷면은 태그
      </div>
      <div className = "FirstCardHowto font500">
        카드를 눌러서 카드 뒤집기
      </div>
      <div className = "FirstCardHowto font500">
        카드를 밀어서 카드 넘기기
      </div>
      <div className = "FirstCardFlexGrow"></div>
      <div className="FirstCardHoneyTip font400 ">
        중대 투어 가보작오
      </div>
      <div className="FirstCardHoneyTip font400">
        중! 앙! 대!
      </div>
    </div>
    

  )
}