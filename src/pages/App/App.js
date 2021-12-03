import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CharityListPage from '../CharityListPage/CharityListPage';

export default function App() {
    const [user, setUser] = useState(getUser());
    return ( < main className = "App" > {
            user ? < >
            <NavBar user = { user } setUser = { setUser }/>  
												<Routes > 
														<Route path="/" element={<CharityListPage/>}/>
												</Routes> 
												</> 
												: 
												<AuthPage setUser = { setUser }/>}  
												</main>
        );
    }