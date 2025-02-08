import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          <span className="bold">HireFlow</span> Employer
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/job-post" className={location.pathname === "/job-post" ? "active" : ""}>
                Job Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={location.pathname === "/settings" ? "active" : ""}>
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-right">
        <span className="company-name">SkyTech Solutions Inc.</span>
        <div className="user-info">
          <span className="user-name">Bryan Tiamzon</span>
          <a href="/logout" className="logout">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
