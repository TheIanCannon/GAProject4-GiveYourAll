import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({NewDonationPage, DonationRecordPage, user, setUser}) {
		function handleLogOut() {
 			userService.logOut();
				setUser(null);
		}
  return (
    <header className="NavBar">
					 ◈&nbsp;<span>Welcome, {user.name}</span>&nbsp;◈&nbsp;<Link to="/donations/new" className="button btm-sm">Make a Donation</Link>&nbsp;◈&nbsp;
			   <Link to="/donations" className="button btm-sm">See Your Giving</Link>&nbsp;◈&nbsp;
      <Link to="" onClick={()=> handleLogOut()}>Log Out</Link>&nbsp;◈
      <br/>
						<br/>
    </header>
  );
}