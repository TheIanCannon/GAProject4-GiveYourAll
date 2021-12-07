import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import NewDonationPage from '../../pages/NewDonationPage/NewDonationPage';
import DonationHistoryPage from '../../pages/DonationHistoryPage/DonationHistoryPage';

export default function NavBar({user, setUser}) {

		const [showDonation, setShowDonation] = useState(true);

		function handleLogOut() {
				userService.logOut();
				setUser(null);
		}

  return (
    <nav>
						<span>Welcome, {user.name}</span>
      <Link to="" onClick={()=>handleLogOut()}>Log Out</Link>
			   <button onClick={() => setShowDonation(!showDonation)}>{showDonation ? 'Give': 'Your Giving'}</button>
      {showDonation ? <NewDonationPage user={user} setUser={setUser}/> : <DonationHistoryPage user={user} setUser={setUser} />}
    </nav>
  );

}
