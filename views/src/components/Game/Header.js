import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Grid } from "@material-ui/core";
import Refresh from "@material-ui/icons/Refresh";
import Info from "@material-ui/icons/Info";
import logo from "../../Assets/logo_set.gif";
import InstructionModal from "./InstructionsModal";
/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    backgroundColor: "#99d6ff"
  },
  gameBoardIcons: {
    // border: "2px solid salmon",
    display: "flex",
    justifyContent: "flex-end"
  },
  gameBoardIcon: {
    height: 50
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  table: {
    padding: 20
  }
});

class Header extends Component {
  state = {
    openInstructionModal: false
  };

  handleInstructionModal = boolean => {
    this.setState({ openInstructionModal: boolean });
  };

  render() {
    const { restart, classes, allCards } = this.props;
    const { openInstructionModal } = this.state;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={2} className={classes.emptyGridHeader} />
          <Grid item xs={8} className={classes.logo}>
            <img src={logo} alt={"Set logo"} />
          </Grid>
          <Grid item xs={2} className={classes.gameBoardIcons}>
            <IconButton
              className={classes.gameBoardIcon}
              onClick={() => this.handleInstructionModal(true)}
            >
              <Info />
            </IconButton>
            <IconButton onClick={restart} className={classes.gameBoardIcon}>
              <Refresh />
            </IconButton>
          </Grid>
        </Grid>
        <InstructionModal
          openInstructionModal={openInstructionModal}
          handleInstructionModal={this.handleInstructionModal}
          allCards={allCards}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
