import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Grid } from "@material-ui/core";
import Refresh from "@material-ui/icons/Refresh";
import Info from "@material-ui/icons/Info";
import Table from "./Table";
import logo from "../../../Assets/logo_set.gif";
/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  restartRefreshButton: {
    // border: "2px solid salmon",
    display: "flex",
    justifyContent: "flex-end"
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const GameBoard = props => {
  const {
    recordValue,
    gameCards,
    openSetConfirmationModal,
    handleSetConfirmationModal,
    restart,
    classes
  } = props;

  return (
    <div>
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={8} className={classes.logo}>
            <img src={logo} alt={"Set logo"} />
          </Grid>
          <Grid item xs={4} className={classes.restartRefreshButton}>
            <IconButton>
              <Info />
            </IconButton>
            <IconButton onClick={restart}>
              <Refresh />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Table
        gameCards={gameCards}
        recordValue={recordValue}
        handleSetConfirmationModal={handleSetConfirmationModal}
        openSetConfirmationModal={openSetConfirmationModal}
      />
    </div>
  );
};

export default withStyles(styles)(GameBoard);
