import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Header.module.css'
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import cookbook from '../../assets/icons/cookbook.svg';
import dashboard from '../../assets/icons/dashboard.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useAuth } from '../../context/AuthProvider';

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSearch = (query) => {
    navigate(`/result?query=${query}`);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate('/editProfile');
    } else {
      navigate('/welcome');
    }
  };

  return (
    <header>
      <a href="/"><img className={classes.logo} src={logo} alt="logo" /></a>
      <SearchBar onSearch={handleSearch} />
      <div className={classes.headerButtons}>
        <img className={classes.profile} src={profile} alt="profile" onClick={handleProfileClick} />
        {user && (
          <>
            <a href="/myRecipes"><img className={classes.myRecipesIcon} src={cookbook} alt="cookbook" /></a>
            {user.role && user.role.name === 'ADMIN' && (
              <a href="/adminDashboard"><img className={classes.dashboardIcon} src={dashboard} alt="dashboard" /></a>
            )}
          </>
        )}
      </div>
    </header>
  );
}