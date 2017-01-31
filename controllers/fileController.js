'use strict';

const fs = require('fs');

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
}