import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Card from "../Card";
import SetConfirmationModal from "./SetConfirmationModal";

/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const Table = (props) => {
  const {
    recordValue,
    classes,
    gameCards,
    openSetConfirmationModal,
    handleSetConfirmationModal,
    validityOfSet,
  } = props;

  return (
    <div>
      <Grid container className={classes.root} spacing={16}>
        {gameCards && gameCards.map(card => {
          return (
            <Grid key={card.code} item xs={3}>
              <a onClick={() => recordValue(card)}>
                <Card card={card} />
              </a>
            </Grid>
          );
        })}
      </Grid>
      <SetConfirmationModal
        openSetConfirmationModal={openSetConfirmationModal}
        handleSetConfirmationModal={handleSetConfirmationModal}
        validityOfSet={validityOfSet}
      />
    </div>
  );
};

export default withStyles(styles)(Table);
