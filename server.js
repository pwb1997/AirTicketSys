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

const getDate = () => {
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

app.get('/getFlights', (req, res) => {
    const result = {};
    date = new Date();
    date = date.getFullYear() + '-' +
        ('00' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + ' ' +
        ('00' + date.getHours()).slice(-2) + ':' +
        ('00' + date.getMinutes()).slice(-2) + ':' +
        ('00' + date.getSeconds()).slice(-2);
    if (req.session.type !== 'customer' && req.session.type !== 'booking_agent' && req.session.type !== 'airline_staff') {
        res.sendStatus(409);
        return;
    }
    if (req.session.type === 'customer') {
        console.log("select * from ticket natural join purchases natural join flight where " +
            "customer_email='" + req.session.pk + "' and departure_time >='" + date + "'")
        con.query("select * from ticket natural join purchases natural join flight where " +
            "customer_email='" + req.session.pk + "' and departure_time >='" + date + "'", (err, upcoming) => {
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                result.upcoming = upcoming;
                con.query("select * from ticket natural join purchases natural join flight where " +
                    "customer_email='" + req.session.pk + "' and departure_time <'" + date + "'", (err, history) => {
                        if (err) {
                            res.sendStatus(500);
                            return;
                        }
                        result.history = history;
                        res.send(result);
                    });
            });
    }
    if (req.session.type === 'airline_staff') {
        con.query("select * from airline_staff where username='" + req.session.pk + "'", (err, airline_staff) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            const airline_name = airline_staff[0].airline_name;
            con.query("select * from ticket natural join purchases natural join flight left join booking_agent on purchases.booking_agent_id = booking_agent.booking_agent_id join airport on flight.arrival_airport = airport.airport_name where " +
                "airline_name='" + airline_name + "' and departure_time >='" + date + "'", (err, upcoming) => {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    result.upcoming = upcoming;
                    con.query("select * from ticket natural join purchases natural join flight natural join booking_agent join airport on flight.arrival_airport = airport.airport_name where " +
                        "airline_name='" + airline_name + "' and departure_time <'" + date + "'", (err, history) => {
                            if (err) {
                                res.sendStatus(500);
                                return;
                            }
                            result.history = history;
                            res.send(result);
                        });
                });
        })
    }
    if (req.session.type === 'booking_agent') {
        con.query("select * from ticket natural join purchases natural join flight natural join booking_agent where " +
            "email='" + req.session.pk + "' and departure_time >='" + date + "'", (err, upcoming) => {
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                result.upcoming = upcoming;
                con.query("select * from ticket natural join purchases natural join flight natural join booking_agent where " +
                    "email='" + req.session.pk + "' and departure_time <'" + date + "'", (err, history) => {
                        if (err) {
                            res.sendStatus(500);
                            return;
                        }
                        result.history = history;
                        res.send(result);
                    });
            });
    }
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
})

app.post('/login', (req, res) => {
    console.log(getDate(), 'new login request received');
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
            console.log(getDate(), "'" + req.body.username + "'", 'login successfully');
            return;
        }
        console.log(getDate(), 'authentication failed');
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
            console.log(getDate(), 'new profile created for', req.body.email);
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
            console.log(getDate(), 'new profile created for', req.body.username);
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
            console.log(getDate(), 'new profile created for', req.body.username);
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
            res.cookie('searchResult', result);
            res.sendStatus(200);
            console.log(getDate(), 'search request handled')
        })
})

app.post('/ticket', (req, res) => {
    [airline_name, flight_num] = req.body.buyTicket.split("/");
    let info;
    con.query("select * from flight where " +
        "airline_name='" + airline_name +
        "' and flight_num='" + flight_num +
        "'", (err, result) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            if (result.length === 0) {
                res.sendStatus(404);
                return;
            }
            info = result[0];
            con.query("select * from airplane where " +
                "airline_name='" + info.airline_name +
                "' and airplane_id='" + info.airplane_id +
                "'", (err, result) => {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    if (result.length === 0) {
                        res.sendStatus(404);
                        return;
                    }
                    info.seats = result[0].seats;
                    con.query("select count(*) as c from ticket where " +
                        "airline_name='" + info.airline_name +
                        "' and flight_num='" + info.flight_num +
                        "'", (err, result) => {
                            if (err) {
                                res.sendStatus(500);
                                return;
                            }
                            info.remain = info.seats - result[0].c;
                            res.send(info);
                        })
                })
        })
})

app.post('/buy', (req, res) => {
    if (req.session.type !== 'customer' && req.session.type !== 'booking_agent') {
        console.log(getDate(), 'unauthorized purchased request refused');
        res.sendStatus(402);
        return
    } else {
        console.log(getDate(), 'purchase request received');
        let info;
        con.query("select * from flight where " +
            "airline_name='" + req.body.airline_name +
            "' and flight_num='" + req.body.flight_num +
            "'", (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                if (result.length === 0) {
                    res.sendStatus(404);
                    return;
                }
                info = result[0];
                con.query("select * from airplane where " +
                    "airline_name='" + info.airline_name +
                    "' and airplane_id='" + info.airplane_id +
                    "'", (err, result) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                            return;
                        }
                        if (result.length === 0) {
                            res.sendStatus(404);
                            return;
                        }
                        info.seats = result[0].seats;
                        const purchase = () => {
                            con.query("select count(*) as c from ticket", (err, result) => {
                                if (err) {
                                    console.log(err);
                                    res.sendStatus(500);
                                    return;
                                }
                                info.ticket_id = result[0].c;
                                date = new Date();
                                info.purchase_date = date.getUTCFullYear() + '-' +
                                    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                                    ('00' + date.getUTCDate()).slice(-2) + ' ' +
                                    ('00' + date.getUTCHours()).slice(-2) + ':' +
                                    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                                    ('00' + date.getUTCSeconds()).slice(-2);
                                insertValues = "'" + info.ticket_id + "','" + info.airline_name + "','" + info.flight_num + "'";
                                con.query("insert into ticket values (" + insertValues + ")", (err) => {
                                    if (err) {
                                        res.sendStatus(500);
                                        return;
                                    }
                                    if (req.session.type === 'customer') {
                                        insertValues = "'" + info.ticket_id + "','" + info.customer_email + "',null,'" + info.purchase_date + "'";
                                    } else {
                                        insertValues = "'" + info.ticket_id + "','" + info.customer_email + "','" + info.booking_agent_id + "','" + info.purchase_date + "'";
                                    }
                                    con.query("insert into purchases values (" + insertValues + ")", (err) => {
                                        if (err) {
                                            console.log(err);
                                            res.sendStatus(500);
                                            return;
                                        }
                                        console.log(getDate(), 'purchase request handled');
                                        res.sendStatus(200);
                                    })
                                })
                            })
                        }
                        con.query("select count(*) as c from ticket where " +
                            "airline_name='" + info.airline_name +
                            "' and flight_num='" + info.flight_num +
                            "'", (err, result) => {
                                if (err) {
                                    res.sendStatus(500);
                                    return;
                                }
                                if (result[0].c === info.seats) {
                                    res.sendStatus(401);
                                    return;
                                }
                                if (req.session.type === 'customer') {
                                    info.customer_email = req.session.pk;
                                    info.booking_agent_id = null;
                                    purchase();
                                } else {
                                    con.query("select * from booking_agent where email='" + req.session.pk + "'", (err, result) => {
                                        if (err) {
                                            res.sendStatus(500);
                                            return;
                                        }
                                        info.booking_agent_id = result[0].booking_agent_id;
                                        con.query("select * from customer where email='" + req.body.customer_email + "'", (err, result) => {
                                            if (err) {
                                                res.sendStatus(500);
                                                return;
                                            }
                                            if (result.length === 0) {
                                                res.sendStatus(403);
                                                return;
                                            }
                                            info.customer_email = req.body.customer_email;
                                            purchase();
                                        })
                                    })
                                }
                            })
                    })
            })
    }
})

app.post('/getFlightStatus', (req, res) => {
    console.log(req.body);
    con.query("select * from flight where flight_num='" + req.body.flight_num + "'", (err, result) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.cookie('searchResult', result);
        res.sendStatus(200);
        console.log(getDate(), 'search request handled')
    })
});

app.post('/getCustomer', (req, res) => {
    con.query("select flight_num from purchases natural join ticket natural join flight where customer_email='" + req.body.email + "'", (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.send(result);
    })
})

app.post('/add/airport', (req, res) => {
    if (req.session.type !== 'airline_staff') {
        res.sendStatus(401);
        console.log(getDate(), 'unauthorized add airport request refused');
        return;
    }
    let insertValue = '';
    insertValue += " ('" + req.body.airport_name + "','" + req.body.airport_city + "')";
    con.query('insert into airport values' + insertValue, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        console.log(getDate(), 'new airport added');
        res.sendStatus(200);
    })
})

app.post('/add/airplane', (req, res) => {
    if (req.session.type !== 'airline_staff') {
        res.sendStatus(401);
        console.log(getDate(), 'unauthorized add airport request refused');
        return;
    }
    con.query("select * from airline_staff where username='" + req.session.pk + "'", (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        const airline_name = result[0].airline_name;
        let insertValue = '';
        insertValue += " ('" + airline_name + "','" + req.body.airplane_id + "','" + req.body.seats + "')";
        con.query('insert into airplane values' + insertValue, (err) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log(getDate(), 'new airplane added');
            res.sendStatus(200);
        })
    })
})

app.post('/add/flight', (req, res) => {
    if (req.session.type !== 'airline_staff') {
        res.sendStatus(401);
        console.log(getDate(), 'unauthorized add airport request refused');
        return;
    }
    con.query("select * from airline_staff where username='" + req.session.pk + "'", (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        const airline_name = result[0].airline_name;
        let insertValue = '';
        insertValue += " ('" + airline_name;
        insertValue += "','" + req.body.flight_num;
        insertValue += "','" + req.body.departure_airport;
        insertValue += "','" + req.body.departure_time;
        insertValue += "','" + req.body.arrival_airport;
        insertValue += "','" + req.body.arrival_time;
        insertValue += "','" + req.body.price;
        insertValue += "','" + 'upcoming';
        insertValue += "','" + req.body.airplane_id + "')";
        con.query('insert into flight values' + insertValue, (err) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            console.log(getDate(), 'new flight added');
            res.sendStatus(200);
        })
    })
})

console.log(getDate(), 'server started at port', PORT);
app.listen(PORT);