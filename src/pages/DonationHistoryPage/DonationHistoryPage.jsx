import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as donationsAPI from '../../utilities/donations-api';
import DonationDetail from '../../components/DonationDetail/DonationDetail';
import DonationItem from '../../components/DonationItem/DonationItem';
import './DonationHistoryPage.css';

export default function DonationHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [donations, setDonations] = useState([]);
  const [activeDonation, setActiveDonation] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous donations (paid)
    async function fetchDonationHistory() {
      const donations = await donationsAPI.getDonationHistory();
      setDonations(donations);
      // If no donations, activeDonation will be set to null below
      setActiveDonation(donations[0] || null);
    }
    fetchDonationHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectDonation(donation) {
    setActiveDonation(donation);
  }

  /*--- Rendered UI --- */
  return (
    <main className="DonationHistoryPage">
      <aside>
        <Link to="/donations/new" className="button btn-sm">New Donation</Link>
      </aside>
      <DonationDetail
        donations={donations}
        activeDonation={activeDonation}
        handleSelectDonation={handleSelectDonation}
      />
      <DonationItem
        donation={activeDonation}
      />
    </main>
  );
}