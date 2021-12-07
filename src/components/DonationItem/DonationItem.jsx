import React from 'react';
import './DonationItem.css';

export default function DonationItem({ DonationItem, isPaid, handleChangeAmount}) {
		return(
				<div className="DonationItem">
						<div className="NameAndCause">
								<span className="flex-ctr-ctr">{DonationItem.charity.name}</span>
								<span className="align-ctr">{DonationItem.charity.cause}</span>
						</div>
						<div className="amount" style={{justifyContent: isPaid}}>
								{!isPaid &&
												<button
														className="btn-xs"
														onClick={() => handleChangeAmount(DonationItem.charity._id, DonationItem.amount - 1)}
												>−</button>
												}
										<span>{DonationItem.amount}</span>
										{!isPaid &&
												<button
														className="btn-xs"
														onClick={() => handleChangeAmount(DonationItem.charity._id, DonationItem.amount + 1)}
												>+</button>
										}
						</div>
				</div>
		);
}