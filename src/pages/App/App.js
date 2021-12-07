import React, {useState} from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewDonationPage from '../NewDonationPage/NewDonationPage';
import DonationHistoryPage from '../DonationHistoryPage/DonationHistoryPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
		return ( 
				<main className = "App"> 
						{ user ? 
							 <Routes> 
						 			<Route path="/donations/new" element={<NewDonationPage user={user} setUser={setUser} />} />
						  		<Route path="/donations" element={<DonationHistoryPage user={user} setUser={setUser} />} />
						  		{/* <Route path ="/*" element={<Navigate to="/donations/new" />} /> */}
								</Routes> 
								: 
								<AuthPage setUser = { setUser }/>
						}  
				</main>
  );
}
