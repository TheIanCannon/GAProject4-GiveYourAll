import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharityDetailPage({charities}){
		const { ein } = useParams();
		const charity = charities.find((c) => c.charityEIN === ein);

		useEffect(() => {
				charityGet(charity);
				
		});
		
		return(
				<div className="CharityDetailPageItem">
						<h4>{charity.charityName}</h4>
						<h5>Cause: {charity.charityCause}</h5>
						<h5>Rating: {charity.charityRating}</h5>
						<h5>Mission: {charity.charityMission}</h5>
						<h5>Website: {charity.charityURL}</h5>
						<button className="btn-sm" onClick={() => console.log('test')}>
								Add
						</button>
				</div>
		);
}