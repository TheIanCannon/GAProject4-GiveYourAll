import React from 'react';
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";

export default function SearchResults({charities}){
		return(
				<div className="SearchResults">
						<ul className="EachResult">
								{charities.map((charity, key) => (
										<SearchResultsItem charity={charity} key={key}/>
								))} 
						</ul>
			</div>
		);
}