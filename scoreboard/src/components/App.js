import React from 'react';
import { Provider } from './Context';
import Header from './Header';
import AddPlayerForm from './AddPlayerForm';
import PlayerList from './PlayerList';



const App =()=>{

    return (
        <div className="scoreboard">
          <Header/>
          <PlayerList/>
          <AddPlayerForm/>
        </div>
    );
}

export default App;
