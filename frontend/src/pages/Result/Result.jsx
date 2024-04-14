import React from 'react';

import classes from './Result.module.css';
import chickenwWrap from '../../assets/images/chicken-wrap.jpg'
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Result() {
  return (
    <div className={classes.mainContainer}>
        <Header />
        <SearchBar />
      <div className={classes.optionButtons}>
        <select className={classes.sortButton} name="sort" id="sort">
          <option value="rating-DESC">Rating: highest to lowest</option>
          <option value="rating-ASC">Rating: lowest to highest</option>
          <option value="time-DESC">Preparation time: highest to lowest</option>
          <option value="time-ASC">Preparation time: lowest to highest</option>
        </select>
        <button className={classes.filterButton}>Filters</button>
      </div>

      <div className={classes.recipeGrid}>
        <a className={classes.recipeCardLink} href="/recipe?recipe_id=1">
          <div className={classes.recipeCard}>
            <img className={classes.recipePicture} src={chickenwWrap} alt="Chicken wrap" />
            <div className={classes.recipeMeta}>
              <h3 className={classes.recipeTitle}>Recipe name</h3>
              <p className={classes.recipeDescription}>Description</p>
              <div className={classes.recipeInfo}>
                <div className={classes.timeInfo}>
                  <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
                  <span> 30 mins</span>
                </div>
                <div className={classes.difficultyInfo}>
                  <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
                  <span>easy</span>
                </div>
              </div>
              <div className={classes.recipeRating}>
                <img className={classes.starIcon} src={star} alt="star-icon" />
                <span>4.5</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
