const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const charity=require('./charity');

const donationItemSchema = new Schema({
		amount:{type: Number, default: 1},
		donationItem : charity
},{
		timestamps: true,
		toJSON: {virtuals: true}
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
  return this.donationItems.reduce((total, donationItem) => total + donationItem, 0);
});

donationSchema.virtual('totalAmount').get(function() {
  return this.donationItems.reduce((total, donationItem) => total + donationItem.amount, 0);
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

donationSchema.methods.addCharityToCart = async function(charityEIN) {
		const cart = this;
		const donationItem = cart.donationItems.find(donationItem => donationItem.charity._id.equals(charityEIN));
		if (donationItem) {
				donationItem.amount += 1;
		} else {
				const donationItem = await mongoose.model('Charity').findById(charityEIN);
				cart.donationItems.push({donationItem});
		}
		return cart.save();
};

donationSchema.methods.setDonateAmount = function(charityEIN, newAmount) {
		const cart = this;
		const donationItem = cart.donationItems.find(donationItem => donationItem.charity._id.equals(charityEIN));
		if (donationItem && newAmount <= 0) {
				donationItem.remove();
		} else if (donationItem) {
				donationItem.amount = newAmount;
		}
		return cart.save();
};

module.exports = mongoose.model('Donation', donationSchema);