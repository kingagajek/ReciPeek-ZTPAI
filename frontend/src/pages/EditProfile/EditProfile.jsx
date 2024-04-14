import React from 'react';

import classes from './EditProfile.module.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function EditProfile() {
  return (
    <>
      <Header />
      <main>
        <section className={classes.profileEditSection}>
          <h1>Profile</h1>
          <div className={classes.profileInfoContainer}>
            <label htmlFor="username">Login</label>
            <input type="text" id="login" name="login" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="currentPassword">Current password</label>
            <input type="password" name="currentPassword" />

            <label htmlFor="newPassword">New password</label>
            <input type="password" name="newPassword" />

            <label htmlFor="confirmedPassword">New password again</label>
            <input type="password" name="confirmedPassword" />
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
