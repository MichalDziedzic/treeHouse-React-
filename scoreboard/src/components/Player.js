import React,{PureComponent } from'react';
import Counter from'./Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends PureComponent{

 
  render()
  {

    const {
        name,
        id,
        score,
        index,
        handleChangeScore,
        removePlayer,
        isHighestScore,
    } = this.props;

    return (
            <div className="player">
              <span className="player-name">
              <button className="remove-player" 
              onClick={() => removePlayer(id)}>✖</button>
               <Icon
                HighScore={isHighestScore}
               /> 
              { name }
            </span>
      
            <Counter score={score}  
              index ={index} 
              handleChangeScore={handleChangeScore} 
            />
          </div>
        );
  }
   static propTypes =
  {
    handleChangeScore:PropTypes.func,
    removePlayer:PropTypes.func,
    name:PropTypes.string.isRequired,
    index:PropTypes.number,
    score:PropTypes.number.isRequired,
    id:PropTypes.number,
    isHighestScore:PropTypes.bool
  }
    
  }
  export default Player;