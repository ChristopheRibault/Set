import React, { Component } from 'react';

class GameTools extends Component {
  render() {
    const { numberOfPlayers, playerNames } = this.props;
    console.log("gametools", this.props.numberOfPlayers, this.props.playerNames)
    return (
      playerNames.map((player)=>{
        return(
      <div>
        {player}
      </div>
      )})
    )
  }
}

export default GameTools;
