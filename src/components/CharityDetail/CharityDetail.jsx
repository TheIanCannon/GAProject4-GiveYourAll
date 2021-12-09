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
							{ charity ? <div>
							<h4>{charity.name}</h4>
							<h5>Cause:</h5><div>{charity.cause}</div>
							<h5>Rating:</h5><div>{charity.rating}</div>
							<h5>Mission:</h5><div>{charity.mission}</div>
							<h5>Website:</h5><div>{charity.URL}</div>
							<br/>
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

