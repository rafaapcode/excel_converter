module.exports = class Processor{
    static process(data){
        const newData = data.split("\r\n");
        const rows = [];

        newData.forEach(row => {
            rows.push(row.split(","));
        });

        return rows;
    }
}