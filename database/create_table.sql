CREATE TABLE airline
(
    airline_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (airline_name)
);

CREATE TABLE airline_staff
(
    username VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    airline_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (username),
    FOREIGN KEY (airline_name) REFERENCES airline(airline_name) ON DELETE CASCADE
);

CREATE TABLE airplane
(
    airplane_id NUMERIC(4,0) NOT NULL,
    airline_name VARCHAR(20) NOT NULL,
    seats NUMERIC(4,0) NOT NULL,
    PRIMARY KEY (airline_name, airplane_id),
    FOREIGN KEY (airline_name) REFERENCES airline(airline_name) ON DELETE CASCADE
);

CREATE TABLE airport
(
    airport_name VARCHAR(20) NOT NULL,
    airport_city VARCHAR(20) NOT NULL,
    PRIMARY KEY (airport_name)
);

CREATE TABLE booking_agent
(
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    booking_agent_id NUMERIC(8,0) NOT NULL,
    PRIMARY KEY (booking_agent_id)
);

CREATE TABLE customer
(
    email VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    building_number VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    phone_number NUMERIC(16,0) NOT NULL,
    passport_number VARCHAR(20) NOT NULL,
    passport_expiration DATE NOT NULL,
    passport_country VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    PRIMARY KEY (email)
);

CREATE TABLE flight
(
    airline_name VARCHAR(20) NOT NULL,
    flight_num NUMERIC(4,0) NOT NULL,
    departure_airport VARCHAR(20) NOT NULL,
    departure_time DATETIME,
    arrival_airport VARCHAR(20) NOT NULL,
    arrival_time DATETIME,
    price NUMERIC(8,2),
    status VARCHAR(20),
    airplane_id NUMERIC(4,0) NOT NULL,
    PRIMARY KEY (airline_name, flight_num),
    FOREIGN KEY (airline_name, airplane_id) REFERENCES airplane(airline_name, airplane_id) ON DELETE CASCADE,
    FOREIGN KEY (departure_airport) REFERENCES airport(airport_name) ON DELETE CASCADE,
    FOREIGN KEY (arrival_airport) REFERENCES airport(airport_name) ON DELETE CASCADE
);

CREATE TABLE ticket
(
    ticket_id NUMERIC(8,0) NOT NULL,
    airline_name VARCHAR(20),
    flight_num NUMERIC(4,0),
    PRIMARY KEY (ticket_id),
    FOREIGN KEY (airline_name, flight_num) REFERENCES flight (airline_name, flight_num) ON DELETE SET NULL
);

CREATE TABLE purchases
(
    ticket_id NUMERIC(8,0) NOT NULL,
    customer_email VARCHAR(20),
    booking_agent_id NUMERIC(8,0),
    purchase_date DATE NOT NULL,
    PRIMARY KEY (ticket_id),
    FOREIGN KEY (ticket_id) REFERENCES ticket (ticket_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_email) REFERENCES customer (email) ON DELETE SET NULL,
    FOREIGN KEY (booking_agent_id) REFERENCES booking_agent (booking_agent_id) ON DELETE SET NULL
);
