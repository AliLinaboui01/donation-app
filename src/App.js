import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";  // Landing page component
import ChooseDonate from "./components/ChooseDonate";
import DonationForm from "./components/DonationForm";
import ListDonations from "./components/ListDonations";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-donate" element={<ChooseDonate />} />
        <Route path="/donation-form" element={<DonationForm />} />
        <Route path="/list-donations" element={<ListDonations />} /> 
      </Routes>
    </Router>
  );
}

export default App;
