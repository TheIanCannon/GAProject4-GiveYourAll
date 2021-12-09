import React from 'react';
import DonationListItem from "../../components/DonationListItem/DonationListItem";



export default function DonationList({donations, activeDonation, handlePaidDonation}) {
    const donationRecord = donations.map(donation => <DonationListItem 
        donation={donation} 
        activeDonation ={activeDonation}
        handlePaidDonation = {handlePaidDonation}
        />);
    
      return (
        <div className="DonationRecords">
          {donationRecord}
        </div>

      );
}

