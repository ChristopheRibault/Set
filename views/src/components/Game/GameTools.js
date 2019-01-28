
import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";
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
    const { playingTime } = this.state;
    const { playerNames,
           addThreeCards,
           openAddThreeCardsModal,
           handleCloseAddThreeCardsModal,
           actualQuantityOfSets
          } = this.props;

    // console.log("gametools", this.props.numberOfPlayers, this.props.playerNames)
    // console.log("playerNamePlaying", this.state.playerNamePlaying)

    return (
      playerNames.map((player)=>{
        return(
      <div>
          {player} <button onClick={this.getNamePlayerPlaying} className={playingTime ? "disabled" : "active"} name={player}>SET !</button>
          <AddThreeCards
            addThreeCards={addThreeCards}
            openAddThreeCardsModal={openAddThreeCardsModal}
            handleCloseAddThreeCardsModal={handleCloseAddThreeCardsModal}
            actualQuantityOfSets={actualQuantityOfSets}
          />
        </div>
      )})
    )
  }
}

export default GameTools;
