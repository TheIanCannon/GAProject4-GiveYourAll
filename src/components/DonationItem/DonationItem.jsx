import React from 'react';
import './DonationItem.css';

export default function DonationItem({ donationItem, isPaid, handleChangeAmount}) {
		return(
				<div className="DonationItem">
						<div className="NameAndCause">
								<span className="flex-ctr-ctr">{donationItem.name}</span>
								<span className="align-ctr">{donationItem.cause}</span>
						</div>
						<div className="amount" style={{justifyContent: isPaid}}>
								{!isPaid &&
												<button
														className="btn-xs"
														onClick={() => handleChangeAmount(donationItem.charity._id, donationItem.amount - 1)}
												>−</button>
												}
										<span>{donationItem.amount}</span>
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