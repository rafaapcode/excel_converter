const { readFile } = require('node:fs');
const { promisify } = require('util');

module.exports = class Reader {

    constructor() {
        this.reader = promisify(readFile);
    }

    async read(filePath) {
        try {
            return await this.reader(filePath, 'utf8');
        } catch (error) {
            return undefined;
        }
    }
}