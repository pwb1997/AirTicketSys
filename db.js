const mongoose = require('mongoose');
const fs = require('fs');
const timestamp = require('mongoose-timestamp');
const URLSlugs = require('mongoose-url-slugs');

// create schema
const Stock = new mongoose.Schema({
  symbol: String,
  share: Number,
  costBasis: Number
});

const Portfolio = new mongoose.Schema({
  name: String,
  description: String,
  colorTag: String,
  stocks: [Stock]
});

const User = new mongoose.Schema({
  uid: String,
  uname: String,
  portfolios: [Portfolio]
});

User.plugin(timestamp);
Portfolio.plugin(timestamp);
Stock.plugin(timestamp);
Portfolio.plugin(URLSlugs('name'));
Stock.plugin(URLSlugs('symbol'));

mongoose.model('Portfolio', Portfolio);
mongoose.model('Stock', Stock);
mongoose.model('User', User);


// connect to db
console.log("NODE_ENV is set to " + process.env.NODE_ENV);
let dbconf = 'mongodb://localhost/pb1713';
if (process.env.NODE_ENV === 'PRODUCTION') {
  console.log("[using remote database]");
  dbconf = JSON.parse(fs.readFileSync(__dirname + "/config.json")).dbconf;
} else {
  console.log("[using local database]");
}
console.log("Connecting to " + dbconf);
mongoose.connect(dbconf);
