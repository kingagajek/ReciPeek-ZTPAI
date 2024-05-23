import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

import classes from './Login.module.css';
import FormInput from '../../components/FormInput/FormInput';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FormButton from '../../components/FormButton/FormButton';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { useAuth } from '../../context/AuthProvider';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      login(response.data);
      navigate('/');
    } catch (error) {
      let errorMessage = '';
      if (error.response) {
        if (error.response.status === 404) {
          errorMessage = 'User with this email does not exist.';
          setEmailError(true);
          setPasswordError(false);
        } else if (error.response.status === 401) {
          errorMessage = 'Incorrect email or password.';
          setEmailError(true);
          setPasswordError(true);
        } else {
          errorMessage = `Error: ${error.response.status} - ${error.response.data || 'Unknown error'}`;
        }
      } else if (error.request) {
        errorMessage = 'Failed to connect to the server.';
      } else {
        errorMessage = 'Error occurred while sending the request.';
      }
      setError(errorMessage);
      setOpenSnackbar(true);
      console.error("Error during login:", error.response || error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className={classes.loginContainer}>
      <LogoHeader />
      <div className={classes.formContainer}>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <FormInput 
            type="email" 
            placeholder="E-mail" 
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
            className={emailError ? classes.noValid : ''}
          />
          <FormInput 
            type="password" 
            placeholder="Password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
            className={passwordError ? classes.noValid : ''}
          />
          <FormCheckbox 
            id="remember-user" 
            name="remember-user" 
            label="Remember me" 
            checked={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
          />
          <FormButton type="submit" className="buttonBgGradient">LOG IN</FormButton>
        </form>
        <a className={classes.forgotPasswordLink} href="#">Forgot password?</a>
      </div>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}