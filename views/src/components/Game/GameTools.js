import React, { Component } from 'react';
import "./GameTools.css";

class GameTools extends Component {
  state = {
    playerNamePlaying: '',
    playingTime: false,
  }

  getNamePlayerPlaying = async (e) => {
    await this.setState({playerNamePlaying: e.target.name, playingTime: true})
    setTimeout(()=>this.setState({playerNamePlaying: '', playingTime: false}), 5000)
  }

  render() {
    const { playerNames } = this.props;
    const { playingTime } = this.state;
    console.log("gametools", this.props.numberOfPlayers, this.props.playerNames)
    console.log("playerNamePlaying", this.state.playerNamePlaying)
    return (
      playerNames.map((player)=>{
        return(
      <div>
        {player} <button onClick={this.getNamePlayerPlaying} className={playingTime ? "disabled" : "active"} name={player}>SET !</button>
      </div>
      )})
    )
  }
}

export default GameTools;
