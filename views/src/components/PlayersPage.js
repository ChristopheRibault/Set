import React, { Component } from 'react';
import './PlayersPage.css';

class PlayersPage extends Component {
  state= {
    numberOfPlayers: 0,
    playerOne: '',
    playerTwo: '',
    playerThree: '',
    playerFour: '',
  }

  getPlayerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectPlayer = (e) => {
    this.setState({ numberOfPlayers: e.target.value });
  }

  render() {
    console.log(this.state.numberOfPlayers)
    const { numberOfPlayers } = this.state;
    return (
      <div>
        Select number of players
        <button value="1" onClick={this.selectPlayer}>1</button> <button value="2" onClick={this.selectPlayer}>2</button> <button value="3" onClick={this.selectPlayer}>3</button> <button value="4" onClick={this.selectPlayer}>4</button>
        <form>
          <div className={numberOfPlayers >= 1 ? "visible" : "hidden"}>
            <label htmlFor="playerOne"> Name of player 1: </label>
            <input name="playerOne" onChange={this.getPlayerName} />
          </div>
          <div className={numberOfPlayers >= 2 ? "visible" : "hidden"}>
            <label htmlFor="playerTwo"> Name of player 2: </label>
            <input name="playerTwo" onChange={this.getPlayerName} />
          </div>
          <div className={numberOfPlayers >= 3 ? "visible" : "hidden"}>
            <label htmlFor="playerThree"> Name of player 3: </label>
            <input name="playerThree" onChange={this.getPlayerName} />
          </div>
          <div className={numberOfPlayers >= 4 ? "visible" : "hidden"}>
            <label htmlFor="playerFour"> Name of player 4: </label>
            <input name="playerFour" onChange={this.getPlayerName} />
          </div>
        </form>
      </div>
    )
  }
}

export default PlayersPage;