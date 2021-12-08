import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({NewDonationPage, DonationHistoryPage, user, setUser}) {

		const [showDonation, setShowDonation] = useState(true);

		function handleLogOut() {
				userService.logOut();
				setUser(null);
		}

  return (
    <div>
						<span>Welcome, {user.name}</span>&nbsp;|&nbsp;
			   <Link to="/orders/new" className="button btm-sm">Make a Donation</Link>&nbsp;|&nbsp;
			   <Link to="/orders" className="button btm-sm">See Your Giving</Link>&nbsp;|&nbsp;
      <Link to="" onClick={()=> handleLogOut()}>Log Out</Link>&nbsp;|&nbsp;
      
    </div>
  );

}
