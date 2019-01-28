import React, { Component } from 'react';
import './Card.css';

const domain = process.env.REACT_APP_DOMAIN_NAME;


export default class Card extends Component {
  render() {
    const { card } = this.props;
    const array = [];
    for (let i = 0; i < card.quantity; i++){
      array[i] = 1;
    }
    return (
      <div className= 'Card'>
        {array.map((e, i) => <img key={i} src={`${domain}${card.image}`} alt={card.code}/>)}
      </div>
    )
  }
}
