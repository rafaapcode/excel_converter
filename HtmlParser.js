const ejs = require('ejs');

module.exports = class HtmlParser {
    static async parse(table) {
       return await ejs.renderFile('./table.ejs', { header: table.header, rows: table.rows })
    }
}