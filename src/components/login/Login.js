import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import { loginContext } from '../../contexts/loginContext';

function Login() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserLogin = (userCredObj) => {
    loginUser(userCredObj);
  };

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate('/');
    }
  }, [userLoginStatus]);

  const containerStyle = {
    backgroundImage: `url("https://img.freepik.com/free-vector/border-template-with-cute-animals_1308-40340.jpg?w=1380&t=st=1687502820~exp=1687503420~hmac=d9f0ce7eb7b1a866925656dc6581f29b281cd54968f53cd9f6e1a15254bc56e8")`,
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
    top: "30%",
    left: "50%",
    transform: "translate(-44%, -37%)",
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
    backgroundColor: "rgba(255, 255, 255, 0.45)",
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
    <div className="login-container" style={containerStyle}>
      {/* form submission error */}
     
      {/* login form */}
      <div className="login-form" style={catContainerStyle}>

        <form onSubmit={handleSubmit(handleUserLogin)} style={loginContainerStyle}>
        {error.length !== 0 && <p className="display-2 text-danger text-center" style={errorStyle}>{error}</p>}
          {/* username */}
          <div className="form-group">
            <label htmlFor="username" style={headingStyle}>Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              {...register('username', { required: true })}
              style={inputStyle}
            />
            {/* validation errors for username */}
            {errors.username?.type === 'required' && (
              <p className="text-danger fw-bold fs-5">* Username is required</p>
            )}
          </div>
          {/* password */}
          <div className="form-group">
            <label htmlFor="password" style={headingStyle}>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              {...register('password', { required: true })}
              style={inputStyle}
            />
            {/* validation errors for password */}
            {errors.password?.type === 'required' && (
              <p className="text-danger fw-bold fs-5">* Password is required</p>
            )}
            <p>
              New to PowsConnect? <NavLink to="/register">Create an account.</NavLink>
            </p>
          </div>
          {/* submit button */}
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
