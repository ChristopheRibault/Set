import React, { Component } from "react";
import axios from "axios";

class GamePage extends Component {
  state = {
    allCards: [],
    gameCards: [],
    selectedCards: []
  };

  async componentDidMount() {
    const deck = await axios.get("http://localhost:5000");
    await this.setState({ allCards: deck.data });
    const { allCards } = this.state;
    const twelve = allCards.splice(0, 12);
    this.setState({ gameCards: twelve });
  }

  recordValue = async card => {
    const { selectedCards } = this.state;
    this.state.selectedCards.push(card);

    await this.setState({ selectedCards });

    if (this.state.selectedCards.length === 3) {
      const res = await axios.post("http://localhost:5000/checkSet", {
        cards: this.state.selectedCards
      });
      if (res.data) {
        const { gameCards } = this.state;

        for (let i = 0; i < 3; i++) {
          const selectedCardsCode = object => {
            return object.code === selectedCards[i].code;
          };
          const gameCardIndex = gameCards.findIndex(selectedCardsCode)
          gameCards.splice(gameCardIndex, 1);
        }
      }
      this.setState({ selectedCards: [] });
    }
  };

  render() {
    const { gameCards } = this.state;
    console.log(this.state.selectedCards);
    return gameCards.map(card => {
      return (
        <div>
          {card.code}{" "}
          <button name="cps3" onClick={() => this.recordValue(card)}>
            Click to record value
          </button>
        </div>
      );
    });
  }
}

export default GamePage;
