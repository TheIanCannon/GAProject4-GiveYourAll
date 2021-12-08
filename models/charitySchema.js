const Schema = require('mongoose').Schema;

const charitySchema = new Schema({
		name: {type: String, required: true},
		rating: {type: Number},
		cause: {type: String},
		mission: {type: String},
		URL: {type: String},
		EIN: {type: String},
}, {
		timestamps: true
});

module.exports = charitySchema;