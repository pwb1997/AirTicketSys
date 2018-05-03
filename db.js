const mysql = require('mysql');
const host = 'localhost'
const user = 'root';
const PORT = 3306;
const database = 'db-final';
const con = mysql.createConnection({
    host: host,
    user: user,
    port: PORT,
    database: database,
})

function date() {
    return '[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

console.log(date(), 'connecting to database');

con.connect((err) => {
    if (err) throw err;
    console.log(date(), 'databased connected at root@'+host+':'+PORT);
})

module.exports = con;