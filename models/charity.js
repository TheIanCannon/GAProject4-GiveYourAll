const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
		name: {type: String, required: true},
		rating: {type: Number, default: 0},
		mission: {type: String},
		cause: {type: String},
		url: {type: String},
});

// charitySchema.virtual('charityId').get(function() {
// 		return this.id.slice(-6).toUpperCase();
// });

module.exports = mongoose.model('Charity', charitySchema);