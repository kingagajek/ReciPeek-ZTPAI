import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import classes from '../Login/Login.module.css';
import FormInput from '../../components/FormInput/FormInput';
import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';
import FormButton from '../../components/FormButton/FormButton';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

const validationSchema = yup.object({
  login: yup.string().required('Login is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  agreeTerms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmedPassword: '',
      agreeTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      console.log('Form submitted', values);
      try {
        const response = await axios.post('http://localhost:8080/api/auth/register', {
          login: values.login,
          email: values.email,
          password: values.password,
        });
        console.log('Registration successful:', response.data);
        navigate('/login');
      } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
          setErrors({ submit: error.response.data.message });
        } else {
          setErrors({ submit: 'An error occurred. Please try again.' });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className={classes.loginContainer}>
      <LogoHeader />
      <div className={classes.formContainer}>
        <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
          <FormInput 
            type="text" 
            placeholder="Login" 
            name="login" 
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.login && formik.errors.login ? formik.errors.login : null}
            required 
          />
          {formik.touched.login && formik.errors.login && (
            <Alert severity="error" className={classes.errorText}>{formik.errors.login}</Alert>
          )}
          <FormInput 
            type="email" 
            placeholder="E-mail" 
            name="email" 
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            required 
          />
          {formik.touched.email && formik.errors.email && (
            <Alert severity="error" className={classes.errorText}>{formik.errors.email}</Alert>
          )}
          <FormInput 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            required 
          />
          {formik.touched.password && formik.errors.password && (
            <Alert severity="error" className={classes.errorText}>{formik.errors.password}</Alert>
          )}
          <FormInput 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmedPassword" 
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmedPassword && formik.errors.confirmedPassword ? formik.errors.confirmedPassword : null}
            required 
          />
          {formik.touched.confirmedPassword && formik.errors.confirmedPassword && (
            <Alert severity="error" className={classes.errorText}>{formik.errors.confirmedPassword}</Alert>
          )}
          <FormCheckbox 
            id="agree-terms" 
            name="agreeTerms" 
            label="I agree to the Terms and Conditions" 
            checked={formik.values.agreeTerms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.agreeTerms && formik.errors.agreeTerms ? formik.errors.agreeTerms : null}
          />
          {formik.touched.agreeTerms && formik.errors.agreeTerms && (
            <Alert severity="error" className={classes.errorText}>{formik.errors.agreeTerms}</Alert>
          )}
          {formik.errors.submit && <Alert severity="error" className={classes.errorText}>{formik.errors.submit}</Alert>}
          <FormButton type="submit" className="buttonBgGradient" disabled={formik.isSubmitting}>Create account</FormButton>
        </form>
        <a className={classes.forgotPasswordLink} href="/login">Already have an account? Log in</a>
      </div>
    </div>
  );
}