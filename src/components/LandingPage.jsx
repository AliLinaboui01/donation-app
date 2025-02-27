import React from "react";
import { Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import styled from "styled-components";

// Styled components
const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

const LandingImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const LandingContent = styled.div`
  position: relative;
  color: white;
  text-align: center;
  max-width: 600px;
  padding: 24px;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const RedIcon = styled.span`
  color: red;
`;

const GreenIcon = styled.span`
  color: green;
`;

const Paragraph = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 10px 24px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;

const ButtonPrimary = styled(Button)`
  background-color: white;
  color: black;
  border: none;
`;

const ButtonSecondary = styled(Button)`
  border: 2px solid white;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchContainer = styled.div`
  margin-top: 32px;
  position: relative;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
`;

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavbarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const ButtonNav = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  margin-left: 16px;
`;

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate("/choose-donate");  
  };

  return (
    <LandingContainer>
      <LandingImage src="/backgroundLanding.jpg" alt="Blood Donation" />
      
      {/* Navbar */}
      <Navbar>
        <Logo src="/logo.png" alt="App Logo" />
        <NavbarButtons>
          <ButtonNav>Sign Up</ButtonNav>
        </NavbarButtons>
      </Navbar>

      <LandingContent>
        <Headline>
          DONATE BLOOD 
          <RedIcon>✖</RedIcon> 
          <span> </span> 
          SAVE LIVES 
          <GreenIcon>✔</GreenIcon>
        </Headline>

        <Paragraph>
          Join our <strong>2025 worldwide campaign</strong>, our goal is{" "}
          <strong>1,000,000 Blood donations.</strong>
        </Paragraph>

        <ButtonContainer>
          
          <ButtonPrimary onClick={handleGetStartedClick}>Get Started</ButtonPrimary>
          <ButtonSecondary>
            <User size={18} /> SIGN UP
          </ButtonSecondary>
        </ButtonContainer>

        <SearchContainer>
          <SearchInput type="text" placeholder="Search & apply filters" />
          <SearchIcon size={18} />
        </SearchContainer>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingPage;
