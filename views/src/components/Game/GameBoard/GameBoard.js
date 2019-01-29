import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "./Table";
/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  gameBoardIcons: {
    // border: "2px solid salmon",
    display: "flex",
    justifyContent: "flex-end"
  },
  gameBoardIcon: {
    height: 50,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  table: {
    padding: 20,
  },
});

const GameBoard = props => {
  const {
    recordValue,
    gameCards,
    openSetConfirmationModal,
    handleSetConfirmationModal,
    validityOfSet,
    // restart,
    classes,
  } = props;

  return (
    <div>
      <Table
        gameCards={gameCards}
        recordValue={recordValue}
        handleSetConfirmationModal={handleSetConfirmationModal}
        openSetConfirmationModal={openSetConfirmationModal}
        validityOfSet={validityOfSet}
        className={classes.table}
      />
    </div>
  );
};

export default withStyles(styles)(GameBoard);
