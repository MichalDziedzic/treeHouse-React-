import React,{PureComponent } from'react';
import Counter from'./Counter';

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
    } = this.props;

    return (
            <div className="player">
              <span className="player-name">
              <button className="remove-player" 
              onClick={() => removePlayer(id)}>✖</button>
              { name }
            </span>
      
            <Counter score={score}  
              index ={index} 
              handleChangeScore={handleChangeScore} 
            />
          </div>
        );
  }
  
    
  }
  export default Player;