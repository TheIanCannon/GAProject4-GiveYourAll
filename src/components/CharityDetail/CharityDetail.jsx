import React, { useEffect } from 'react';
import * as charityAPI from '../../utilities/charities-api';
import './CharityDetail.css';

export default function CharityDetail({charity, selectedCharity, setSelectedCharity, handleAddToDonation}){
			
		 useEffect(function(){
   		async function getCharity(){
  			let choseChar = await charityAPI.getByEIN(charity.EIN);
 		 	setSelectedCharity(choseChar);
					}
 				getCharity(charity);
	  }, []);

	return(
			<div className="CharityDetail">
							<h3>Charity Details</h3>
							{ charity? <div>
							<h4>{charity.name}</h4>
							<h5>Cause: {charity.cause}</h5>
							<h5>Rating: {charity.rating}</h5>
							<h5>Mission: {charity.mission}</h5>
							<h5>Website: {charity.URL}</h5>
							<button className="btn-sm" onClick={() => handleAddToDonation(selectedCharity._id)}>
									Make a Donation
							</button>
							</div>	
							:
							<div>No Charity</div>
							}
			</div>
	);
}

