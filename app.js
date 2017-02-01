/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
const express = require('express');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');
// Require the personalized alchmey module built for this project
var alchemy = require('./controllers/alchemyController');
const bodyParser = require('body-parser');

// create a new express server
var app = express();
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var urlencodedParser = bodyParser.text({ extended: false });
var parameters = {text: ''};
alchemy = new alchemy();

app.post('/upload', urlencodedParser, function(req, res) {
  //console.log(req.body);
  parameters.text = req.body;
  alchemy.callKeyWords(parameters);
  res.send('Thank you!!!');
});


// alchemy.processFile(function(data) {
//   //content = data.toString();
//   parameters.text = data.toString();
//   alchemy.callKeyWords(parameters);
// });


// processFile(function(data) {
// content = data.toString();
// parameters.text = content;
// //console.log(parameters.text);
// callAlchemy();
// });

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
