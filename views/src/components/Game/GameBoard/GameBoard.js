import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "./Table";
/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  table: {
    padding: 20,
  },
});

const GameBoard = props => {
  const {
    recordValue,
    gameCards,
    openSetConfirmationModal,
    validityOfSet,
    // restart,
    classes,
  } = props;

  return (
    <div className={classes.table}>
      <Table
        gameCards={gameCards}
        recordValue={recordValue}
        openSetConfirmationModal={openSetConfirmationModal}
        validityOfSet={validityOfSet}
      />
    </div>
  );
};

export default withStyles(styles)(GameBoard);
