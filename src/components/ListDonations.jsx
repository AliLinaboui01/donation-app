import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components
const ListDonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-image: url("/14.jpg"); 
  background-size: cover;  /* Ensures the background covers the entire container */
  background-position: center; /* Centers the background image */
  min-height: 100vh; /* Ensures the container takes up at least the full height of the screen */
`;

const DonationFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  color: #333;
  margin-right: 8px;
`;

const SelectField = styled.select`
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

const DonationCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DonorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const DonorInfo = styled.div`
  flex-grow: 1;
`;

const DonorName = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const DonorDetails = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const ListDonations = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [bloodTypeFilter, setBloodTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Mock donor data (replace the fetch logic with mock data)
  useEffect(() => {
    const mockData = [
      {
        fullName: "John Doe",
        bloodType: "A+",
        location: "New York",
        avatarUrl: "/path/to/avatar1.jpg",
      },
      {
        fullName: "Jane Smith",
        bloodType: "O-",
        location: "Los Angeles",
        avatarUrl: "/path/to/avatar2.jpg",
      },
      {
        fullName: "Alice Johnson",
        bloodType: "B+",
        location: "Chicago",
        avatarUrl: "/path/to/avatar3.jpg",
      },
    ];

    setDonors(mockData);
    setFilteredDonors(mockData); // Initially show all donors
  }, []);

  // Handle filter changes
  const handleBloodTypeChange = (e) => {
    setBloodTypeFilter(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  // Filter donors based on selected filters
  useEffect(() => {
    const filtered = donors.filter((donor) => {
      const matchesBloodType =
        bloodTypeFilter ? donor.bloodType === bloodTypeFilter : true;
      const matchesLocation =
        locationFilter ? donor.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
      return matchesBloodType && matchesLocation;
    });
    setFilteredDonors(filtered);
  }, [bloodTypeFilter, locationFilter, donors]);

  return (
    <ListDonationsContainer>
      <DonationFilters>
        <div>
          <FilterLabel htmlFor="bloodType">Blood Type</FilterLabel>
          <SelectField
            id="bloodType"
            value={bloodTypeFilter}
            onChange={handleBloodTypeChange}
          >
            <option value="">All Blood Types</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </SelectField>
        </div>
        <div>
          <FilterLabel htmlFor="location">Location</FilterLabel>
          <SelectField
            id="location"
            value={locationFilter}
            onChange={handleLocationChange}
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
          </SelectField>
        </div>
      </DonationFilters>

      {filteredDonors.length > 0 ? (
        filteredDonors.map((donor, index) => (
          <DonationCard key={index}>
            {/* Avatar */}
            <DonorAvatar src={donor.avatarUrl} alt={donor.fullName} />
            <DonorInfo>
              <DonorName>{donor.fullName}</DonorName>
              <DonorDetails>Blood Type: {donor.bloodType}</DonorDetails>
              <DonorDetails>Location: {donor.location}</DonorDetails>
            </DonorInfo>
          </DonationCard>
        ))
      ) : (
        <p>No donors found matching your filters.</p>
      )}
    </ListDonationsContainer>
  );
};

export default ListDonations;
