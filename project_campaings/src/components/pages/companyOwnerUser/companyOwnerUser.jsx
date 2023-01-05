import React, { useState, useEffect } from "react";

export const CompanyOwnerUser = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      const response = await fetch("/api/donations");
      const data = await response.json();
      setDonations(data);
    }

    fetchDonations();
  }, []);

  return (
    <div className="CompanyOwnerUser">
      {donations.map((donation) => (
        <div key={donation.name}>
          {donation.companyName}, {donation.userName},{" "}
          {donation.amountOfDonations}
        </div>
      ))}
    </div>
  );
};
