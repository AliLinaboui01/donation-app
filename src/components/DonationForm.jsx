import React, { useState } from "react";
import styled from "styled-components";


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/background.jpg') no-repeat center center/cover;
  padding: 20px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 40px 60px;
  text-align: center;
  width: 100%;
  max-width: 600px;  /* Increased width */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const FormTitle = styled.h2`
  font-size: 2rem;  /* Increased font size */
  font-weight: bold;
  color: #333;
  margin-bottom: 32px; /* Added margin for spacing */
`;

const InputLabel = styled.label`
  font-size: 1.1rem;  /* Increased font size */
  color: #333;
  margin-bottom: 8px;
  display: block;
  text-align: left;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 20px; /* Increased padding */
  border-radius: 10px;  /* Slightly larger border radius */
  border: 1px solid #ccc;
  margin-bottom: 24px; /* Increased margin */
  font-size: 1.1rem;  /* Larger font size */
`;

const SelectField = styled.select`
  width: 100%;
  padding: 16px 20px; /* Increased padding */
  border-radius: 10px;  /* Slightly larger border radius */
  border: 1px solid #ccc;
  margin-bottom: 24px; /* Increased margin */
  font-size: 1.1rem;  /* Larger font size */
`;

const Button = styled.button`
  background: #FF0000;
  color: white;
  padding: 12px 18px; /* Increased padding */
  border-radius: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;  /* Larger font size */
  transition: background 0.3s ease;
  &:hover {
    background: #CC0000;
  }
`;

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    bloodType: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we log the data
    console.log(formData);
    alert("Form submitted successfully!");
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

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default BloodDonationForm;
