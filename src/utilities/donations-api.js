import sendRequest from './send-request';

const BASE_URL="/api/donations";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addCharityToCart(charityEIN) {
  return sendRequest(`${BASE_URL}/cart/items/${charityEIN}`, 'POST');
}

export function setDonationAmountInCart(charityEIN, newAmount) {
  return sendRequest(`${BASE_URL}/cart/amount`, 'PUT', { charityEIN, newAmount });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getDonationHistory() {
    return sendRequest(`${BASE_URL}/history`);
}