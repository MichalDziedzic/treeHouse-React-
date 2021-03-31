import React from 'react';
const Stats=(props)=>
{
    const totalPoints = props.players.reduce((acc,currentPlayer)=>{
        return acc+currentPlayer.score
    },0)

    return(
         <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{props.players.length}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
                </tr>
            </tbody>
            </table>
    )

}
   export default Stats