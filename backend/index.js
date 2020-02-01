const express = require('express');

const app = express();

const customers = require('./routes/customers');

const port = 5000;

app.use('api/v1/customers', customers);
app.get('', (req, res) => {
  res.json('Hello from server');
});

app.listen(port, () => console.log(`listening on port ${port}`));
