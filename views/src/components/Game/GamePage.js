import React, { Component } from "react";
import axios from "axios";
import GameTools from "./GameTools/GameTools";
import GameBoard from "./GameBoard/GameBoard";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  gameTools: {
    display: 'flex',
    alignItems: 'center',
  },
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
    openSetConfirmationModal: false,
    validityOfSet: "",
    playerNamePlaying: "",
    players: this.props.location.props.finalPlayers
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

  addScore = () => {
    const { players } = this.state;
    players.forEach(player => {
      if (this.state.playerNamePlaying === player.name || this.state.playerNamePlaying === player.player) {
        player.score += 1;
      }
      this.setState({ players });
    });
  };

  liftGettingPlayerNamePlaying = playerName => {
    this.setState({ playerNamePlaying: playerName });
  };

  recordValue = async (card) => {
    const { selectedCards} = this.state;
    if (this.state.playingTime) {
      this.selectThreeCards(card);
      selectedCards.forEach(cardClicked => {
        if(card.code === cardClicked.code){
          cardClicked.select = true;
        }
      });

      if (selectedCards.length === 3) {
        const res = await axios.post("http://localhost:5000/checkSet", {
          cards: this.state.selectedCards
        });

        if (res.data) {
          this.removeThreeCards();
          this.handleSetConfirmationModal(true);
          this.addScore();
          if(this.state.gameCards.length < 13){
            this.giveMeThreeCards();
          }
        } else {
          this.handleSetConfirmationModal(false);
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
    console.log(set.data.sets);
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

  handleSetConfirmationModal = (booleanSetIsValid) => {
      this.setState({
        openSetConfirmationModal: true,
        validityOfSet: booleanSetIsValid
      });
    setTimeout(
      () =>
        this.setState({
          openSetConfirmationModal: false,
        }),
      2000
    );
    const { selectedCards} = this.state;
    selectedCards.forEach(cardClicked => {
        cardClicked.select = false;
    })
  };

  render() {
    const {
      gameCards,
      openAddThreeCardsModal,
      openSetConfirmationModal,
      validityOfSet,
      actualQuantityOfSets,
      redirect,
      players,
      allCards,
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
          <Grid item xs={12}>
            <Header restart={this.restart} allCards={allCards} />
          </Grid>
          <Grid item xs={2} className={classes.gameTools}>
            <GameTools
              liftPlayingTime={this.liftPlayingTime}
              numberOfPlayers={numberOfPlayers}
              playerNames={players}
              addThreeCards={this.addThreeCards}
              openAddThreeCardsModal={openAddThreeCardsModal}
              handleAddThreeCardsModal={this.handleAddThreeCardsModal}
              actualQuantityOfSets={actualQuantityOfSets}
              liftGettingPlayerNamePlaying={this.liftGettingPlayerNamePlaying}
            />
          </Grid>
          <Grid item xs={10}>
            <GameBoard
              gameCards={gameCards}
              recordValue={this.recordValue}
              openSetConfirmationModal={openSetConfirmationModal}
              validityOfSet={validityOfSet}
              restart={this.restart}
              className={classes.gameBoard}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GamePage);
