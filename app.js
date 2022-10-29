const Reader = require('./src/Reader');
const Processor = require('./src/Processor');
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');
const Writer = require('./src/Writer');
const process = require('process');

const reader = new Reader();

const [, , arguments] = process.argv;

async function readingCsv() {
    const data = await reader.read(`./fileToConvert/${arguments}.csv`);

    const dataProcessed = Processor.process(data);

    const table = new Table(dataProcessed);

    const html = await HtmlParser.parse(table);

    const writer = new Writer(html);
    await writer.writer(`./fileConverted/${Date.now()}.html`);

    writer.writerPdf(`./fileConverted/${Date.now()}.pdf`);
}

readingCsv();