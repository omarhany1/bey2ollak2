
var http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express()

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});


const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {out: null, error: null});
})

