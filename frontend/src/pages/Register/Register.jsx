import React from 'react';
import '../Login/Login.css';
import logo from '../../assets/icons/logo.svg'

export default function Register() {
  return (
    <div className="login-container">
      <a className="back-to-home" href="/home">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <h1> Reci<span className="text-peach">Peek</span></h1>
        </div>
      </a>
      <div className="form-container">
        <div className="message">
        </div>
        <form className="login-form">
          <div className="form-inputs">
            <input type="text" placeholder="Login" name="login" required />
            <input type="email" placeholder="E-mail" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <input type="password" placeholder="Password Again" name="confirmedPassword" required />
          </div>
          <button className="button-bg-gradient submit-button" type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}