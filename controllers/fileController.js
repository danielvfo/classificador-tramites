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

    // writeStream(name, response, obj){
    //     delete response.status;
    //     delete response.usage;
    //     delete response.totalTransactions;
    //     delete response.language;
    //     let key = obj;
    //     let value = response;
    //     let json_obj = {};
    //     json_obj = jsonfile.readFileSync('./temp/' + name);
    //     json_obj.key = `" ${value} "`;
    //     jsonfile.writeFileSync('./temp/' + name, json_obj);
        // fs.open('./temp/' + name, 'w+', (err, fd) => {
        //     if (err) {
        //         if (err.code === "EEXIST") {
        //         console.error('myfile already exists');
        //         return;
        //         } else {
        //         throw err;
        //         }
        //     }
        //     let json = JSON.parse(fd);
        //     let key = JSON.stringify(obj);
        //     let value = JSON.stringify(response);
        //     json.key = value;
        //     //JSON.parse(fd).concat(JSON.stringify(Object.assign(obj, response)));
        //     //writeMyData(fd);
        // });
        // jsonfile.writeFile('./temp/' + name, Object.assign(obj, response), function(err) {
        //     if (err)
        //         throw err;
        // });  
        // fs.open(name, 'wx', (err, fd) => {
        //     if (err) {
        //         if (err.code === "EEXIST") {
        //             console.error('myfile already exists');
        //             return;
        //         } else {
        //             throw err;
        //         }
        //     }
        //     jsonfile.writeFile(fd + name, Object.assign(obj, response), function(err) {
        //         if (err)
        //             throw err;    
        //     });
        // });  
   // };

}