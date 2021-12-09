import "./DonationListItem.css";
import React from 'react';

export default function DonationListItem({donation, donationItem}) {
		const totalAmount = (donation.donationTotal).toPrecision(4);
  const amountId = (donation._id).slice(0,6).toUpperCase();
  
		return(
				<div className = "DonationList">
						<div>Donation Id: {amountId}</div>
						<br/> 
						<div>{new Date(donation.updatedAt).toLocaleDateString()}</div>
						<br/> 
						<div>$ {totalAmount} .00</div>
				</div>
		);
}