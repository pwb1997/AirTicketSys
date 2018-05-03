const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const PORT = 4200;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const sessionOptions = {
  secret: 'secret for signing session id',
  saveUninitialized: false,
  resave: false,
};

app.use(session(sessionOptions));
app.use(favicon(__dirname + '/app/favicon.ico'));
app.use(express.static(__dirname + '/app'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

function date() {
    return '[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
  }

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/app/index.html')
})

console.log(date(), 'server started at port', PORT);
app.listen(PORT || 4200);