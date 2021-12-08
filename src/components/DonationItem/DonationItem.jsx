import React from 'react';
import './DonationItem.css';

export default function DonationItem({ donationItem, isPaid, handleChangeAmount}) {
		return(
				<div className="DonationItem">
						<div className="NameAndCause">
								<span className="flex-ctr-ctr">{donationItem._id.name}</span>
								<span className="align-ctr">{donationItem._id.cause}</span>
						</div>
						<div className="amount" style={{justifyContent: isPaid}}>
								{!isPaid &&
												<form onChange={handleChangeAmount}>
												<input type="number" className="form-control" placeholder="1" value={donationItem._id.amount} onChange={(evt) => handleChangeAmount(evt.target.value)}/>
												</form>
												}	
						</div>
			 </div>
		);
}