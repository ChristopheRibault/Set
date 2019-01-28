const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.route('/')
  .get(async (req, res) => {
    const result = await knex.select().from('cards');
    res.status(200).send(result);
  })

app.listen(port, console.log(`server listening on port ${port}`));