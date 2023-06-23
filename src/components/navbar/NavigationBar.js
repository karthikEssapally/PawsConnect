import React, { useContext, useState } from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";

function NavigationBar() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const activeLink = {
    color: "#ffaa00",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const inactiveLink = {
    color: "#EEF0F2",
    fontSize: "1.2rem",
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-brown">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/user-profile">
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isNavOpen ? " show" : ""}`}
          onClick={closeNav}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Home
              </NavLink>
            </li>
            {!userLoginStatus && (<li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Register
              </NavLink>
            </li>
            )}

            {!userLoginStatus ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                  onClick={logoutUser}
                >
                  Logout
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutus"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
