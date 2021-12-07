import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as donationsAPI from '../../utilities/donations-api';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchResultsItem from '../../components/SearchResultsItem/SearchResultsItem';
import CharityDetail from '../../components/CharityDetail/CharityDetail';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import './NewDonationPage.css';

export default function NewDonationPage({user, setUser}){
		const [charity, setCharity] = useState({});
		const [charities, setCharities] = useState([]);
		const [cart, setCart] = useState(null);
		const navigate = useNavigate();

		async function handleAddToDonation(charityEIN) {
				const updatedCart = await donationsAPI.addCharityToCart(charityEIN);
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
						<NavBar user={user} setUser={setUser}/>
						<SearchBar charities={charities} setCharities={setCharities} />
						<SearchResults charities={charities} setCharities={setCharities} SearchResultsItem={SearchResultsItem}/>
						<CharityDetail charity={charity} handleAddToDonation={handleAddToDonation} />
						<DonationDetail donation={cart} handleChangeAmount={handleChangeAmount} handleCheckout={handleCheckout}/>
				</main>
		);
}