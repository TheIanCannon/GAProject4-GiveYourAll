const mongoose = require('mongoose');

const charitySchema = require('./charitySchema');

module.exports = mongoose.model('Charity', charitySchema);