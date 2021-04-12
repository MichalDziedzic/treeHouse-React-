import React from 'react';
import propTypes from 'prop-types';

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
Counter.propTypes=
{
  score:propTypes.number,
  index:propTypes.number,
  handleChangeScore:propTypes.func
}

 export default  Counter;

 /*  add more proptypes in Header comp and also in Stats 
 but use arrayOf meth and shape to check a properties inside in object (array)
 
 */ 