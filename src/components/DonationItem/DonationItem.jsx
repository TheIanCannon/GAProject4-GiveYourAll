import React, { useState } from 'react';
import './DonationItem.css';

export default function DonationItem({ newAmount, donationItem, isPaid, handleChangeAmount}) {

		return(
				<div className="DonationItem">
						<div className="NameAndCause">
								<span className="flex-ctr-ctr">{donationItem.charity.name}&nbsp;({donationItem.charity.cause})</span>
						</div>
						<div className="amount" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeAmount(donationItem.charity._id, donationItem.amount - 1)}
          >−</button>
          }
        <div>{donationItem.amount}</div>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeAmount(donationItem.charity._id, donationItem.amount + 1)}
          >+</button>
        }
      </div>
			 </div>
		);
}