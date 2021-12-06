const Schema = require('mongoose').Schema;

const charitySchema = new Schema({
		charityName: {type: String, require: true},
		charityRating: {type: Number},
		charityCause: {type: String},
		charityMission: {type: String},
		charityURL: {type: String},
		charityEIN: {type: String, require: true},
  },{
		timestamps: true
});

module.exports = charitySchema;