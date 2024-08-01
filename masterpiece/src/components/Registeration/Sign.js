import React from "react";
import "./Sign.css";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const SignIn = () => {
  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="login-box">
            <h2 className="welcome-text">
              Welcome back to the Budget Wize Hub
            </h2>
            <div className="login-options">
              <button className="google-login">
              <FcGoogle className="google-icon" />
                Log in with Google
              </button>
              <button className="github-login">
              <FaGithub className="github-icon" />
                Log in with GitHub
              </button>
            </div>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input type="password" id="password" name="password" />
                  <span className="eye-icon">&#128065;</span>
                </div>
              </div>
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="submit" className="login-button">
                LOG IN
              </button>
            </form>
            <p className="signup-link">
              No Account yet? <a href="#">SIGN UP</a>
            </p>
          </div>
        </div>
      </div>
      <div className="chat-icon">
      <IoChatbubbleEllipsesOutline className="chat-icon" />
      </div>
    </div>
  );
};

export default SignIn;
