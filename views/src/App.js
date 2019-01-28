import React, { Component } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import PlayersPage from './components/PlayersPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GamePage /> */}
        <PlayersPage />
      </div>
    );
  }
}

export default App;
