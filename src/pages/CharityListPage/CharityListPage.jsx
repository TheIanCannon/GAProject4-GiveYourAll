import {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function CharityListPage(){
		const [charities, setCharities] = useState([]);
		return(
				<SearchBar setCharities={setCharities}/>
		);
}