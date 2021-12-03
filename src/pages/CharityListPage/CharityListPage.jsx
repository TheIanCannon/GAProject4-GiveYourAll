import {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function CharityListPage({charities}){
		const [charities, setCharities] = useState([]);

		return(<div>
				<SearchBar setCharities={setCharities}/>
				<SearchResults charity={charity}/>
</div>
		);
}