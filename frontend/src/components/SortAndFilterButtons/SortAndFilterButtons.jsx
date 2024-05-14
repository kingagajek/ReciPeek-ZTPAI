import React from 'react';
import classes from './SortAndFilterButtons.module.css';

const SortAndFilterButtons = ({ onSortChange, onFilterClick }) => (
  <div className={classes.optionButtons}>
    <select className={classes.sortButton} onChange={onSortChange}>
      <option value="rating-DESC">Rating: highest to lowest</option>
      <option value="rating-ASC">Rating: lowest to highest</option>
      <option value="time-DESC">Preparation time: highest to lowest</option>
      <option value="time-ASC">Preparation time: lowest to highest</option>
    </select>
    <button className={classes.filterButton} onClick={onFilterClick}>Filters</button>
  </div>
);

export default SortAndFilterButtons;
