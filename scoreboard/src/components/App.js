import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';



class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score:0,
        id: 1
      },
      {
        name: "Treasure",
        score:0,
        id: 2
      },
      {
        name: "Ashley",
        score:0,
        id: 3
      },
      {
        name: "James",
        score:0,
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleChangeScore = (delta,index) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
      }));
   
    }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            handleChangeScore={this.handleChangeScore} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
