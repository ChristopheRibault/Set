const express = require("express");
const router = express.Router();

const knex = require('../db/knex');

router.route('/')
  .post(async (req, res) => {
    await knex('scores').insert(req.body);
    res.sendStatus(201);
  })

  .get(async (req, res) => {
    const scores = await knex.select('userName', 'score', 'created_at').from('score').orderBy('score', 'desc').limit(10);
    res.status(200).send(scores);
  })

module.exports = router;