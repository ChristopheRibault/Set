import React, { Component } from 'react';
import axios from 'axios';

class GamePage extends Component {
  state = {
    selectedCards: [],
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
  }

  recordValue = (e) => {
    this.state.selectedCards.push(e.target.value);
    this.setState({selectedCards: this.state.selectedCards})
  }


  render() {
    console.log(this.state.selectedCards)
    return (
      <div>
        salut
        <button value='cps3' name='cps3' onClick={this.recordValue}></button>
        <button value='crs3' name='crs3' onClick={this.recordValue}></button>
        <button value='cgs3' name='cgs3' onClick={this.recordValue}></button>
      </div>
    )
  }
}

export default GamePage;
// {
//   "id": 78,
//   "code": "cps3",
//   "shape": "circle",
//   "color": "purple",
//   "filling": "stripes",
//   "quantity": "3"
// },
// {
//   "id": 60,
//   "code": "crs3",
//   "shape": "circle",
//   "color": "red",
//   "filling": "stripes",
//   "quantity": "3"
// },
// //  {
//   "id": 69,
//   "code": "cgs3",
//   "shape": "circle",
//   "color": "green",
//   "filling": "stripes",
//   "quantity": "3"
// },