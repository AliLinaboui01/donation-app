import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components
const ListDonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-image: url("/14.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  justify-items: center;
`;

const DonationCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  text-align: center;
  position: relative; /* This is important for absolute positioning */
`;

const DonorInfo = styled.div`
  text-align: center;
`;

const DonorName = styled.h3`
  font-size: 1.3rem;
  color: #333;
`;

const DonorDetails = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 5px 0;
`;

// Avatar Stack Styles
const AvatarStack = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  margin-left: -10px;
  &:first-child {
    margin-left: 0;
  }
`;

// Bottom-left image for each card
const BottomLeftImage = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 50px; /* Adjust the size of the image */
  height: 50px; /* Adjust the size of the image */
  object-fit: cover;
`;

const ListDonations = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [bloodTypeFilter, setBloodTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        setDonors(data);
        setFilteredDonors(data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };
    fetchDonors();
  }, []);

  useEffect(() => {
    const filtered = donors.filter((donor) => {
      const matchesBloodType = bloodTypeFilter ? donor.bloodType === bloodTypeFilter : true;
      const matchesLocation = locationFilter ? donor.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
      return matchesBloodType && matchesLocation;
    });
    setFilteredDonors(filtered);
  }, [bloodTypeFilter, locationFilter, donors]);

  return (
    <ListDonationsContainer>
      <DonationFilters>
        <div>
          <FilterLabel htmlFor="bloodType">Blood Type</FilterLabel>
          <SelectField id="bloodType" value={bloodTypeFilter} onChange={(e) => setBloodTypeFilter(e.target.value)}>
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
          <SelectField id="location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
          </SelectField>
        </div>
      </DonationFilters>

      <GridContainer>
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor, index) => (
            <DonationCard key={index}>
              <DonorInfo>
                <DonorName>{donor.fullName}</DonorName>
                <DonorDetails>Blood Type: {donor.bloodType}</DonorDetails>
                <DonorDetails>Location: {donor.location}</DonorDetails>
                <DonorDetails>Phone: {donor.phone}</DonorDetails>
                <DonorDetails>Email: {donor.email}</DonorDetails>
              </DonorInfo>
              <AvatarStack>
                <Avatar src={"/avatart1.jpg"} alt={donor.fullName} />
              </AvatarStack>
              <BottomLeftImage src="/4.png" alt="Image" />
            </DonationCard>
          ))
        ) : (
          <p>No donors found matching your filters.</p>
        )}
      </GridContainer>
    </ListDonationsContainer>
  );
};

export default ListDonations;
