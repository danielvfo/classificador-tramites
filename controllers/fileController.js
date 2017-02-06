'use strict';

const fs = require('fs');
const jsonfile = require('jsonfile');

module.exports = class fileController {
    constructor() {};

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
    };
}