import React from 'react';
import classes from './RecipeInfo.module.css';
import starIcon from '../../assets/icons/star.png';
import timeIcon from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portionIcon from '../../assets/icons/portion.svg';

const RecipeInfo = ({ time, difficulty, servings, rating, ratingCount }) => {
  return (
    <div className={classes.recipeInfoContainer}>
        {rating && (
        <div className={classes.recipeRating}>
          <img className={classes.starIcon} src={starIcon} alt="Rating" />
          <span>{`${rating} (${ratingCount} ratings)`}</span>
        </div>
      )}
      {time && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={timeIcon} alt="Time" />
          <span>{time} mins</span>
        </div>
      )}

      {difficulty && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="Difficulty" />
          <span>{difficulty}</span>
        </div>
      )}

      {servings && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={portionIcon} alt="Servings" />
          <span>{servings} servings</span>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
