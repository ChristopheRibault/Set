import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";
import "./GameTools.css";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  gameToolsSection: {
    border: '3px solid pink',
    marginTop: 10,
    marginBottom: 10,
  }
});

class GameTools extends Component {
  state = {
    playerNamePlaying: "",
    playingTime: false
  };

  getNamePlayerPlaying = async (e) => {
    this.props.liftPlayingTime(true);
    await this.setState({playerNamePlaying: e.target.name, playingTime: true});
    await setTimeout(()=>this.setState({playerNamePlaying: '', playingTime: false}, this.props.liftPlayingTime(false)), 8000);
  };

  render() {
    const { playingTime, playerNamePlaying } = this.state;
    const {
      playerNames,
      addThreeCards,
      openAddThreeCardsModal,
      handleAddThreeCardsModal,
      actualQuantityOfSets,
      classes,
    } = this.props;

    return (
      <div>
        {playerNames.map((player, index) => {
          return (
            <div key={index} className={classes.gameToolsSection}>
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
          className={classes.gameToolsSection}
        />
      </div>
    );
  }
}

export default withStyles(styles)(GameTools);
