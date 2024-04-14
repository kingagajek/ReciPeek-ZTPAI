import React from 'react';

import './Header.css';
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import plus from '../../assets/icons/plus.svg';

export default function Header() {
  return (
    <header>
      <a href="/home"><img className="logo" src={logo} alt="logo" /></a>
      <div className="header-buttons">
          <a href="/editProfile"><img className="profile" src={profile} alt="profile" /></a>
          <a href="/addRecipe"><img className="add-recipe-icon" src={plus} alt="plus" /></a>
      </div>
    </header>
  );
}