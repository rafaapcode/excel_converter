const { promisify } = require('util');
const { writeFile } = require('node:fs');
const htmlPdf = require('html-pdf');

module.exports = class Writer {
    constructor(html) {
        this.html = html;
        this.write = promisify(writeFile);
    }

    async writer(filepath){
        try {
            await this.write(filepath, this.html);
            return true;
        } catch (error) {
            return false;
        }
    }

    writerPdf(filename){
        htmlPdf.create(this.html, {}).toFile(filename, err => {});
    }

}