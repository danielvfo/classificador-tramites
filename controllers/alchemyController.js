'use strict';

const fs = require('fs');
const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '1983ebb06eafbfc15c6088b77ac1c9b8fe327f43'
});
var fileController = require('./fileController');
var file_name = '';

module.exports = class alchemyController {
    constructor() {
        fileController = new fileController();
    };

    callKeyWords(parameters) {
        file_name = 'KeyWords' + Math.floor((Math.random() * 100000) + 1).toString() + '.json';
        alchemy_language.keywords(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.createNewFile(file_name);
                fileController.writeFile(file_name, response);
        });
        return file_name;
    };

    // callKeyWordsStream(obj) {
    //     file_name = 'KeyWordsStream.json';
    //     alchemy_language.keywords(obj, function(err, response) {
    //         if (err)
    //             throw err;
    //         else
    //             fileController.createNewFile(file_name);
    //             fileController.writeStream(file_name, response, obj);
    //     });
    // };

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