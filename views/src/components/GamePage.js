import React, { Component } from 'react';
import axios from 'axios';

class GamePage extends Component {
  state = {
		allCards: [],
    gameCards: [],
		selectedCards: [],
  }

  async componentDidMount() {
		const deck = await axios.get('http://localhost:5000')
		await this.setState({allCards: deck.data})
		const { allCards } = this.state ;
		const twelve = allCards.splice(0,12)
		this.setState({ gameCards:twelve });
  }

  recordValue = (e) => {
		const { selectedCards } = this.state;
    this.state.selectedCards.push(e.target.value);
    this.setState({selectedCards})
  }

  render() {
		const { gameCards} = this.state;
		console.log(this.state.selectedCards)
    return (
			gameCards.map((card)=>{ return(
      <div>
				{card.code} <button value={card.code} name='cps3' onClick={this.recordValue}>Click to record value</button>
			</div>
			)})
    )
  }
}

export default GamePage;
