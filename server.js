// const Server = require('./server');
require('dotenv').config();
const path = require('path');                        // get the path of your current directory
const express = require('express');                  // serving requests
const cors = require('express-cors');                // cross-origin-resource-sharing: prevents others from pulling content from your server
var bodyParser = require('body-parser');             // ( Content-Type: application/json ) -> bodyParser gets set up to parse the json automatically
const port = (process.env.PORT || 3000); // eslint-disable-line
const app = express();
const users = require('./routes/usersApi');

app.use(cors()); // only take requests from port 3000
app.use(bodyParser.urlencoded({ extended: true })); // query parser (changes '%20' to ' ')
app.use(bodyParser.json()); // use json body

// if not in production -> probably in development
if (process.env.NODE_ENV !== 'production') { // eslint-disable-line
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('app'));  // serve up all the asseets in the app directory

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')); }); // eslint-disable-line

app.use('/api', users);
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')); }); // eslint-disable-line

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
