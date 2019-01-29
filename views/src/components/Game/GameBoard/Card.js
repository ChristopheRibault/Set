import React, { Component } from 'react';
import './Card.css';

const domain = process.env.REACT_APP_DOMAIN_NAME;

class Card extends Component {

  render() {
    const { card } = this.props;

    const array = [];
    for (let i = 0; i < card.quantity; i++){
      array[i] = 1;
    }

    return (
      <div className={card.select ? "contour" : "Card"}>
        {array.map((e, i) => <img key={i} src={`${domain}${card.image}`} name={card.code} alt={card.code}/>)}
      </div>
    )
  }
}

export default Card;
