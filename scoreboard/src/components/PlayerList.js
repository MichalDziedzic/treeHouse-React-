import React from 'react'
import Player from './Player';
import {Consumer} from './Context';

const PlayerList = ({highestScore ,handleChangeScore, removePlayer}) => {
    return (
                  <Consumer>
                      {
                          value=>{
                              return(
                              value.map((player,index)=>
                              (
                                 <Player 
                                    {...player}
                                    key={player.id.toString()}
                                    index={index}
                                    handleChangeScore={handleChangeScore} 
                                    removePlayer={removePlayer}
                                    isHighestScore={ highestScore === player.score}         
                                /> 
                              )))
                          }
                      }
                    </Consumer>
             )
            
    
}

export default PlayerList
