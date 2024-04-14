import React from 'react';
import classes from '../Login/Login.module.css';
import logo from '../../assets/icons/logo.svg'

export default function Register() {
  return (
    <div className={classes.loginContainer}>
      <a className={classes.backToHome} href="/home">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} alt="logo" />
          <h1> Reci<span className="textPeach">Peek</span></h1>
        </div>
      </a>
      <div className={classes.formContainer}>
        <div className={classes.message}>
        </div>
        <form className={classes.loginForm}>
          <div className={classes.formInputs}>
            <input type="text" placeholder="Login" name="login" required />
            <input type="email" placeholder="E-mail" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <input type="password" placeholder="Password Again" name="confirmedPassword" required />
          </div>
          <button className="buttonBgGradient" type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}
