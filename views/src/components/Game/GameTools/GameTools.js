import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";
import { withStyles, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  gameToolsElement: {
    padding: 15,
  },
  disabled: {
    margin: theme.spacing.unit,
    opacity: 0.65,
    cursor: "not-allowed",
    marginTop: 7,
    color: 'white',
    border: '1px solid white',
    backgroundColor: "white",
    "&:hover": {
        backgroundColor: "white",
        border: '1px solid white',
    }
  },
  active: {
    margin: theme.spacing.unit,
    marginTop: 7,
  },
});

class GameTools extends Component {
  state = {
    playerNamePlaying: "",
    playingTime: false
  };

  beginningOfPlayingTime = async e => {
    this.props.liftPlayingTime(true);
    await this.setState({
      playerNamePlaying: e,
      playingTime: true
    });
    await this.props.liftGettingPlayerNamePlaying(this.state.playerNamePlaying);
    await setTimeout(
      () => this.endOfPlayingTime(), 7000
    );
  };



  endOfPlayingTime = () => {
    this.setState(
      { playerNamePlaying: "", playingTime: false },
      this.props.liftPlayingTime(false)
    );
    this.props.gameCards.forEach(card => {
      card.select = false;
    });
    this.props.liftGameCards(this.props.gameCards)
  }

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
      <div className={classes.gameTools}>
        {playerNames.map((player, index) => {
          return (
            <div key={index} className={classes.gameToolsElement}>
              {player.name !== "" ? player.name : player.player} Score:{" "}
              {player.score}
              <br />
              <Button
                onClick={() =>
                  this.beginningOfPlayingTime(
                    player.name !== "" ? player.name : player.player
                  )
                }
                className={playingTime ? classes.disabled : classes.active}
                name={player.name}
                color="secondary"
                variant="outlined"
              >
                SET !
              </Button>
            </div>
          );
        })}
        <h3>{playingTime && <div>{playerNamePlaying} is playing !</div>}</h3>
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
