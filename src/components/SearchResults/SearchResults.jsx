import React, {useState, useEffect} from 'react';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

export default function SearchResults({setActiveCharity, setCharity, charities}){
		
		return(
				<div className="SearchResults">
						<ul className="EachResult">
								{charities.map((charity, key) => (
										<SearchResultsItem setActiveCharity={setActiveCharity} setCharity={setCharity} charity={charity} key={key}/>
								))} 
						</ul>
			</div>
		);

}