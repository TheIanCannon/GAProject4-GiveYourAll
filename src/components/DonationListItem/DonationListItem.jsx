import "./DonationListItem.css";
import React from 'react';


export default function DonationListItem({donation, activeDonation, handlePaidDonation}) {
  const totalamount = (donation.donationTotal).toPrecision(4);
  const amountId = (donation._id).slice(0,6).toUpperCase();
  

return(
 <div className = "DonationList">
  <p> Donation Id: {amountId} 
  <br/> 
  <p>{new Date(donation.updatedAt).toLocaleDateString()}</p>
  <br/> 
  </p>
  <p>
  $ {totalamount} &nbsp;
 
  <p>
  {donation.totalQty} &nbsp;
  items
  </p>
  </p>
  </div>
);

}