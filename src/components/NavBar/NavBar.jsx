import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({NewDonationPage, DonationHistoryPage, user, setUser}) {

		const [showDonation, setShowDonation] = useState(true);

		function handleLogOut() {
				userService.logOut();
				setUser(null);
		}

  return (
    <nav>
						<span>Welcome, {user.name}</span>
      <Link to="" onClick={()=>handleLogOut()}>Log Out</Link>
			   <Link to="" onClick={() =>setShowDonation(!showDonation)}>{showDonation ? 'Make A Donation': 'See Your Giving'}
      {showDonation ? <NewDonationPage user={user} setUser={setUser}/> : <DonationHistoryPage user={user} setUser={setUser} />}></Link>
    </nav>
  );

}
