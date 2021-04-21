import React,{PureComponent } from'react';
import Counter from'./Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';
import {Consumer} from './Context'
class Player extends PureComponent{

 
  render()
  {

    const { isHighestScore , index} = this.props;

    return (
        
          <Consumer>
            {({actions , players})=>{
              return(
                <div className="player">
                    <span className="player-name">
                        <button className="remove-player" 
                          onClick={() => actions.removePlayer(players[index].id)}>✖</button>
                          <Icon HighScore={isHighestScore} /> 
                          {players[index].name}
                            </span>
                            <Counter index={index}/>
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