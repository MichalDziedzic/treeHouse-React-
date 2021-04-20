import React,{PureComponent } from'react';
import Counter from'./Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';
import {Consumer} from './Context'
class Player extends PureComponent{

 
  render()
  {

    const {
        name,
        id,
        score,
        index,
        isHighestScore,
    } = this.props;

    return (
        
          <Consumer>
            {({actions , player})=>{
              return(
                <div className="player">
                    <span className="player-name">
                        <button className="remove-player" 
                          onClick={() => actions.removePlayer(player[index].id)}>✖</button>
                          <Icon
                            HighScore={isHighestScore}
                          /> 
                          { name }
                            </span>
                            <Counter score={score}  
                            index ={index} 
                            />
                    </div>
                
              )
            }}
            </Consumer>
            )
       
            
       
  }
   static propTypes =
  {
    name:PropTypes.string.isRequired,
    index:PropTypes.number,
    score:PropTypes.number.isRequired,
    id:PropTypes.number,
  }
    
  }
  export default Player;