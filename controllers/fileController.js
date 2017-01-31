'use strict';

const fs = require('fs');
const jsonfile = require('jsonfile');

module.exports = class fileController {
    constructor() {}

    // File processing no longer needed while receiving raw text throught html request
    // processFile(callback) {
    //     fs.readFile('./Atendimento.csv', function(err, data) {
    //         if(err)
    //             throw err;
    //         callback(data);
    //     });
    // };

    createNewFile(name) {
        fs.writeFile('./temp/' + name, '', function(err) {
            if (err)
                throw err;
        });
    };

    writeFile(name, response) {
        jsonfile.writeFile('./temp/' + name, response, function(err) {
            if (err)
                throw err;
        }); 
    }

}