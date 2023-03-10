const fs = require('fs');
const { stringify } = require('querystring');

const util = require('util');

const readFromFile = util.promisify(fs.readFile);
    /** 
     *   @param {string}
     *   @param {object}
     *   @return {void}
    */
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`));
    /** 
        * @param {object}
        * @param {string}
        * @return {void}
    */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
            return parsedData;
        }
    });
};
    
module.exports = {readFromFile, writeToFile, readAndAppend};