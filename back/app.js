const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('./db/knex');
const port = process.env.PORT || 5000;
const shuffle = require('./helpers/shuffle');
const checkSet = require('./helpers/checkSet');
const checkGame = require('./helpers/checkGame');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/public', express.static('public'));

app.use('/scores', require('./routes/scores'));

app.route('/')
  .get(async (req, res) => {
    const result = await knex.select().table('cards');
    const deck = shuffle(result);
    res.status(200).send(deck);
  });

app.route('/checkSet')
  .post((req, res) => {
    const {cards} = req.body;
    res.status(200).send(checkSet(cards));
  })

app.route('/checkGame')
  .post((req, res) => {
    const { cards } = req.body;
    const sets = checkGame(cards);
    res.status(200).json({
      quantityOfSets: sets.length,
      sets,
    })
  })

app.listen(port, console.log(`server listening on port ${port}`));