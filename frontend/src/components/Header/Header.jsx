import React from 'react';

import classes from './Header.module.css'
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import cookbook from '../../assets/icons/cookbook.svg';

export default function Header() {
  return (
    <header>
      <a href="/home"><img className={classes.logo} src={logo} alt="logo" /></a>
      <div className={classes.headerButtons}>
          <a href="/editProfile"><img className={classes.profile} src={profile} alt="profile" /></a>
          <a href="/myRecipes"><img className={classes.myRecipesIcon} src={cookbook} alt="cookbook" /></a>
      </div>
    </header>
  );
}