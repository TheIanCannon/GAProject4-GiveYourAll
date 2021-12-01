import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import axios from 'axios';

export default function App() {
    const [user, setUser] = useState(getUser());
    return ( < main className = "App" > {
            user ? < >
            <
            NavBar user = { user }
            setUser = { setUser }
            />  <
            SearchPage / >
            <
            Routes > { /* client-side route that renders the component instance if the path matches the url in the address bar */ } <
            /Routes> </ > : < AuthPage setUser = { setUser }
            />}  < /
            main >
        );
    }