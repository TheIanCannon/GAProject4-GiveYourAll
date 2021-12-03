import React from 'react';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

export default function searchResults({charities}){
		const searchItems = charities.map(charity =>
				<SearchResultsItem
						key={charity}			
						charity={charity}
				/>
  );

		return(
				<div className="CharitiesList">
						{searchItems}
				</div>
		);
}