import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import classes from '../Login/Login.module.css';
import FormInput from '../../components/FormInput/FormInput';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FormButton from '../../components/FormButton/FormButton';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  console.log("Form submitted");

    if (password !== confirmedPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }
  
    try {
      await register(login, email, password);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };
  

  return (
    <div className={classes.loginContainer}>
      <LogoHeader />
      <div className={classes.formContainer}>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <FormInput 
            type="text" 
            placeholder="Login" 
            name="login" 
            value={login}
            onChange={e => setLogin(e.target.value)}
            required 
          />
          <FormInput 
            type="email" 
            placeholder="E-mail" 
            name="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
          <FormInput 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
          <FormInput 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmedPassword" 
            value={confirmedPassword}
            onChange={e => setConfirmedPassword(e.target.value)}
            required 
          />
          <FormCheckbox 
            id="agree-terms" 
            name="agree-terms" 
            label="I agree to the Terms and Conditions" 
            checked={agreeTerms}
            onChange={e => setAgreeTerms(e.target.checked)}
          />
          <FormButton type="submit" className="buttonBgGradient">Create account</FormButton>
        </form>
        <a className={classes.forgotPasswordLink} href="/login">Already have an account? Log in</a>
      </div>
    </div>
  );
}
