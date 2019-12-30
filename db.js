const mysql = require('mysql');
const host = 'localhost'
const user = 'root';
const PORT = 3306;
const database = 'airticketsys';
const con = mysql.createConnection({
    host: host,
    user: user,
    port: PORT,
    database: database,
})

function date() {
    cur = new Date();
    cur.setHours(cur.getHours() - (cur.getTimezoneOffset() / 60));
    return '[' + cur.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

console.log(date(), 'connecting to database');

con.connect((err) => {
    if (err) throw err;
    console.log(date(), 'databased connected at root@' + host + ':' + PORT);
})

module.exports = con;
