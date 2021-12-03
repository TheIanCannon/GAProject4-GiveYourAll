import React from 'react';

export default function SearchResultsItem({charity}){
		return(
				<div className="SearchResultsItem">
							<div className="CharityName">{charity.name}</div>
							<div className="CharityRating">{charity.rating}</div>
							<div className="CharityCause">{charity.cause}</div>
							<div className="CharityMission">{charity.mission}</div>
							<div className="CharityURL">{charity.url}</div>
				</div>
		);
}