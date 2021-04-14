import React from 'react'
import Player from './Player';
import {Consumer} from './Context';

const PlayerList = () => {
    return (
                  <Consumer>
                      {
                          value=>{
                              return(
                              value.players.map((player,index)=>
                              (
                                 <Player 
                                    {...player}
                                    key={player.id.toString()}
                                    index={index}
                                    handleChangeScore={value.actions.changeScore} 
                                    removePlayer={value.actions.removePlayer}
                                    isHighestScore={ value.actions.highestScore === player.score}         
                                /> 
                              )))
                          }
                      }
                    </Consumer>
             )
            
    
}

export default PlayerList
