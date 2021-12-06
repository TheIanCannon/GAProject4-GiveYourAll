import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as charityAPI from '../../utilities/charities-api';
import * as donationsAPI from '../../utilities/donations-api';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import './CharityDetailPage.css';

export default function CharityDetailPage({user, setUser, handleAddToDonate}){
		const [charity, setCharity] = useState(null);
		const [cart, setCart] = useState(null);
		const navigate = useNavigate();
		const { ein } = useParams();
					
 useEffect(function(){
  	async function getCharity(){
  			const char = await charityAPI.getByEIN(ein);
 				setCharity(char);
					}
 				getCharity(charity);
	 
			if (!charity) return null;

			async function getCart() {
					const cart = await donationsAPI.getCart();
					setCart(cart);
			}
			getCart();
	}, []);

	async function handleAddToDonations(charityEIN) {
			const updatedCart = await donationsAPI.addCharityToCart(charityEIN);
			setCart(updatedCart);
	}

	async function handleChangeQty(charityEIN, newAmount) {
			const updatedCart = await donationsAPI.setDonationAmountInCart(charityEIN, newAmount);
			setCart(updatedCart);
	}

	async function handleCheckout() {
		await donationsAPI.checkout();
		navigate('/donations');
	}

	return(
			<main className="CharityDetailPage">
					<h4>{charity.name}</h4>
					<h5>Cause: {charity.cause}</h5>
					<h5>Rating: {charity.rating}</h5>
					<h5>Mission: {charity.mission}</h5>
					<h5>Website: {charity.URL}</h5>
					<button className="btn-sm" onClick={() => handleAddToDonate(charity._id)}>
							Make a Donation
					</button>
			</main>

	);
}