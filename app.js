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
const jsonfile = require('jsonfile');

// create a new express server
var app = express();
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var urlencodedParser = bodyParser.text({ extended: false });
alchemy_kw = new alchemy();
alchemy_et = new alchemy();
var keyWords_obj;
var entities_obj;

app.post('/upload', urlencodedParser, function(req, res) {
  const text = req.body;
  alchemy_kw.callKeyWords(text, function() {
    jsonfile.readFile(__dirname + '/temp/KeyWords.json', function(err, obj) {
      if (err)
        throw err;
      keyWords_obj = obj;
      delete keyWords_obj.status;
      delete keyWords_obj.usage;
      delete keyWords_obj.totalTransactions;
      delete keyWords_obj.language;
    });
  });

  alchemy_et.callEntities(text, function() {
    jsonfile.readFile(__dirname + '/temp/Entities.json', function(err, obj) {
      if (err)
        throw err;
      entities_obj = obj;
      delete entities_obj.status;
      delete entities_obj.usage;
      delete entities_obj.totalTransactions;
      delete entities_obj.language;
    });
  });
  res.send('Thank you!!!');
});

app.get('/test', function(req, res) {
  res.render(__dirname + '/views/results.ejs', {KEYWORDS: keyWords_obj, ENTITIES: entities_obj});
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
