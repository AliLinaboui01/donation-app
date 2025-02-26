import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";  

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/13.jpg') no-repeat center center/cover;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  backdrop-filter: blur(8px);
  max-width: 320px;
  width: 100%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
`;

const Button = styled.button`
  background: #FF0000;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  width: 100%;
  margin-top: 16px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
  &:hover {
    background: #CC0000;
  }
`;

const ChooseDonate = () => {
  const navigate = useNavigate();  

  
  const handleGetStartedClick = () => {
    navigate("/donation-form"); 
  };

  
  const handleReceiveBloodClick = () => {
    navigate("/list-donations");  
  };

  return (
    <Container>
      {/* Card for Donating Blood */}
      <Card>
        <Title>TO DONATE BLOOD</Title>
        <Description>Proceed to update your profile</Description>
        <Button onClick={handleGetStartedClick}>GET STARTED</Button> 
      </Card>
      {/* Card for Receiving Blood */}
      <Card>
        <Title>LOOKING TO RECEIVE BLOOD?</Title>
        <Description>Proceed & find your match</Description>
        <Button onClick={handleReceiveBloodClick}>RECEIVE BLOOD</Button> 
      </Card>
    </Container>
  );
};

export default ChooseDonate;
