import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({user, setUser}) {
		function handleLogOut() {
 			userService.logOut();
				setUser(null);
		}
  return (
    <header className="NavBar">
						<br/>
					 <span>Welcome, {user.name}</span>&nbsp;◈&nbsp;
						<Link to="/donations/new" className="button btm-sm">Make a Donation</Link>
						<img className="Logo" alt="" src="https://i.imgur.com/q8e9ujq.png"/>
			   <Link to="/donations" className="button btm-sm">See Your Giving</Link>&nbsp;◈&nbsp;
      <Link to="" onClick={()=> handleLogOut()}>Log Out</Link>
      <br/>
						<br/>
    </header>
  );
}