import React from 'react'
import Player from './Player';
import {Consumer} from './Context';

const PlayerList = () => {
    return (
                  <Consumer>
                      {
                          ( {players , actions} ) => {
                              return(
                              players.map((player,index)=>
                              (
                                 <Player 
                                    {...player}
                                    key={player.id.toString()}
                                    index={index} 
                                    isHighestScore={ actions.highestScore === player.score}         
                                /> 
                              )))
                          }
                      }
                    </Consumer>
             )
            
    
}

export default PlayerList
