import React ,{ Component }from 'react';

const ScoreboardContext = React.createContext();
export class Provider extends Component {


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

      getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        let higestScore=Math.max(...scores);
        if(higestScore)
        {
          return higestScore
        }
        return null
      }
    
      handleRemovePlayer = (id) => {
        this.setState( prevState => {
          return {
            players: prevState.players.filter(p => p.id !== id)
          };
        });
      }
      prevPlayerId=4; 
    
      handleChangeScore = (delta,index) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
          }));
       
        }
       addPlayerMethod=(name)=>
       {
        this.setState( prevState =>{
          console.log(prevState.players)
          return{
           players:[
             ...prevState.players,
             {
            name,
            score:0,
            id:this.prevPlayerId+=1
          }
           ]
        }})
      }
    
    render() {
        let highestScore = this.getHighScore();
        return(
            <ScoreboardContext.Provider value={{
                players:this.state.players,
                actions:{
                    changeScore:this.handleChangeScore,
                    removePlayer:this.handleRemovePlayer,
                    highestScore,
                    addPlayer:this.addPlayerMethod,
                  }    
                }}> 
                 {this.props.children} 
                
                </ScoreboardContext.Provider>
        )
    }
}
export  const Consumer = ScoreboardContext.Consumer
