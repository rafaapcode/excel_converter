const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const CreateHtml = require('./CreateHtml');

const reader = new Reader();


async function readingCsv() {
    const data = await reader.read('./teste.csv');

    const dataProcessed = Processor.process(data);

    const table = new Table(dataProcessed);

    const html = await HtmlParser.parse(table);

    const createHtml = new CreateHtml(html);
    createHtml.createHtml('./excel.html');
}

readingCsv();