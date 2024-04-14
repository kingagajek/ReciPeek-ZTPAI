import React from 'react';

import './EditProfile.css'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function EditProfile() {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <section className="profile-edit-section">
          <h1>Profile</h1>
          <div className="profile-info-container">
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

          <div className="profile-actions">
            <button type="submit" name="save_profile">Save</button>
            <a className="sign-out" href="/logout">Sign out</a>
            <button type="submit" name="delete_account" className="delete-account">Delete Account</button>
          </div>
        </section>
      </main>
    </>
  );
};
