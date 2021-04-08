import React from 'react';
const Counter = ({score,index,handleChangeScore}) =>{
  
  
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={()=>
            handleChangeScore(-1,index)}> - </button>
          <span className="counter-score">{score}</span>
          <button className="counter-action increment"onClick={()=>
            handleChangeScore(1,index)} > + </button>
        </div>
      );
    
  }
 export default  Counter;