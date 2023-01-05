import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./components/pages/Home/Home";
import "./App.css";
import { Donation } from "./components/pages/Donation/Donation";
import { CreatingCampaign } from "./components/pages/CreatingCampaign/CreatingCampaign";
import { CompanyOwnerUser } from "./components/pages/companyOwnerUser/companyOwnerUser";
import Navbar from "./components/Navbar/Navbar";
import { Campaigns } from "./components/pages/campaigns/campaigns";
import { SingUp } from "./components/pages/SignUp/SignUp.jsx";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/creatingCampaign" element={<CreatingCampaign />}></Route>
        <Route path="/CompanyOwnerUser" element={<CompanyOwnerUser />}></Route>
        <Route path="/Campaigns" element={<Campaigns />}></Route>
        <Route path="/SingUp" element={<SingUp />}></Route>
      </Routes>
    </div>
  );
};

export default App;
