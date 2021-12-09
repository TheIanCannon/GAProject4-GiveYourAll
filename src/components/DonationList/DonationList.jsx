import React from 'react';
import DonationListItem from "../../components/DonationListItem/DonationListItem";

export default function DonationList({donationItem, donations, activeDonation, handlePaidDonation}) {
    const donationRecord = donations.map(donation => <DonationListItem 
        donation={donation} 
        activeDonation ={activeDonation}
        handlePaidDonation = {handlePaidDonation}
								donationItem={donationItem}
        />);
    
      return (
        <div className="DonationRecords">
          {donationRecord}
        </div>

      );
}

