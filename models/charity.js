const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
		name: {type: String, require: true},
		rating: {type: Number},
		cause: {type: String},
		mission: {type: String},
		url: {type: String},
		ein: {type: String},
});

module.exports = mongoose.model('Charity', charitySchema);