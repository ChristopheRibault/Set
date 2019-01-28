import React, { Component } from "react";
import AddThreeCards from "./AddThreeCards";

class GameTools extends Component {

  render() {
    const { addThreeCards } = this.props;
    return (
      <div>
        <AddThreeCards addThreeCards={addThreeCards} />
      </div>
    );
  }
}

export default GameTools;
