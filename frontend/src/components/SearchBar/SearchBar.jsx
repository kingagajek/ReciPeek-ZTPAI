import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import classes from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={classes.searchContainer}>
      <img className={classes.searchIcon} src={searchIcon} alt="search icon" />
      <input className={classes.search} type="search" id="search" name="search" placeholder="Search recipe" />
      <div className={classes.dropdownContainer}>
        <select id="search-type" name="search-type">
          <option value="by_recipe">By recipe</option>
          <option value="by_ingredients">By ingredients</option>
        </select>
      </div>
    </div>
  );
}
