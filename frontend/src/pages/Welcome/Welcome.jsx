import React from 'react';
import classes from './Welcome.module.css';
import logo from '../../assets/icons/logo.svg';

export default function Welcome() {
  return (
    <div className={classes.mainContainer}>
      <a href="/">
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
      <div className={classes.welcomeMessage}>
        <h1>Welcome to Reci<span className="textPeach"ss>Peek</span></h1>
        <h2>Find your personalized recipe by one click</h2>
      </div>
      <div className={classes.buttons}>
        <a href="/register" className="buttonBgWhite">Create account</a>
        <a href="/login" className="buttonBgClear">Sign in</a>
      </div>
    </div>
  );
};