const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

const app = express();
const port = 1234;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
  res.send('');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});