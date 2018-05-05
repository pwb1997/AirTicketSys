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
    cur = new Date();
    cur.setHours(cur.getHours() - (cur.getTimezoneOffset() / 60));
    return '[' + cur.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

app.get('/airport', (req, res) => {
    con.query("select * from airport", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        airport = []
        for (each of result) {
            airport.push({ 'airport': each.airport_name, 'city': each.airport_city });
        }
        res.json(airport);
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
})

app.post('/login', (req, res) => {
    console.log(date(), 'new login request received');
    let pk = '';
    if (req.body.type === 'airline_staff') {
        pk = 'username'
    } else {
        pk = 'email'
    }
    con.query("select * from " + req.body.type + " where " + pk + " = '" + req.body.username + "' and password = '" + req.body.password + "'", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        };
        if (result.length !== 0) {
            req.session.pk = req.body.username;
            req.session.type = req.body.type;
            res.cookie('pk', req.body.username);
            res.cookie('type', req.body.type);
            res.sendStatus(200);
            console.log(date(), "'" + req.body.username + "'", 'login successfully');
            return;
        }
        console.log(date(), 'authentication failed');
        res.sendStatus(401);
    })
})

app.post('/logout', (req, res) => {
    res.clearCookie('pk');
    res.clearCookie('type');
    res.clearCookie('connect.sid');
    res.sendStatus(200);
})

app.post('/registeration/customer', (req, res) => {
    con.query("select * from customer where email = '" + req.body.email + "'", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        };
        if (result.length !== 0) {
            res.sendStatus(409);
            return;
        }
        insertValues = "";
        for (k in req.body) {
            insertValues += "'" + req.body[k] + "'" + ",";
        }
        insertValues = insertValues.slice(0, insertValues.length - 1);
        con.query('insert into customer values (' + insertValues + ')', (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            };
            console.log(date(), 'new profile created for', req.body.email);
            res.sendStatus(200);
        })
    })
})

app.post('/registeration/staff', (req, res) => {
    con.query("select * from airline_staff where username = '" + req.body.username + "'", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        };
        if (result.length !== 0) {
            res.sendStatus(409);
            return;
        }
        insertValues = "";
        for (k in req.body) {
            insertValues += "'" + req.body[k] + "'" + ",";
        }
        insertValues = insertValues.slice(0, insertValues.length - 1);
        con.query('insert into airline_staff values (' + insertValues + ')', (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            };
            console.log(date(), 'new profile created for', req.body.username);
            res.sendStatus(200);
        })
    })
})

app.post('/registeration/agent', (req, res) => {
    con.query("select * from booking_agent", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        };
        for (each of result) {
            if (each.email === req.body.email) {
                res.sendStatus(409);
                return;
            }
        }
        insertValues = "";
        for (k in req.body) {
            insertValues += "'" + req.body[k] + "'" + ",";
        }
        insertValues += parseInt(result.length);
        con.query('insert into booking_agent values (' + insertValues + ')', (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            };
            console.log(date(), 'new profile created for', req.body.username);
            res.sendStatus(200);
        })
    })
})

app.post('/search', (req, res) => {
    cur = new Date();
    date = new Date(req.body.date);
    if (date.getTime() < cur.getTime()) {
        date = cur;
    }
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    con.query("select * from flight where "
        + "departure_airport='" + req.body.source
        + "' and arrival_airport='" + req.body.destination
        + "' and departure_time>='" + date + "'", (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            if (result.length === 0) {
                res.sendStatus(404);
                return;
            }
        })
})

console.log(date(), 'server started at port', PORT);
app.listen(PORT);