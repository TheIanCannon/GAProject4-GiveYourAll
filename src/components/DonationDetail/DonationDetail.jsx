import './DonationDetail.css';
import DonationItem from '../DonationItem/DonationItem';

export default function DonationDetail({donation, handleChangeAmount, handleCheckout}) {
		if (!donation) return null;

		const donationItems = donation.donationItems.map(charity =>
				<DonationItem 
						donationItem={charity}
						isPaid={donation.isPaid}
						handleChangeAmount={handleChangeAmount}
						key={charity._id}
				/>
		);

		return (
				<div className="DonationDetail">
						<div className="Heading">
								{donation.isPaid ?
										<span>Donation<span className="smaller">{donation.donationId}</span></span>
										:
										<span>New Donation</span>
								}
								<span>{new Date(donation.updatedAt).toLocaleDateString()}</span>
						</div>
						<div className="Charity-Donation-Container">
								{donationItems.length ?
										<>
												{donationItems}
												<section className="Total">
														{donation.isPaid ?
																<span className="right">Total&nbsp;&nbsp;</span>
														  :
																<button
																		className="btn-sm"
																		onClick={handleCheckout}
																		disabled={!donationItems.length}
																>Checkout</button>
														}
												</section>
										</>
										:
										<div className="Give">Give 'Til It Hurts!</div>
								}
						</div>
				</div>
		);
}