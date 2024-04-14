import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-container">
      <img className="search-icon" src={searchIcon} alt="search-icon" />
      <input className="search" type="search" id="search" name="search" placeholder="Search recipe" />
      <div className="dropdown-container">
        <select id="search-type" name="search-type">
          <option value="by_recipe">By recipe</option>
          <option value="by_ingredients">By ingredients</option>
        </select>
      </div>
    </div>
  );
}
