import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GamePage from './components/Game/GamePage';
import PlayersPage from './components/PlayersPage';
import IntroductionPage from './components/IntroductionPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={IntroductionPage} />
        <Route exact path="/players_page" component={PlayersPage} />
        <Route exact path="/game_page" component={GamePage} />
      </div>
    );
  }
}

export default App;
