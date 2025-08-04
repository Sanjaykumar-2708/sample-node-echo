const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Jenkins + Node.js!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

