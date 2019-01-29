import React, { Component } from 'react';
import './Card.css';

const domain = process.env.REACT_APP_DOMAIN_NAME;


export default class Card extends Component {
  displayCard = () => {
    const { card } = this.props;
    const array = [];
    for (let i = 0; i < card.quantity; i++){
      array[i] = 1;
    }
    array.map(e => console.log(e));
  }

  render() {
    const { card } = this.props;
    const array = [];
    for (let i = 0; i < card.quantity; i++){
      array[i] = 1;
    }

    this.displayCard();
    
    return (
      <div className= 'Card'>
        {array.map((e, i) => <img key={i} src={`${domain}${card.image}`} alt={card.code}/>)}
      </div>
    )
  }
}
