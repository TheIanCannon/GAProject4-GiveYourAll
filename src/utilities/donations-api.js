import sendRequest from './send-request';

const BASE_URL="/api/donations";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addCharityToCart(ein) {
  return sendRequest(`${BASE_URL}/cart/charities/${ein}`, 'POST');
}

export function setDonationAmountInCart(ein, newAmount) {
  return sendRequest(`${BASE_URL}/cart/amount`, 'PUT', { ein, newAmount });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getDonationHistory() {
    return sendRequest(`${BASE_URL}/history`);
}