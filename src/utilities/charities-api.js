import sendRequest from './send-request';

const BASE_URL="/api/charities";

export function getByEIN(ein) {
	return sendRequest(`${BASE_URL}/${ein}`);
}
 
export function search(term){
		return sendRequest(`${BASE_URL}?search=${term}`);
}