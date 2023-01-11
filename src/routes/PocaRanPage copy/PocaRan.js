import React, { useState } from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const Test = () => {
  const datas = [
    {
      id: '1',
      text : 'first'
    },
    {
      id: '2',
      text : 'second'
    },
    {
      id: '3',
      text : 'third'
    },
  ]
  
  return (
    <DragDropContext>
      <Droppable droppableId="first-box" direction="horizontal"> // direction의 디폴트값은 vertical
        {(provided, snapshot) => (
          <div 
            className='top-container' 
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
           >
              <div className="box-container">
                {datas.map(({ id, text }, index) => (
                  <div key={id} className='box'>{text}</div>
                ))}
              </div>
              {provided.placeholder}  
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default Test;