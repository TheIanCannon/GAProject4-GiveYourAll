import React from 'react';

export default function SearchResultsItem({charity}){
		return(
			<div className="SearchResultsItem">
					<h4 className="CharityName">{charity.charityName}</h4>
					<h5>{charity.charityCause}</h5>
					<h5>{charity.charityRating}</h5>
			</div>
		);
}