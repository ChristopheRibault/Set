import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";
import AddThreeCardsModal from "./AddThreeCardsModal";

/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class AddThreeCards extends Component {
  render() {
    const {
      addThreeCards,
      openAddThreeCardsModal,
      handleAddThreeCardsModal,
      actualQuantityOfSets,
      classes
    } = this.props;

    return (
      <div>
        <Button
          onClick={addThreeCards}
          className={classes.addThreeCards}
          color="secondary"
          variant="outlined"
        >
          Add three cards
        </Button>
        <AddThreeCardsModal
          openAddThreeCardsModal={openAddThreeCardsModal}
          handleAddThreeCardsModal={handleAddThreeCardsModal}
          actualQuantityOfSets={actualQuantityOfSets}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AddThreeCards);
