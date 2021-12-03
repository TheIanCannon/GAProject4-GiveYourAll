import React from 'react';

export default function SearchResults({charity}){
		return(
				<div className="SearchResults">
						<ul className="EachResult">
								{charity.map(c => (
										<SearchResultsItem charity={charity}/>
								))}
						</ul>
			</div>
		);
}