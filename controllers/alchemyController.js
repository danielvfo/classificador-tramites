'use strict';

const fs = require('fs');
const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '1983ebb06eafbfc15c6088b77ac1c9b8fe327f43'
});
var fileController = require('./fileController');
fileController = new fileController();

module.exports = class alchemyController {
    constructor() {};

    callKeyWords(str, callback) {
        var parameters = {text: ''};
        parameters.text = str;
        var file_name = 'KeyWords.json';
        fileController.createNewFile(file_name);
        alchemy_language.keywords(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.writeFile(file_name, response);
            callback();
        });
    };

    callEntities(str, callback) {
        var parameters = {text: ''};
        parameters.text = str;
        var file_name = 'Entities.json';
        fileController.createNewFile(file_name);
        alchemy_language.entities(parameters, function(err, response) {
            if (err)
                throw err;
            else
                fileController.writeFile(file_name, response);
                callback();
        });
    };        

}