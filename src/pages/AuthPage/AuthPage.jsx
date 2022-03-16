import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
				<main className="AuthPage">
						<div className="AuthBox">
								<img className="LoginLogo" alt="" src="https://i.imgur.com/q8e9ujq.png"/>
								<h1 className="AppTitle">Give Your All</h1>
								<button className="SignLogButton" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
								{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
						</div>
				</main>
  );
}