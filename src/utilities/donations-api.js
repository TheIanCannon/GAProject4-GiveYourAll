import sendRequest from './send-request';

const BASE_URL="/api/donations";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addCharityToCart(charityId) {
  return sendRequest(`${BASE_URL}/cart/charities/${charityId}`, 'POST');
}

export function setDonationAmountInCart(charityId, newAmount) {
		console.log('DONATIONS-API', 'charityId:', charityId, 'newAmount:', newAmount);
  return sendRequest(`${BASE_URL}/cart/amount`, 'PUT', { charityId, newAmount });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getDonationHistory() {
    return sendRequest(`${BASE_URL}/donationsRecord`);
}