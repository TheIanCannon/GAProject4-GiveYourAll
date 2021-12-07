import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as donationsAPI from '../../utilities/donations-api';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchResultsItem from '../../components/SearchResultsItem/SearchResultsItem';
import CharityDetail from '../../components/CharityDetail/CharityDetail';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import './NewDonationPage.css';

export default function NewDonationPage({user, setUser}){
  const [charity, setCharity] = useState(null);
		const [charities, setCharities] = useState([]);
		const [activeCharity, setActiveCharity] = useState(false);
		const [selectedCharity, setSelectedCharity] = useState(null);
	 const [cart, setCart] = useState(null);
 	const navigate = useNavigate();

		useEffect(function(){
	 		async function getCart() {
	 		const cart = await donationsAPI.getCart();
	 		setCart(cart);
				}
	 		getCart();
	 }, []);

		async function handleAddToDonation(ein) {
				console.log('look', ein);
				const updatedCart = await donationsAPI.addCharityToCart(ein);
				setCart(updatedCart);
		}
		
		async function handleChangeAmount(charityEIN, newAmount) {
			const updatedCart = await donationsAPI.setDonationAmountInCart(charityEIN, newAmount);
			setCart(updatedCart);
		}

		async function handleCheckout() {
				await donationsAPI.checkout();
				navigate('/donations');
		}

		return(
				<main className="NewDonationPage">
						<NavBar 
								user={user} 
								setUser={setUser}
						/>
						<SearchBar 
								charities={charities} 
								setCharities={setCharities} 
						/>
						<SearchResults 
								charities={charities} 
								setCharities={setCharities} 
								SearchResultsItem={SearchResultsItem}
								setCharity={setCharity}
								setActiveCharity={setActiveCharity}
						/>
						{activeCharity && <CharityDetail 
									charity={charity}
									setCharity={setCharity}
						  	handleAddToDonation={handleAddToDonation}
									selectedCharity={selectedCharity}
									setSelectedCharity={setSelectedCharity}
						/>}
						<DonationDetail 
								donation={cart} 

								handleChangeAmount={handleChangeAmount} 
								handleCheckout={handleCheckout}
							/>
				</main>
		);
}