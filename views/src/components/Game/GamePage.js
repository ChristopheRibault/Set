import React, { Component } from "react";
import axios from "axios";
import GameTools from "./GameTools/GameTools";
import GameBoard from "./GameBoard/GameBoard";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class GamePage extends Component {
  state = {
    deckLoaded: false,
    allCards: [],
    gameCards: [],
    selectedCards: [],
    playingTime: false,
    actualQuantityOfSets: 0,
    openAddThreeCardsModal: false,
    redirect: false,
    openSetConfirmationModal: false
  };

  async componentDidMount() {
    const deck = await axios.get("http://localhost:5000");
    await this.setState({ allCards: deck.data, deckLoaded: true });
    const { allCards } = this.state;
    const twelve = allCards.splice(0, 12);
    this.setState({ gameCards: twelve });
  }

  liftPlayingTime = isPlaying => {
    this.setState({ playingTime: isPlaying });
  };

  selectThreeCards = async card => {
    const { selectedCards } = this.state;
    console.log(card);
    selectedCards.push(card);
    await this.setState({ selectedCards });
  };

  removeThreeCards = () => {
    for (let i = 0; i < 3; i++) {
      const selectCardsCode = object => {
        return object.code === this.state.selectedCards[i].code;
      };
      const gameCardIndex = this.state.gameCards.findIndex(selectCardsCode);
      this.state.gameCards.splice(gameCardIndex, 1);
    }
  };

  giveMeThreeCards = () => {
    const three = this.state.allCards.splice(0, 3);
    this.state.gameCards.push(three[0], three[1], three[2]);
    this.setState({ gameCards: this.state.gameCards });
  };

  recordValue = async card => {
    if (this.state.playingTime) {
      const { selectedCards } = this.state;
      this.selectThreeCards(card);

      if (selectedCards.length === 3) {
        const res = await axios.post("http://localhost:5000/checkSet", {
          cards: this.state.selectedCards
        });

        if (res.data && this.state.gameCards.length < 13) {
          this.removeThreeCards();
          this.giveMeThreeCards();
          this.handleSetConfirmationModal(true);
          console.log("set !");
        } else {
          console.log("pas bon !");
        }
        this.setState({ selectedCards: [] });
      }
    } else {
      alert('Cliquez d\'abord sur le joueur qui a dit "Set"');
    }
  };

  checkGame = async () => {
    const set = await axios.post("http://localhost:5000/checkGame", {
      cards: this.state.gameCards
    });
    console.log(set);
    await this.setState({ actualQuantityOfSets: set.data.quantityOfSets });
  };

  addThreeCards = async () => {
    await this.checkGame();

    if (this.state.actualQuantityOfSets > 0) {
      this.handleAddThreeCardsModal(true);
    } else {
      this.giveMeThreeCards();
    }
  };

  handleAddThreeCardsModal = boolean => {
    this.setState({ openAddThreeCardsModal: boolean });
  };

  restart = () => {
    this.setState({ redirect: true });
  };

  handleSetConfirmationModal = async boolean => {
    console.log("YOOOOOOOOOO");
    await this.setState({ openSetConfirmationModal: boolean });
    console.log(
      "this.state.openSetConfirmationModal : ",
      this.state.openSetConfirmationModal
    );
  };

  render() {
    const {
      gameCards,
      openAddThreeCardsModal,
      openSetConfirmationModal,
      actualQuantityOfSets,
      redirect
    } = this.state;

    const { classes } = this.props;

    const { numberOfPlayers, finalPlayers } = this.props.location.props;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/",
            props: {
              numberOfPlayers: numberOfPlayers,
              finalPlayers: finalPlayers
            }
          }}
        />
      );
    }

    return (
      <div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={3}>
            <GameTools
              liftPlayingTime={this.liftPlayingTime}
              numberOfPlayers={numberOfPlayers}
              playerNames={finalPlayers}
              addThreeCards={this.addThreeCards}
              openAddThreeCardsModal={openAddThreeCardsModal}
              handleAddThreeCardsModal={this.handleAddThreeCardsModal}
              actualQuantityOfSets={actualQuantityOfSets}
            />
          </Grid>
          <Grid item xs={9}>
            <GameBoard
              gameCards={gameCards}
              recordValue={this.recordValue}
              handleSetConfirmationModal={this.handleSetConfirmationModal}
              openSetConfirmationModal={openSetConfirmationModal}
              restart={this.restart}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GamePage);
