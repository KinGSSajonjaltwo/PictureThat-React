import "./style.css"
import "./LastCard.css"

export const LastCard = () =>{
  return (
    <div className="cardBody centerAlign shadowEffect">
      <div className="backCardImg middle fontText flexColumn">
        <div className="fontBig titleSize centerAlign">
          오늘의 포즈
        </div>
        <div className="keywordSize centerAlign">
          123
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
