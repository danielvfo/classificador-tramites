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

    callKeyWords(str) {
        var parameters = {text: ''};
        parameters.text = str;
        file_name = 'KeyWords.json';
        alchemy_language.keywords(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.createNewFile(file_name);
                fileController.writeFile(file_name, response);
        });
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

    callEntities(str) {
        var parameters = {text: ''};
        parameters.text = str;
        file_name = 'Entities.json';
        alchemy_language.entities(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.createNewFile(file_name);
                fileController.writeFile(file_name, response);
        });
    };        

}