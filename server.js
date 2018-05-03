const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const sessionOptions = {
    secret: 'secret for signing session id',
    saveUninitialized: false,
    resave: false,
};
const PORT = 4200;

const con = require('./db.js');

app.use(session(sessionOptions));
app.use(favicon(__dirname + '/app/favicon.ico'));
app.use(express.static(__dirname + '/app'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

function date() {
    return '[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
})

app.post('/login', (req, res) => {
    console.log(date(), 'new login request received');
    con.query("select * from " + req.body.type, (err, result) => {
        if (err) throw err;
        for (each of result) {
            if (each.username === req.body.username && each.password === req.body.password) {
                req.session.username = req.body.username;
                req.session.type = req.body.type;
                res.sendStatus(200);
                console.log(date(), "'" + req.body.username + "'", 'login success');
                return;
            }
        }
        console.log(date(), req.body.username, 'login refused');
        res.sendStatus(401);
    })
})

app.post('register/customer', (req, res) => {
    console.log(req.body)
})

app.post('register/customer', (req, res) => {

})

app.post('register/customer', (req, res) => {

})

console.log(date(), 'server started at port', PORT);
app.listen(PORT);