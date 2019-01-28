import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './PlayersPage.css';

class PlayersPage extends Component {
  state= {
    numberOfPlayers: 0,
    playerOne: '',
    playerTwo: '',
    playerThree: '',
    playerFour: '',
    finalPlayers: [],
    redirect: false,
  }

  getPlayerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectPlayer = (e) => {
    this.setState({ numberOfPlayers: e.target.value });
  }

  validatePlayers = (e) => {
    e.preventDefault();
    const { finalPlayers, numberOfPlayers, playerOne, playerTwo, playerThree, playerFour } = this.state;
    if (Number(numberOfPlayers) === 1){
      finalPlayers.push(playerOne)
      this.setState({finalPlayers})
    }
    else if (Number(numberOfPlayers) === 2){
      finalPlayers.push(playerOne, playerTwo)
      this.setState({finalPlayers})
    }
    else if (Number(numberOfPlayers) === 3){
      finalPlayers.push(playerOne, playerTwo, playerThree)
      this.setState({finalPlayers})
    }
    else if (Number(numberOfPlayers) === 4){
      finalPlayers.push(playerOne, playerTwo, playerThree, playerFour)
      this.setState({finalPlayers})
    }
    this.setState({ redirect: true })
  }

  render() {
    const { numberOfPlayers, finalPlayers, redirect } = this.state;
    console.log(typeof numberOfPlayers, finalPlayers)
    if (redirect){
      return (<Redirect to={{
        pathname: "/game_page",
        props: { numberOfPlayers: numberOfPlayers,
        finalPlayers: finalPlayers }
    }}
/>)
    }
    return (
      <div>
        Select number of players
        <button value={1} onClick={this.selectPlayer}>1</button> <button value={2} onClick={this.selectPlayer}>2</button> <button value={3} onClick={this.selectPlayer}>3</button> <button value={4} onClick={this.selectPlayer}>4</button>
        <form onSubmit={this.validatePlayers}>
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
          <button className={numberOfPlayers > 0 ? "visible" : "hidden"}>Let's play !</button>
        </form>
      </div>
    )
  }
}

export default PlayersPage;