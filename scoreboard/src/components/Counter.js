import React from 'react';
const Counter = (props) =>{
  
  const index = props.index;
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={()=>props.handleChangeScore(-1,index)}> - </button>
          <span className="counter-score">{props.score}</span>
          <button className="counter-action increment"onClick={()=>props.handleChangeScore(1,index)} > + </button>
        </div>
      );
    
  }
 export default  Counter;