import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "./Table";

/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const GameBoard = (props) => {
  const {
    recordValue,
    gameCards,
    openSetConfirmationModal,
    handleSetConfirmationModal
  } = props;  
  
  return (
    <div>
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
