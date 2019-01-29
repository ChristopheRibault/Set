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
  gameToolsElement: {
    padding: 30
  }
});

class GameTools extends Component {
  state = {
    playerNamePlaying: "",
    playingTime: false
  };

  getNamePlayerPlaying = async e => {
    this.props.liftPlayingTime(true);
    await this.setState({
      playerNamePlaying: e,
      playingTime: true
    });
    await this.props.liftGettingPlayerNamePlaying(this.state.playerNamePlaying);
    await setTimeout(
      () =>
        this.setState(
          { playerNamePlaying: "", playingTime: false },
          this.props.liftPlayingTime(false)
        ),
      8000
    );
  };

  render() {
    const { playingTime, playerNamePlaying } = this.state;
    const {
      playerNames,
      addThreeCards,
      openAddThreeCardsModal,
      handleAddThreeCardsModal,
      actualQuantityOfSets,
      classes
    } = this.props;

    return (
      <div className={classes.gameTools}>
        {playerNames.map((player, index) => {
          console.log(player)
          return (
            <div key={index} className={classes.gameToolsElement}>
              {player.name !== "" ? player.name : player.player} Score: {player.score}{"  "}
              <button
                onClick={() => this.getNamePlayerPlaying(player.name !== "" ? player.name : player.player)}
                className={playingTime ? "disabled" : "active"}
                name={player.name}
              >
                SET !
              </button>
            </div>
          );
        })}
        {playingTime && <div>{playerNamePlaying} is playing !</div>}
        <div className={classes.gameToolsElement}>
          <AddThreeCards
            addThreeCards={addThreeCards}
            openAddThreeCardsModal={openAddThreeCardsModal}
            handleAddThreeCardsModal={handleAddThreeCardsModal}
            actualQuantityOfSets={actualQuantityOfSets}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GameTools);
