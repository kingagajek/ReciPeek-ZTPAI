import React from 'react';

import './Welcome.css';
import logo from '../../assets/icons/logo.svg';

export default function Welcome() {
  return (
    <div className="main-container">
      <a href="/home">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div className="welcome-message">
        <h1>Welcome to Reci<span className="text-peach">Peek</span></h1>
        <h2>Find your personalized recipe by one click</h2>
      </div>
      <div className="buttons">
        <a href="/register" className="button-bg-white">Create account</a>
        <a href="/login" className="button-bg-clear">Sign in</a>
      </div>
    </div>
  );
};
