import React from 'react';
import {Consumer} from './Context'
import PropTypes from 'prop-types';
const Stats=()=>
{
    

    return(
        <Consumer>
            {   value=>{

                const totalPoints = value.reduce((acc,currentPlayer)=>{
                        return acc+currentPlayer.score},0)

                return(
                        <table className="stats">
                        <tbody>
                            <tr>
                            <td>Players:</td>
                            <td>{value.length}</td>
                            </tr>
                            <tr>
                            <td>Total Points:</td>
                            <td>{totalPoints}</td>
                            </tr>
                        </tbody>
                        </table>
                    )
                }
            }
        </Consumer>
            
            
    )

}
Stats.propTypes=
{
    players:PropTypes.arrayOf(PropTypes.object)
}
   export default Stats