import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchResultsItem({charity}){
		return(
			<div className="SearchResultsItem">
					<Link to={`/${charity.charityEIN}`}>
							<h4 className="CharityName">{charity.charityName}</h4>
							<h5>{charity.charityCause}</h5>
							<h5>{charity.charityRating}</h5>
					</Link>
			</div>
		);
}