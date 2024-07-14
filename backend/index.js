const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/data', (req, res) => {
  res.json(['Rice', 'Burger', 'French Fries']);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
