const Donation = require('../../models/donation');

module.exports = {
    cart,
    addToCart,
    setDonationAmountInCart,
    checkout,
				history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    const cart = await Donation.getCart(req.user._id);
    res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
    const cart = await Donation.getCart(req.user._id);
    await cart.addCharityToCart(req.params.ein);
    res.json(cart);
}

// Updates an item's qty in the cart
async function setDonationAmountInCart(req, res) {
    const cart = await Donation.getCart(req.user._id);
    await cart.setDonationAmount(req.body.ein, req.body.newAmount);
    res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    const cart = await Donation.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

// Return the logged in user's paid order history
async function history(req, res) {
    // Sort most recent orders first
    const donations = await Donation
        .find({ user: req.user._id, isPaid: true })
        .sort('-updatedAt').exec();
    res.json(donations);
}