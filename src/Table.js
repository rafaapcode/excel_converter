module.exports = class Table {
    constructor(arr) {
        this.header = arr[0];
        this.rows = arr.slice(1); 
    }

    get rowCount(){
        return this.rows.length;
    }

    get colCount(){
        return this.header.length;
    }
}