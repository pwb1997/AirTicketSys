INSERT INTO `airline` (`airline_name`) VALUES
('Jet Blue');

INSERT INTO `airline_staff` (`username`, `password`, `first_name`, `last_name`, `date_of_birth`, `airline_name`) VALUES
('AirlineStaff', 'e19d5cd5af0378da05f63f891c7467af', 'Joe', 'Bland', '1980-02-05', 'Jet Blue');

INSERT INTO `airplane` (`airline_name`, `airplane_id`, `seats`) VALUES
('Jet Blue', 1, 100),
('Jet Blue', 2, 50),
('Jet Blue', 3, 75);

INSERT INTO `airport` (`airport_name`, `airport_city`) VALUES
('JFK', 'New York City'),
('La Guardia', 'New York City'),
('Louisville SDF', 'Louisville'),
('O\'Hare', 'Chicago'),
('SFO', 'San Francisco');

INSERT INTO `booking_agent` (`email`, `password`, `booking_agent_id`) VALUES
('Booking@agent.com', 'e19d5cd5af0378da05f63f891c7467af', 1),
('Professional@booking.com', 'e19d5cd5af0378da05f63f891c7467af', 2);

INSERT INTO `customer` (`email`, `name`, `password`, `building_number`, `street`, `city`, `state`, `phone_number`, `passport_number`, `passport_expiration`, `passport_country`, `date_of_birth`) VALUES
('Customer@nyu.edu', 'Customer', 'e19d5cd5af0378da05f63f891c7467af', '2', 'Metrotech', 'New York', 'New York', 2125551234, 'P123456', '2020-10-24', 'USA', '1990-04-01'),
('one@nyu.edu', 'One', '098f6bcd4621d373cade4e832627b4f6', '6', 'Metrotech', 'New York', 'New York', 2125559873, 'P53412', '2021-04-05', 'USA', '1990-04-04'),
('two@nyu.edu', 'Two', '098f6bcd4621d373cade4e832627b4f6', '5', 'Metrotech', 'New York', 'New York', 2125558123, 'P436246', '2027-04-20', 'USA', '1992-04-18');

INSERT INTO `flight` (`airline_name`, `flight_num`, `departure_airport`, `departure_time`, `arrival_airport`, `arrival_time`, `price`, `status`, `airplane_id`) VALUES
('Jet Blue', 139, 'SFO', '2018-05-20 23:50:00', 'JFK', '2018-05-21 08:50:00', '200', 'On Time', 1),
('Jet Blue', 296, 'O\'Hare', '2018-06-01 12:00:00', 'SFO', '2018-06-01 14:00:00', '420', 'On Time', 1),
('Jet Blue', 307, 'La Guardia', '2018-05-19 22:00:00', 'SFO', '2018-05-20 02:00:00', '600', 'On Time', 1),
('Jet Blue', 455, 'JFK', '2018-05-25 05:00:00', 'Louisville SDF', '2018-05-25 07:00:00', '97', 'On Time', 3),
('Jet Blue', 915, 'O\'Hare', '2018-03-29 00:00:00', 'SFO', '2018-03-29 04:00:00', '500', 'Delayed', 2);

INSERT INTO `ticket` (`ticket_id`, `airline_name`, `flight_num`) VALUES
(1, 'Jet Blue', 139),
(2, 'Jet Blue', 307),
(3, 'Jet Blue', 915),
(4, 'Jet Blue', 915),
(5, 'Jet Blue', 915),
(6, 'Jet Blue', 455),
(7, 'Jet Blue', 455),
(8, 'Jet Blue', 307),
(9, 'Jet Blue', 455);

INSERT INTO `purchases` (`ticket_id`, `customer_email`, `booking_agent_id`, `purchase_date`) VALUES
(1, 'Customer@nyu.edu', NULL, '2018-04-01'),
(2, 'Customer@nyu.edu', 1, '2018-04-14'),
(3, 'one@nyu.edu', 2, '2018-03-10'),
(4, 'two@nyu.edu', 2, '2018-03-11'),
(5, 'Customer@nyu.edu', 1, '2018-03-12'),
(6, 'one@nyu.edu', null, '2018-02-19'),
(7, 'two@nyu.edu', null, '2018-02-23'),
(8, 'one@nyu.edu', 1, '2018-04-13'),
(9, 'Customer@nyu.edu', 1, '2018-01-19');
