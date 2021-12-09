import "./DonationListItem.css";
import React from 'react';

export default function DonationListItem({donation, donationItem, donationItems}) {
		const totalAmount = (donation.donationTotal).toPrecision(4);
  const amountId = (donation._id).slice(0,6).toUpperCase();
  
		return(
				<div className = "DonationList">
						<br/>
						<div>Donation Id: {amountId}</div>
						<br/>
						<div>{new Date(donation.updatedAt).toLocaleDateString()}</div>
						<br/> 
						<div>${totalAmount}</div>
						<br/> 
				</div>
		);
}