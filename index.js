const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hey there! I\'m ec2!');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running at ${port}`);
});