import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar_menu">
            <li className="navbar_item">
              <Link to="/Campaigns " className="navbar_links">
                Company Owner User
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/donation " className="navbar_links">
                donation
              </Link>
            </li>

            <li className="navbar_item">
              <Link to="/creatingCampaign " className="navbar_links">
                Creating Campaign
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
