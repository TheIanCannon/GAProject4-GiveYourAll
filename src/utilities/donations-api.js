import sendRequest from './send-request';

const BASE_URL="/api/donations";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addCharityToCart(ein) {
  return sendRequest(`${BASE_URL}/cart/items/${ein}`, 'POST');
}

export function setDonationAmountInCart(ein, newAmount) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { ein, newAmount });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}