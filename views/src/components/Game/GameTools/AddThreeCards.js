import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AddThreeCardsModal from "./AddThreeCardsModal";

/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class AddThreeCards extends Component {

  render() {
    const { addThreeCards, openAddThreeCardsModal, handleAddThreeCardsModal, actualQuantityOfSets } = this.props;  

    return (
      <div>
        <button onClick={addThreeCards}>Add three cards</button>
        <AddThreeCardsModal
          openAddThreeCardsModal={openAddThreeCardsModal}
          handleAddThreeCardsModal={handleAddThreeCardsModal}
          actualQuantityOfSets={actualQuantityOfSets}
        />
      </div>
    );

  }
  
};

export default withStyles(styles)(AddThreeCards);
