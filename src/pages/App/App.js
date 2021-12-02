import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharityList from '../../components/CharityList/CharityList';
import CharityListItem from '../../components/CharityListItem/CharityListItem';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [searchResult, setSearchResult] = useState("");
    return ( < main className = "App" > {
            user ? < >
            <
            NavBar user = { user }
            setUser = { setUser }
            />  <
            SearchBar / >
            <
            CharityList / >
            <
            CharityListItem / >
            <
            Routes > { /* client-side route that renders the component instance if the path matches the url in the address bar */ } <
            /Routes> </ > : < AuthPage setUser = { setUser }
            />}  < /
            main >
        );
    }