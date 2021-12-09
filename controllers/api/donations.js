const Donation = require('../../models/donation');
const Charity = require('../../models/charity');

module.exports = {
    cart,
    addToCart,
    setDonationAmountInCart,
    checkout,
				donationsRecord,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    const cart = await Donation.getCart(req.user._id);
    res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
    const cart = await Donation.getCart(req.user._id);
    await cart.addCharityToCart(req.params.id);
    res.json(cart);
}

// Update the donation amount for a given charity in the cart
async function setDonationAmountInCart(req, res) {
    const cart = await Donation.getCart(req.user._id);
				console.log(req.body);
    await cart.setDonationAmount(req.body.charityId, req.body.newAmount);
				res.json(cart);
}

async function checkout(req, res) {
  const cart = await Donation.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function donationsRecord(req, res) {
  const donations = await Donation
  .find({ user: req.user._id, isPaid: true })
  .sort('-updatedAt').exec();
  res.json(donations);
}