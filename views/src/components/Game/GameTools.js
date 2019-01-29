import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";
import "./GameTools.css";

class GameTools extends Component {
  state = {
    playerNamePlaying: "",
    playingTime: false
  };

  getNamePlayerPlaying = async (e) => {
    this.props.liftPlayingTime(true);
    await this.setState({playerNamePlaying: e.target.name, playingTime: true});
    await setTimeout(()=>this.setState({playerNamePlaying: '', playingTime: false}, this.props.liftPlayingTime(false)), 8000);
  }

  render() {
    const { playingTime, playerNamePlaying } = this.state;
    const {
      playerNames,
      addThreeCards,
      openAddThreeCardsModal,
      handleAddThreeCardsModal,
      actualQuantityOfSets
    } = this.props;

    return (
      <div>
        {playerNames.map((player, index) => {
          return (
            <div key={index}>
            {player.player}: {player.name} <button onClick={this.getNamePlayerPlaying} className={playingTime ? "disabled" : "active"} name={player.name}>SET !</button>
            </div>
          );
        })}
        {playingTime && <div>{playerNamePlaying} is playing !</div>}
        <AddThreeCards
          addThreeCards={addThreeCards}
          openAddThreeCardsModal={openAddThreeCardsModal}
          handleAddThreeCardsModal={handleAddThreeCardsModal}
          actualQuantityOfSets={actualQuantityOfSets}
        />
      </div>
    );
  }
}

export default GameTools;
