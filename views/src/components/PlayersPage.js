import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./PlayersPage.css";
import ButtonsNbOfPlayer from "./ButtonsNbOfPlayer";
import { withStyles, Button, TextField } from "@material-ui/core";

const styles = theme => ({
  buttonLetsPlay: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30
  },
  buttonsNbOfPlayers: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20
  },
  form: {
    marginTop: 30
  },
  visible: {
    display: "block"
  },
  hidden: {
    display: "none"
  },
  textField: {
    width: 300,
  },
});

class PlayersPage extends Component {
  state = {
    numberOfPlayers: 0,
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
    finalPlayers: [],
    redirect: false
  };

  getPlayerName = e => {
    console.log('GET PLAYER NAME ! ', e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  selectPlayer = async value => {
    await this.setState({ numberOfPlayers: value });
  };

  validatePlayers = e => {
    e.preventDefault();
    const {
      finalPlayers,
      numberOfPlayers,
      playerOne,
      playerTwo,
      playerThree,
      playerFour
    } = this.state;
    if (Number(numberOfPlayers) === 1) {
      finalPlayers.push({ player: "Player 1", name: playerOne, score: 0 });
      this.setState({ finalPlayers });
    } else if (Number(numberOfPlayers) === 2) {
      finalPlayers.push(
        { player: "Player 1", name: playerOne, score: 0 },
        { player: "Player 2", name: playerTwo, score: 0 }
      );
      this.setState({ finalPlayers });
    } else if (Number(numberOfPlayers) === 3) {
      finalPlayers.push(
        { player: "Player 1", name: playerOne, score: 0 },
        { player: "Player 2", name: playerTwo, score: 0 },
        { player: "Player 3", name: playerThree, score: 0 }
      );
      this.setState({ finalPlayers });
    } else if (Number(numberOfPlayers) === 4) {
      finalPlayers.push(
        { player: "Player 1", name: playerOne, score: 0 },
        { player: "Player 2", name: playerTwo, score: 0 },
        { player: "Player 3", name: playerThree, score: 0 },
        { player: "Player 4", name: playerFour, score: 0 }
      );
      this.setState({ finalPlayers });
    }
    this.setState({ redirect: true });
  };

  render() {
    const { numberOfPlayers, finalPlayers, redirect } = this.state;
    const { classes } = this.props;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/game_page",
            props: {
              numberOfPlayers: numberOfPlayers,
              finalPlayers: finalPlayers
            }
          }}
        />
      );
    }
    return (
      <div className={classes.root}>
        <h2 className={classes.selectNbPlayers}>Select number of players</h2>
        <div className={classes.buttonsNbOfPlayers}>
          <ButtonsNbOfPlayer selectPlayer={this.selectPlayer} />
        </div>

        <form onSubmit={this.validatePlayers} className={classes.form}>
          <div className={numberOfPlayers >= 1 ? "visible" : "hidden"}>
            <TextField
            className={classes.textField}
              name="playerOne"
              onChange={this.getPlayerName}
              autoFocus
              margin="dense"
              id="name"
              label="Player 1"
              htmlFor="playerOne"
              fullWidth
            />
            {/* <label htmlFor="playerOne"> Name of player 1: </label>
            <input name="playerOne" onChange={this.getPlayerName} /> */}
          </div>
          <div className={numberOfPlayers >= 2 ? "visible" : "hidden"}>
            <TextField
            className={classes.textField}
              name="playerTwo"
              onChange={this.getPlayerName}
              autoFocus
              margin="dense"
              id="name"
              label="Player 2"
              htmlFor="playerTwo"
              fullWidth
            />
            {/* <label htmlFor="playerTwo"> Name of player 2: </label>
            <input name="playerTwo" onChange={this.getPlayerName} /> */}
          </div>
          <div className={numberOfPlayers >= 3 ? "visible" : "hidden"}>
            <TextField
            className={classes.textField}
              name="playerThree"
              onChange={this.getPlayerName}
              autoFocus
              margin="dense"
              id="name"
              label="Player 3"
              htmlFor="playerThree"
              fullWidth
            />
            {/* <label htmlFor="playerThree"> Name of player 3: </label>
            <input name="playerThree" onChange={this.getPlayerName} /> */}
          </div>
          <div className={numberOfPlayers >= 4 ? "visible" : "hidden"}>
            <TextField
            className={classes.textField}
              name="playerFour"
              onChange={this.getPlayerName}
              autoFocus
              margin="dense"
              id="name"
              label="Player 4"
              htmlFor="playerFour"
              fullWidth
            />
            {/* <label htmlFor="playerFour"> Name of player 4: </label>
            <input name="playerFour" onChange={this.getPlayerName} /> */}
          </div>
          <div className={classes.buttonLetsPlay}>
            <Button
              className={numberOfPlayers > 0 ? classes.visible : classes.hidden}
              color="secondary"
              variant="outlined"
              onClick={this.validatePlayers}
            >
              Let's play!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PlayersPage);
