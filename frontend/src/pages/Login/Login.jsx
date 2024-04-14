import React from 'react';

import classes from './Login.module.css';
import logo from '../../assets/icons/logo.svg';

export default function Login() {
  return (
    <div className={classes.loginContainer}>
      <a className={classes.backToHome} href="/home">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} alt="logo" />
          <h1> Reci<span className="textPeach">Peek</span></h1>
        </div>
      </a>
      <div className={classes.formContainer}>
        <form className={classes.loginForm}>
          <div className={classes.formInputs}>
            <input type="text" placeholder="E-mail" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
          </div>
          <div className={classes.checkboxContainer}>
            <input type="checkbox" id="remember-user" name="remember-user" />
            <label htmlFor="remember-user">Remember me</label>
          </div>
          <button className={`buttonBgGradient ${classes.submitButton}`} type="submit">LOG IN</button>
        </form>
        <a className={classes.forgotPasswordLink} href="#">Forgot password?</a>  
      </div>
    </div>
  );
}