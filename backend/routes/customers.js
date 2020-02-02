const { Router } = require('express');
const express = require('express');

const pool = require('../db/index');

const router = Router();
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM customers', (err, res) => {
    if (err) console.log(err);
    //console.log(res.rows);
    response.status(200).json(res.rows);
  });
});

module.exports = router;
