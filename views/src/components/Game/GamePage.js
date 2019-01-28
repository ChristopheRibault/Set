import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";
import GameTools from "./GameTools";

class GamePage extends Component {
  state = {
    deckLoaded: false,
    allCards: [],
    gameCards: [],
    selectedCards: []
  };

  async componentDidMount() {
    const deck = await axios.get("http://localhost:5000");
    await this.setState({ allCards: deck.data, deckLoaded: true });
    const { allCards } = this.state;
    const twelve = allCards.splice(0, 12);
    this.setState({ gameCards: twelve });
  }

  selectThreeCards = async (card) => {
    const { selectedCards } = this.state;
    console.log(card);
    selectedCards.push(card);
    await this.setState({ selectedCards });
  }

  removeThreeCards = () => {
    for (let i = 0; i < 3; i++) {
      const selectCardsCode = object => {
        return object.code === this.state.selectedCards[i].code;
      };
      const gameCardIndex = this.state.gameCards.findIndex(selectCardsCode);
      this.state.gameCards.splice(gameCardIndex, 1);
    }
  };

  giveMeThreeCards = () => {
      const three = this.state.allCards.splice(0, 3);
      this.state.gameCards.push(three[0], three[1], three[2]);
      this.setState({ gameCards: this.state.gameCards });
    // }
  };

  recordValue = async card => {
    this.selectThreeCards(card)

    if (this.state.selectedCards.length === 3) {
      const res = await axios.post("http://localhost:5000/checkSet", {
        cards: this.state.selectedCards
      });

      if (res.data && this.state.gameCards.length < 13) {
        this.removeThreeCards();
        this.giveMeThreeCards();
        console.log("set !");
      } else {
        console.log("pas bon !");        
      }
      this.setState({ selectedCards: [] });
    }
  };

  checkGame = async () => {
    const set = await axios.post("http://localhost:5000/checkGame", { cards: this.state.gameCards });
    console.log(`Il reste ${set.data.quantityOfSets} set. Voulez-vous vraiment ajouter des cartes ?`);
  }

  addThreeCards = () => {
    this.checkGame();
  }


  render() {
    const { gameCards } = this.state;
    return (
      <div>
        <Table gameCards={gameCards} recordValue={this.recordValue} />
        <GameTools addThreeCards={this.addThreeCards} />
        <button onClick={this.checkGame}>Check cards</button>
      </div>
    );
  }
}

export default GamePage;
