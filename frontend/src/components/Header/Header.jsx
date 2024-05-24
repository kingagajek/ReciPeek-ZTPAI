import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Header.module.css'
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import cookbook from '../../assets/icons/cookbook.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/result?query=${query}`);
  };

  return (
    <header>
      <a href="/"><img className={classes.logo} src={logo} alt="logo" /></a>
      <SearchBar onSearch={handleSearch} />
      <div className={classes.headerButtons}>
          <a href="/editProfile"><img className={classes.profile} src={profile} alt="profile" /></a>
          <a href="/myRecipes"><img className={classes.myRecipesIcon} src={cookbook} alt="cookbook" /></a>
      </div>
    </header>
  );
}