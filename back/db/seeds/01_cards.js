
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      const cards = [];
      const shapes = ['peanut', 'knacky', 'diamond'];
      const colors = ['red', 'green', 'purple'];
      const fillings = ['full', 'stripes', 'empty'];
      const quantities = [1, 2, 3];
      for (let s = 0; s < 3; s++){
        for (let c = 0; c < 3; c++){
          for (let f = 0; f < 3; f++){
            for (let q = 0; q < 3; q++) {
              let card = {};
              card.code = shapes[s].substr(0,1) + colors[c].substr(0,1) + fillings[f].substr(0,1) + quantities[q];
              card.shape = shapes[s];
              card.color = colors[c];
              card.filling = fillings[f];
              card.quantity = quantities[q];
              card.image = `public/cards/${shapes[s].substr(0,1) + colors[c].substr(0,1) + fillings[f].substr(0,1)}.png`;
              cards.push(card);
            };
          };
        };
      };
      return knex('cards').insert(cards);
    });
};
