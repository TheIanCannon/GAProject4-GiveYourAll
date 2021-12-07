const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');

// GET /api/donations/cart
router.get('/cart', donationsCtrl.cart);
// GET /api/donations/history
router.get('/history', donationsCtrl.history);
// POST /api/donations/cart/donations/:ein
router.post('/cart/donations/:ein', donationsCtrl.addToCart);
// POST /api/donations/cart/checkout
router.post('/cart/checkout', donationsCtrl.checkout);
// POST /api/donations/cart/amount
router.put('/cart/amount', donationsCtrl.setDonationAmountInCart);

module.exports = router;