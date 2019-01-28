const checkSet = require('./checkSet');

module.exports = (cards) => {
  const sets = [];
  for (let i = 0; i < cards.length - 2; i++){
    for (let j = i + 1; j < cards.length - 1; j++){
      for (let k = j + 1; k < cards.length; k++){
        let hand = [cards[i], cards[j], cards[k]]
        if (checkSet(hand))
        sets.push(hand);
      }
    }
  }
  return sets;
}
