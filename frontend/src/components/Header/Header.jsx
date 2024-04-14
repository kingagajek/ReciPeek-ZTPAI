import React from 'react';

import classes from './Header.module.css'
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import plus from '../../assets/icons/plus.svg';

export default function Header() {
  return (
    <header>
      <a href="/home"><img className={classes.logo} src={logo} alt="logo" /></a>
      <div className={classes.headerButtons}>
          <a href="/editProfile"><img className={classes.profile} src={profile} alt="profile" /></a>
          <a href="/addRecipe"><img className={classes.addRecipeIcon} src={plus} alt="plus" /></a>
      </div>
    </header>
  );
}