import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

function Register() {
  // error state
  let [error, setError] = useState("");
  let [selectedFile, setSelectedFile] = useState(null);

  // navigate
  const navigate = useNavigate();

  // useForm hook
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // adding new user
  let addNewUser = (newUser) => {
    // make HTTP POST req to save newUser to localAPI

    let fd = new FormData();
    // append newUser to form data
    fd.append("user", JSON.stringify(newUser));
    // append selected file to form data
    fd.append("photo", selectedFile);

    axios
      .post("http://localhost:4000/user-api/register-user", fd)
      .then((response) => {
        if (response.status === 201) {
          // navigate to login component
          navigate("/login");
        }
        if (response.status !== 201) {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          // the client was given an error response (5xx, 4xx)
          setError(err.message);
        } else if (err.request) {
          // the client never received a response
          setError(err.message);
        } else {
          // for other errors
          setError(err.message);
        }
      });
  };

  // on file select
  const onFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const containerStyle = {
    backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/010/790/383/small_2x/cute-animals-in-zoo-placards-and-banner-in-zoos-design-for-banner-layout-annual-report-web-flyer-brochure-ad-free-vector.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  
  const catContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const loginContainerStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-44%, -56%)",
    padding: "20px",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "300px",
  };

  const headingStyle = {
    marginBottom: "20px",
    color: "#333",
    fontSize: "34px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    color: "#fff",
    "::placeholder": {
      color: "#fff",
    },
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#f58220",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const errorStyle = {
    fontSize: "14px",
    color: "red",
    marginTop: "10px",
  };

  return (
    <div className="add-user" style={containerStyle}>
      <div className="row" style={catContainerStyle}>
        <div className="col-11 col-sm-8 col-md-6 mx-auto" style={loginContainerStyle}>
          <form onSubmit={handleSubmit(addNewUser)}>
            <h1 style={headingStyle}>Add New User</h1>
            {/* form submission error */}
            {error.length !== 0 && (
              <p className="display-3 text-danger text-center" style={errorStyle}>
                {error}
              </p>
            )}
            {/* add user form */}
            {/* username */}
            <div className="mb-3">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="e.g. John"
                {...register("username", { required: true })}
                style={inputStyle}
              />
              {/* validation errors for name */}
              {errors.username?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Username is required
                </p>
              )}
            </div>
            {/* password */}
            <div className="mb-3">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                placeholder="enter password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
                style={inputStyle}
              />
              {/* validation errors for name */}
              {errors.password?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Password is required
                </p>
              )}
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                placeholder="e.g. example@mail.com"
                id="email"
                className="form-control"
                {...register("email", { required: true })}
                style={inputStyle}
              />
              {/* validation errors for email */}
              {errors.email?.type === "required" && (
                <p className="text-danger fw-bold fs-5">* Email is required</p>
              )}
            </div>
            {/* date of birth */}
            <div className="mb-3">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                id="dob"
                className="form-control"
                {...register("dob", { required: true })}
                style={inputStyle}
              />
              {/* validation errors for name */}
              {errors.dob?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Date of birth is required
                </p>
              )}
            </div>
            {/* image url */}
            <div className="mb-3">
              <label htmlFor="name">Select profile pic</label>
              <input
                type="file"
                id="image"
                className="form-control"
                {...register("image", { required: true })}
                onInput={onFileSelect}
                style={inputStyle}
              />
              {/* validation errors for image */}
              {errors.image?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Image URL is required
                </p>
              )}
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-primary" style={buttonStyle}>
              Register
            </button>
            <p>
              Already have an account? Sign in →{" "}
              <NavLink to="/login">Login.</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;