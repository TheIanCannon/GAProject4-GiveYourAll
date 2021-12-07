import sendRequest from './send-request';

const BASE_URL='/api/charities';

//search for charities from API

export function search(term){
		return sendRequest(`${BASE_URL}?search=${term}`);
}

//bring up detail on a single charity

export function getByEIN(ein) {
	return sendRequest(`${BASE_URL}/${ein}`);
}
 