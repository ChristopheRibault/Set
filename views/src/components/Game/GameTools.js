import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";

class GameTools extends Component {

  render() {
    const { addThreeCards, openAddThreeCardsModal, handleCloseAddThreeCardsModal, actualQuantityOfSets } = this.props;
    return (
      <div>
        <AddThreeCards
          addThreeCards={addThreeCards}
          openAddThreeCardsModal={openAddThreeCardsModal}
          handleCloseAddThreeCardsModal={handleCloseAddThreeCardsModal}
          actualQuantityOfSets={actualQuantityOfSets}
        />
      </div>
    );
  }
}

export default GameTools;
