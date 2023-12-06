import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  let [error, setError] = useState("");
  let [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const addNewUser = (newUser) => {
    let fd = new FormData();
    fd.append("user", JSON.stringify(newUser));
    fd.append("photo", selectedFile);
  
    // Assuming you have a different endpoint for buyer registration
    const endpoint = newUser.isSeller
      ? "http://localhost:4000/user-api/register-seller"
      : "http://localhost:4000/user-api/register-buyer";
  
    axios
      .post(endpoint, fd)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
          toast.success("User registered successfully");
        } else {
          setError(response.data.message);
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.message);
          toast.error(err.message);
        } else if (err.request) {
          setError(err.message);
          toast.error(err.message);
        } else {
          setError(err.message);
          toast.error(err.message);
        }
      });
  };
  const onFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

 
  const containerStyle = {
    backgroundImage: `url("https://png.pngtree.com/background/20210715/original/pngtree-plain-white-solid-color-background-picture-image_1323736.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"50px",
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
    backgroundColor: "#534545",
    color: "#fff",
    "::placeholder": {
      color: "#fff",
    },
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "rgb(86, 14, 14)",
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
        <toast />
      <div className="row" style={catContainerStyle}>
        <div className="col-11 col-sm-8 col-md-6 mx-auto" style={loginContainerStyle}>
          <form onSubmit={handleSubmit(addNewUser)}>
            <h1 style={headingStyle}>Register</h1>
            {error.length !== 0 && (
              <p className="display-3 text-danger text-center" style={errorStyle}>
                {error}
              </p>
            )}

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
              {errors.username?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Username is required
                </p>
              )}
            </div>

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
              {errors.password?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Password is required
                </p>
              )}
            </div>

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
              {errors.email?.type === "required" && (
                <p className="text-danger fw-bold fs-5">* Email is required</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                id="dob"
                className="form-control"
                {...register("dob", { required: true })}
                style={inputStyle}
              />
              {errors.dob?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Date of birth is required
                </p>
              )}
            </div>

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
              {errors.image?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Image URL is required
                </p>
              )}
            </div>

            {/* Additional input for distinguishing between buyer and seller */}
            <div className="mb-3">
              <label htmlFor="isSeller">Register as Seller</label>
              <input
                type="checkbox"
                id="isSeller"
                {...register("isSeller")}
              />
            </div>

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
