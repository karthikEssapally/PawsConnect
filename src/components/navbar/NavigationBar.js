import React, { useContext, useState } from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
import { AiFillHome } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
function NavigationBar() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const imageSize = { width: '40px', height: '40px', borderRadius: '50%' };
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

  const handleBgChange = () => {
    setBgImage(
      "url(https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg)"
    );
    setTimeout(() => {
      setBgImage(null);
    }, 10000);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-brown">
      <div className="container-fluid">
        {/* profile */}
        <NavLink className="navbar-brand" to="/user-profile">
        {currentUser && currentUser.image ?(
      <img
      src={currentUser.image}
      className="profile-image"
      alt={`Profile image of ${currentUser.name}`}
      style={imageSize} 

    />
      ) : (
        <BsFillImageFill  />
      )}
      
    </NavLink>
    <h1 className="navbar-brand ">Pawsconnect</h1>
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
            {/* home */}
                    <NavLink
                        className="nav-link"
                         exact
                         to="/"
                          style={({ isActive }) => {
                           return isActive ? activeLink : inactiveLink;
                       }}
                    >
                      <AiFillHome style={{ fontSize: '24px' }} />
                      </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Products
              </NavLink>
            </li>
            {!userLoginStatus && (
              <li className="nav-item">
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
