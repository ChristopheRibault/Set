import React, { Component } from "react";
import axios from "axios";

import Card from './Card';

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

	removeThreeCards = () => {
		for (let i = 0; i < 3; i++) {
			const selectCardsCode = (object) => {
				return object.code === this.state.selectedCards[i].code;
			};
			const gameCardIndex = this.state.gameCards.findIndex(selectCardsCode)
			this.state.gameCards.splice(gameCardIndex, 1);
		}
	}

	giveMeThreeCards = () => {
		if(this.state.gameCards.length < 12){
			const three = this.state.allCards.splice(0,3)
			this.state.gameCards.push(three[0], three[1], three[2])
			this.setState({gameCards: this.state.gameCards})
		}
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
        this.removeThreeCards()
				this.giveMeThreeCards()
			}
		this.setState({ selectedCards: [] });
		};
	}

  render() {

    const { gameCards, allCards, deckLoaded } = this.state;
    if (deckLoaded) {
    return  <Card card={allCards[0]} />
    } else {
      return <p>Loading</p>
    }

    // return gameCards.map(card => {
    //   return (
    //     <div>

    //       {card.code}
    //       <button name="cps3" onClick={() => this.recordValue(card)}>
    //         Click to record value
    //       </button>
    //     </div>
    //   );
    // });

  }
}

export default GamePage;
