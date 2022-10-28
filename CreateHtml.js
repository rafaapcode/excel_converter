const { promisify } = require('util');
const { writeFile } = require('node:fs');

module.exports = class CreateHtml {
    constructor(html) {
        this.html = html;
        this.write = promisify(writeFile);
    }

    async createHtml(filepath){
        try {
            await this.write(filepath, this.html);
            return true;
        } catch (error) {
            return false;
        }
    }

}