'use strict';

const fs = require('fs');

module.exports = class fileController {
    constructor() {}

    processFile(callback) {
        fs.readFile('./Atendimento.csv', function(err, data) {
            if(err)
                throw err;
            callback(data);
        });
    };
}