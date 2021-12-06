import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharityListPage from '../CharityListPage/CharityListPage';
import CharityDetailPage from '../CharityDetailPage/CharityDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
		const [charities, setCharities] = useState([]);
		return ( < main className = "App" > {
    user ? <>
      <NavBar user = { user } setUser = { setUser }/>
						<SearchBar charities={charities}  setCharities={setCharities}/>
						<Routes> 
								<Route path="/" element={<CharityListPage setCharities={setCharities} charities={charities}/>}/>
								<Route path="/charities/:ein" element={<CharityDetailPage/>}/>
								<Route path ="/*" element={<Navigate to="/donations/new" />} />
						</Routes> 
						</> 
						: 
						<AuthPage setUser = { setUser }/>}  
						</main>
  );
}
