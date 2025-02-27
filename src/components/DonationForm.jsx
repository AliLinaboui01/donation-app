import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import Confetti from 'react-confetti';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/13.jpg') no-repeat center center/cover;
  padding: 20px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 40px 60px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 32px;
`;

const InputLabel = styled.label`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
  display: block;
  text-align: left;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 24px;
  font-size: 1.1rem;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 24px;
  font-size: 1.1rem;
  appearance: none;  /* Removes default dropdown arrow */
  background-color: white; /* Background color for the select */
  color: #333; /* Text color */
  position: relative;
  cursor: pointer;
  
  /* Add a custom arrow to match React-select */
  &::after {
    content: '▼'; /* Dropdown arrow symbol */
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
  }

  &:hover {
    border-color: #999; /* Change border color on hover */
  }

  &:focus {
    border-color: #007bff; /* Focus border color */
    outline: none; /* Remove default focus outline */
  }
`;

const Button = styled.button`
  background: #FF0000;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s ease;
  &:hover {
    background: #CC0000;
  }
`;

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    bloodType: "",
    location: "",
    phoneNumber: "", // New field for phone number
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

   
    toast.success("Thank you for your donation!", {
      position: "top-center",
    });
    setShowConfetti(true);

   
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Blood Donation Form</FormTitle>

        <div>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <InputField
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <InputLabel htmlFor="bloodType">Type of Blood</InputLabel>
          <SelectField
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Select blood type</option>
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
          <InputLabel htmlFor="location">Location of Donation</InputLabel>
          <InputField
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </div>

        <div>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <InputField
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </Form>

      {/* Confetti animation */}
      {showConfetti && <Confetti />}
      
      <ToastContainer position="top-center" />
    </FormContainer>
  );
};

export default BloodDonationForm;
