const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const charitySchema = require('./charitySchema');

const donationItemSchema = new Schema({
		amount: { type: Number, default: 1 },
		charity : charitySchema
},{
		timestamps: true,
});

const donationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  donationItems: [donationItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

donationSchema.virtual('donationTotal').get(function() {
  return this.donationItems.reduce((total) => total += total, 0);
});

donationSchema.virtual('totalAmount').get(function() {
  return this.donationItems.reduce((total) => total += total, 0);
});

donationSchema.virtual('donationId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

donationSchema.statics.getCart = function(userId) {
		return this.findOneAndUpdate(
				{user: userId, isPaid: false},
				{user: userId},
				{upsert: true, new: true}
		);
};

donationSchema.methods.addCharityToCart = async function(charityId) {
		const cart = this;
		const donationItem = cart.donationItems.find(donationItem => donationItem._id.equals(charityId));
  if (donationItem) {
    donationItem.amount += 1;
		} else {
				const donationItem = await mongoose.model('Charity').findById(charityId);
				cart.donationItems.push({donationItem});
		}
		return cart.save();
};

donationSchema.methods.setDonationAmount = function(charityId, newAmount) {
		const cart = this;
		const donationItem = cart.donationItems.find(donationItem => donationItem._id.equals(charityId));
		if (donationItem && newAmount <= 0) {
				donationItem.remove();
		} else if (donationItem) {
				donationItem.amount = newAmount;
		}
		return cart.save();
};

module.exports = mongoose.model('Donation', donationSchema);