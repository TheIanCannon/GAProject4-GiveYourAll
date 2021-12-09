// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Charity = require('./models/charity');
const User = require('./models/user');
const Donation = require('./models/donation');

// Local variables will come in handy for holding retrieved documents
let user, charity, order;
let users, charities, orders;
