import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as charityAPI from '../../utilities/charities-api';

export default function CharityDetailPage(){
		const [charity, setCharity] = useState(null);
		const { ein } = useParams();
					
 useEffect(function(){
  		async function getCharity(){
  				const char = await charityAPI.getByEIN(ein);
 					setCharity(char);
				}
 			getCharity(charity);
	 },[]);

		if (!charity) return null;

		return(
				<div className="CharityDetailPageItem">
						<h4>{charity.name}</h4>
						<h5>Cause: {charity.cause}</h5>
						<h5>Rating: {charity.rating}</h5>
						<h5>Mission: {charity.mission}</h5>
						<h5>Website: {charity.URL}</h5>
						<button className="btn-sm" onClick={() => console.log(`${ein}`)}>
								Add
						</button>
				</div>
		);
}