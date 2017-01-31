'use strict';

const fs = require('fs');
const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '296b17b5ca79141c458302bd12be4afed4eb5b5d'
});

module.exports = class alchemyController {
    constructor() {};

    callKeyWords(parameters) {
        alchemy_language.keywords(parameters, function (err, response) {
            if (err)
                throw err;
            else
                cosole.log('');
        });
    };

    callRelations(parameters) {
        alchemy_language.relations(parameters, function (err, response) {
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