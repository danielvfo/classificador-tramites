'use strict';

const fs = require('fs');
const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '1983ebb06eafbfc15c6088b77ac1c9b8fe327f43'
});
var fileController = require('./fileController');

module.exports = class alchemyController {
    constructor() {
        fileController = new fileController();
    };

    callKeyWords(parameters) {
        alchemy_language.keywords(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.createNewFile('teste.json');
                fileController.writeFile('teste.json', response);
        });
    };

    callRelations(parameters) {
        alchemy_language.relations(parameters, function(err, response) {
            if (err)
                console.log('error:', err);
            else
                console.log(JSON.stringify(response, null, 2));
        });
    };

    callEntities(parameters) {
        alchemy_language.entities(parameters, function (err, response) {
            if (err)
                console.log('error:', err);
            else
                console.log(JSON.stringify(response, null, 2));
        });
    };        

    callTypedRelations(parameters) {
        alchemy_language.typedRelations(parameters, function (err, response) {
            if (err)
                console.log('error:', err);
            else
                console.log(JSON.stringify(response, null, 2));
        });
    };
}