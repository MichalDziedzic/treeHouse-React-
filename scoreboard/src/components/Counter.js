import React from 'react';
import propTypes from 'prop-types';
import {Consumer} from './Context';

const Counter = ({score,index}) =>
{  
      return (
        <Consumer>
          { value=>(
            <div className="counter">
              <button className="counter-action decrement" onClick={()=>
                value.actions.changeScore(-1,index)}> - </button>
                <span className="counter-score">{score}</span>
              <button className="counter-action increment"onClick={()=>
                value.actions.changeScore(1,index)} > + </button>
            </div>) 
          }
        </Consumer>
        
      );
    
  }
Counter.propTypes=
{
  score:propTypes.number,
  index:propTypes.number
}

 export default  Counter;
