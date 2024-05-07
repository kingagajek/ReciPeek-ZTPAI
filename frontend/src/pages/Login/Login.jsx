import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      login(response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        setError(`Błąd: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        setError('Nie udało się połączyć z serwerem.');
      } else {
        setError('Błąd podczas wysyłania żądania.');
      }
      console.error("Wystąpił błąd przy logowaniu:", error.response || error);
    }
  };

  return (
    <div className={classes.loginContainer}>
      {error && <div className="error">{error}</div>}
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
          />
          <FormInput 
            type="password" 
            placeholder="Password" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
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
    </div>
  );
}
