import React from 'react';
import './DonationItem.css';

export default function DonationItem({ donationItem, isPaid, handleChangeAmount}) {

		return(
				<div className="DonationItem">
						<div className="NameAndCause">
								<span className="flex-ctr-ctr">{donationItem.charity.name}<br/>({donationItem.charity.cause})</span>
						</div>
						<div className="amount" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeAmount(donationItem._id, donationItem.amount - 1)}
											>-</button>
          }
								${donationItem.amount}.00
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeAmount(donationItem._id, donationItem.amount + 1)}
          >+</button>
        }
      </div>
			 </div>
		);
}