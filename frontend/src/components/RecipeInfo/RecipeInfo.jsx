import React from 'react';
import classes from './RecipeInfo.module.css';
import starIcon from '../../assets/icons/star.png';
import timeIcon from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portionIcon from '../../assets/icons/portion.svg';

const RecipeInfo = ({ cookTime, level, servingSize, rating, ratingCount }) => {
  return (
    <div className={classes.recipeInfoContainer}>
        {rating && (
        <div className={classes.recipeRating}>
          <img className={classes.starIcon} src={starIcon} alt="Rating" />
          <span>{`${rating} (${ratingCount} ratings)`}</span>
        </div>
      )}
      {cookTime && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={timeIcon} alt="Time" />
          <span>{cookTime} mins</span>
        </div>
      )}

      {level && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="Difficulty" />
          <span>{level}</span>
        </div>
      )}

      {servingSize && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={portionIcon} alt="Servings" />
          <span>{servingSize} servings</span>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
