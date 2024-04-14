import React from 'react';
import './Login.css';
import logo from '../../assets/icons/logo.svg'

export default function Login() {
  return (
    <div className="login-container">
      <a className="back-to-home" href="/home">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <h1> Reci<span className="text-peach">Peek</span></h1>
        </div>
      </a>
      <div className="form-container">
        <form className="login-form">
          <div className="form-inputs">
            <input type="text" placeholder="E-mail" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="remember-user" name="remember-user" />
            <label htmlFor="remember-user">Remember me</label>
          </div>
          <button className="button-bg-gradient submit-button" type="submit">LOG IN</button>
        </form>
        <a className="forgot-password-link" href="#">Forgot password?</a>  
      </div>
    </div>
  );
}