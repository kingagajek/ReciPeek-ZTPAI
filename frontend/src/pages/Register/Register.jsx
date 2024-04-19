import React from 'react';
import classes from '../Login/Login.module.css';
import FormInput from '../../components/FormInput/FormInput';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FormButton from '../../components/FormButton/FormButton';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

export default function Register() {
  return (
    <div className={classes.loginContainer}>
      <LogoHeader />
      <div className={classes.formContainer}>
        <form className={classes.loginForm}>
          <FormInput type="text" placeholder="Login" name="login" required />
          <FormInput type="email" placeholder="E-mail" name="email" required />
          <FormInput type="password" placeholder="Password" name="password" required />
          <FormInput type="password" placeholder="Password Again" name="confirmedPassword" required />
          <FormCheckbox id="agree-terms" name="agree-terms" label="I agree to the Terms and Conditions" />
          <FormButton type="submit" className="buttonBgGradient">Create account</FormButton>
        </form>
        <a className={classes.forgotPasswordLink} href="/login">Already have an account? Log in</a>
      </div>
    </div>
  );
}
