const checkSet = require('./checkSet');

module.exports = (cards) => {
  const sets = [];
  for (let i = 0; i < cards.length - 2; i++){
    for (let j = 1; j < cards.length - 1; j++){
      if (j !== i){
        for (let k = 2; k < cards.length; k++){
          if(k !== j){
            let hand = [cards[i], cards[j], cards[k]]
            if (checkSet(hand))
            sets.push(hand);
          }
        }
      }
    }
  }
  return sets;
}
