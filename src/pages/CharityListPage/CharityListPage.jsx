import {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function CharityListPage({charities, setCharities}){
		return(
				<>
						<SearchBar charities={charities}  setCharities={setCharities}/>
						<SearchResults charities={charities} setCharities={setCharities}/>
				</>
		);
}