'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Setup Route Handlers
const bmi = require('./api/routes/bmiScope');

const port = 8080;
//const host = '127.0.0.1';

// WEB CONSTRUCTOR
// Web (or WEB) represents the main "server" process of the microservice
module.exports = function Web() {
  var web = express();
  createAndStartServer(web);

  // Parse JSON body
  web.use(bodyParser.json());

  // Map the Core Route Handlers
  web.use('/bmi', bmi());
  //console.log("2222");

  return web;
};

function createAndStartServer(webApp) {
  webApp.listen(port, () => console.log("Listening on Port: " + port + "..."));
}
