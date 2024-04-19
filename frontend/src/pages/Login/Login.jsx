import React from 'react';

import classes from './Login.module.css';
import FormInput from '../../components/FormInput/FormInput';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FormButton from '../../components/FormButton/FormButton';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

export default function Login() {
  return (
    <div className={classes.loginContainer}>
      <LogoHeader />
      <div className={classes.formContainer}>
        <form className={classes.loginForm}>
          <FormInput type="email" placeholder="E-mail" name="email" required />
          <FormInput type="password" placeholder="Password" name="password" required />
          <FormCheckbox id="remember-user" name="remember-user" label="Remember me" />
          <FormButton type="submit" className="buttonBgGradient">LOG IN</FormButton>
        </form>
        <a className={classes.forgotPasswordLink} href="#">Forgot password?</a>
      </div>
    </div>
  );
}
