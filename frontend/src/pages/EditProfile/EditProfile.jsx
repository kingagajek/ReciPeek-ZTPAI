import React from 'react';

import classes from './EditProfile.module.css';
import Header from '../../components/Header/Header';
import FormInput from '../../components/FormInput/FormInput';

export default function EditProfile() {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <section className={classes.profileEditSection}>
          <h1>Profile</h1>
          <div className={classes.profileInfoContainer}>
            <FormInput type="text" placeholder="Login" name="login" required onChange={handleChange} />
            <FormInput type="email" placeholder="Email" name="email" required onChange={handleChange} />
            <FormInput type="password" placeholder="Current password" name="currentPassword" onChange={handleChange} />
            <FormInput type="password" placeholder="New password" name="newPassword" onChange={handleChange} />
            <FormInput type="password" placeholder="Confirm new password" name="confirmedPassword" onChange={handleChange} />
          </div>

          <div className={classes.profileActions}>
            <button type="submit" name="save_profile">Save</button>
            <a className={classes.signOut} href="/logout">Sign out</a>
            <button type="submit" name="delete_account" className={classes.deleteAccount}>Delete Account</button>
          </div>
        </section>
      </main>
    </>
  );
};
