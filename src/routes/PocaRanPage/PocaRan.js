import React, { useState } from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import "./style.css"

function PocaRan() {

  const [page, setPage] = useState(0);

  return (
    <DragDropContext>
      <Droppable droppableId="droppable-1" type="test1">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey'}}>
          <div className="entire">
            <div className="backRec"/>
            <PocaRanAppBar page={page}/>
            <PocaRanBody page={page}/>  
            {provided.placeholder}
          </div>
        </div>
      )}
      </Droppable>;
    </DragDropContext>
  )  
}

const PocaRanAppBar = ({page}) => {
  return (
    <div className="ranAppBar">
      <div className="closeIcon icon"/>
      <div className="appBarText centerAlign">{page}/8</div>
      <div className="moreIcon icon"></div>
    </div> 
  )
}

const PocaRanBody = ({page}) => {
  return (
    <div className="ranBody">
      <div className="middle centerAlign">
        <div className="cardBody centerAlign">123</div>
      </div>
      <div className="bottomMenu">
        <div className="rotateIcon icon"/>
        <div className="playIcon icon"/>
      </div>
    </div> 
  )
}


export default PocaRan