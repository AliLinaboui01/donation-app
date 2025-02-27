import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Confetti from "react-confetti"; // Import Confetti for the celebration effect
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles


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
  gap: 60px;  
  width: 90%;
  max-width: 1200px;
  justify-items: center;
`;


const DonationCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px; /* Increased padding */
  width: 100%;
  max-width: 400px; /* Increased max width */
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }
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
  color: #444; /* Slightly darker for better readability */
  margin: 10px 0; /* Increased space between details */
  line-height: 1.5; /* Improved line spacing */
  display: flex;
  align-items: center;

  &::before {
    content: "•"; /* Bullet point before each detail */
    margin-right: 8px; /* Space between the bullet point and text */
    color: #ff6347; /* Red color for the bullet point */
  }
`;


const AvatarStack = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 60px;  /* Adjust size */
  height: 60px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

const DonorHeader = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BottomLeftImage = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff6347;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;

const ListDonations = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [bloodTypeFilter, setBloodTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        setDonors(data);
        setFilteredDonors(data);
      })
      .catch(() => {
        console.warn("API request failed.");
      });
  }, []);

  useEffect(() => {
    const filtered = donors.filter((donor) => {
      const matchesBloodType = bloodTypeFilter ? donor.bloodType === bloodTypeFilter : true;
      const matchesLocation = locationFilter ? donor.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
      return matchesBloodType && matchesLocation;
    });
    setFilteredDonors(filtered);
  }, [bloodTypeFilter, locationFilter, donors]);

  const handleAddButtonClick = () => {
    setShowConfetti(true);
    toast.success("Thank you, your request has been sent successfully!"); // Show toast message
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Hide confetti after 5 seconds
  };

  return (
    <ListDonationsContainer>
      {/* Confetti effect */}
      {showConfetti && <Confetti />}

      {/* Success Toast */}
      <ToastContainer />

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
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
          </SelectField>
        </div>
      </DonationFilters>

      <GridContainer>
        {filteredDonors.map((donor, index) => (
          <DonationCard key={index}>
            <DonorHeader>
              <Avatar src="/avatar1.jpg" alt={donor.fullName} />
            </DonorHeader>
            <DonorInfo>
              <DonorName>{donor.fullName}</DonorName>
              <DonorDetails>Blood Type: {donor.type}</DonorDetails>
              <DonorDetails>Location: {donor.location}</DonorDetails>
              <DonorDetails>Phone: {donor.phoneNumber}</DonorDetails>
              <DonorDetails>Email: {donor.email}</DonorDetails>
            </DonorInfo>
            <BottomLeftImage src="/4.png" alt="Image" />
            <AddButton onClick={handleAddButtonClick}>Add</AddButton>
          </DonationCard>
        ))}
      </GridContainer>
    </ListDonationsContainer>
  );
};

export default ListDonations;
