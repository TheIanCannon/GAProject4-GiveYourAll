import React from 'react';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';
import './SearchResults.css';

export default function SearchResults({setActiveCharity, setCharity, charities}){
		
		return(
				<div className="SearchResults">
								{charities? 
										<ul className="EachResult">
												{charities.map((charity, key) => (
														<SearchResultsItem setActiveCharity={setActiveCharity} setCharity={setCharity} charity={charity} key={key}/>
												))} 
										</ul>
										:
									 <div>
										Find A Charity!
										</div>
										}
				</div>
		);

}