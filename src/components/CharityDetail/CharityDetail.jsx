import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as charityAPI from '../../utilities/charities-api';
import * as donationsAPI from '../../utilities/donations-api';
import './CharityDetail.css';

export default function CharityDetail({setCart, handleAddToDonation}){
	const [charity, setCharity] = useState(null);			
	const { ein } = useParams();

 useEffect(function(){
  	async function getCharity(){
  			const char = await charityAPI.getByEIN(ein);
 				setCharity(char);
					}
 				getCharity(charity);
	 			if (!charity) return null;
	}, []);

 useEffect(function(){
				async function getCart() {
				const cart = await donationsAPI.getCart();
				setCart(cart);
				}
				getCart();
	}, []);
	
	return(
			<div className="CharityDetails">
					<h4>{charity.name}</h4>
					<h5>Cause: {charity.cause}</h5>
					<h5>Rating: {charity.rating}</h5>
					<h5>Mission: {charity.mission}</h5>
					<h5>Website: {charity.URL}</h5>
					<button className="btn-sm" onClick={() => handleAddToDonation(charity._id)}>
							Make a Donation
					</button>
			</div>
	);
}