import React, { useContext, useState } from "react";
import "./UserProfile.css";
import { loginContext } from "../../contexts/loginContext";
import axios from "axios";
import { useEffect } from "react";

function UserProfile() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  const [err, setErr] = useState("");
  const [data, setData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    dob: currentUser.dob,
    image: currentUser.image
  });
  
  useEffect(() => {
    
  }, [currentUser]);
  const handleChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = async () => {
    try {
      const response = await axios.put(`/api/users/${currentUser._id}`, updatedUserData);
      console.log(response.data); // Assuming the server responds with the updated user data
      
      // Update the context or state with the new user data
      loginUser(response.data); // Assuming loginUser is a function to update the user in the loginContext
      
      setShowModal(false); // Close the modal after updating
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setShowModal(true); // Show the modal when "Edit profile" button is clicked
  };

  const handleClose = () => {
    setShowModal(false); // Close the modal when the user clicks the close button
  };
  // const intervalId = setInterval(() => {
  //   let  fetchUserData();
  // }, 10000);
  return (
    <div className="text-center">
      {currentUser && (
        <>
          <div className="container border py-3">
            <div className="img-container">
              <img src={currentUser.image} alt="Profile Image" className="profile-image" />
            </div>
            <p className="display-4">{currentUser.username}</p>
            <p>Email: {currentUser.email}</p>
            <p>Date of Birth: {currentUser.dob}</p>
          </div>

          <button className="btn btn-danger my-4" onClick={handleEdit}>
            Edit profile
          </button>
          {/* fetchUserData( */}
          <div className="container border py-3">
            <h2>Posts:</h2>
            <div className="row">
              {currentUser.posts &&
              currentUser.posts.length > 0 &&
              currentUser.posts.reverse().map((post, index) => (
              <div key={index} className="col-md-4 mb-3">
              <img src={post} alt={`Post ${index}`} className="img-fluid" />
           </div>
            ))}

            </div>
          </div>
        </>
      )}

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <div>
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={updatedUserData.username}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={updatedUserData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div>
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={updatedUserData.dob}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={updateProfile}>
                  Save Changes
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
