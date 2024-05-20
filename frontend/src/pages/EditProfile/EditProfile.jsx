import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './EditProfile.module.css';
import Header from '../../components/Header/Header';
import FormInput from '../../components/FormInput/FormInput';
import { useAuth } from '../../context/AuthProvider';

export default function EditProfile() {
  const { user, auth } = useAuth();
  const [profileData, setProfileData] = useState({
    login: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user && auth) {
      axios.get(`http://localhost:8080/api/users/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      .then(response => {
        setProfileData({
          ...profileData,
          login: response.data.login,
          email: response.data.email,
        });
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
    }
  }, [user, auth]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (profileData.newPassword !== profileData.confirmedPassword) {
      tempErrors.newPassword = "Passwords do not match";
      tempErrors.confirmedPassword = "Passwords do not match";
    }
    if (!profileData.currentPassword) {
      tempErrors.currentPassword = "Current password is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/users/${user.id}`, {
        login: profileData.login,
        email: profileData.email,
        currentPassword: profileData.currentPassword,
        newPassword: profileData.newPassword
      }, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      });

      alert("Profile updated successfully");
    } catch (error) {
      if (error.response && error.response.data.message === 'Current password is incorrect') {
        setErrors({ currentPassword: "Current password is incorrect" });
      } else {
        console.error('Error updating profile:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className={classes.profileEditSection}>
          <h1>Profile</h1>
          <div className={classes.profileInfoContainer}>
            <FormInput type="text" placeholder="Login" name="login" value={profileData.login} required onChange={handleChange} />
            <FormInput type="email" placeholder="Email" name="email" value={profileData.email} required onChange={handleChange} />
            <FormInput type="password" placeholder="Current password" name="currentPassword" onChange={handleChange } className={errors.currentPassword ? classes.noValid : ''}/>
            {errors.currentPassword && <span className={classes.errorText}>{errors.currentPassword}</span>}
            <FormInput type="password" placeholder="New password" name="newPassword" onChange={handleChange} className={errors.newPassword ? classes.noValid : ''}/>
            {errors.newPassword && <span className={classes.errorText}>{errors.newPassword}</span>}
            <FormInput type="password" placeholder="Confirm new password" name="confirmedPassword" onChange={handleChange} className={errors.confirmedPassword ? classes.noValid : ''}/>
            {errors.confirmedPassword && <span className={classes.errorText}>{errors.confirmedPassword}</span>}
          </div>

          <div className={classes.profileActions}>
            <button type="submit" name="save_profile" onClick={handleSubmit}>Save</button>
            <a className={classes.signOut} href="/logout">Sign out</a>
            <button type="submit" name="delete_account" className={classes.deleteAccount}>Delete Account</button>
          </div>
        </section>
      </main>
    </>
  );
};
