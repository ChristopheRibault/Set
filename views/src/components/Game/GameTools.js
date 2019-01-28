import React, { Component } from 'react';
import "./GameTools.css";

class GameTools extends Component {
  state = {
    playerNamePlaying: '',
    playingTime: false,
  }

  getNamePlayerPlaying = async (e) => {
    this.props.liftPlayingTime(true);
    await this.setState({playerNamePlaying: e.target.name, playingTime: true});
    await setTimeout(()=>this.setState({playerNamePlaying: '', playingTime: false}, this.props.liftPlayingTime(false)), 8000);
  }

  render() {
    const { playerNames } = this.props;
    const { playingTime, playerNamePlaying } = this.state;
    return (
      <div>
      {playerNames.map((player, index)=>{
        return(
      <div key={index}>
        {player.player}: {player.name} <button onClick={this.getNamePlayerPlaying} className={playingTime ? "disabled" : "active"} name={player.name}>SET !</button>
      </div>
      )})}
      {playingTime && <div>{playerNamePlaying} is playing !</div>}
      </div>
    )
  }
}

export default GameTools;
