import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import classes from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('by_recipe');

  const handleSearch = () => {
    if (searchType === 'by_recipe' && searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className={classes.searchContainer}>
      <img
        className={classes.searchIcon}
        src={searchIcon}
        alt="search icon"
        onClick={handleSearch}
      />
      <input
        className={classes.search}
        type="search"
        id="search"
        name="search"
        placeholder="Search recipe"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <div className={classes.dropdownContainer}>
        <select
          id="search-type"
          name="search-type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="by_recipe">By recipe</option>
          <option value="by_ingredients">By ingredients</option>
        </select>
      </div> */}
    </div>
  );
}