import React from 'react';
import classes from './RecipeInfo.module.css';
import starIcon from '../../assets/icons/star.png';
import timeIcon from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portionIcon from '../../assets/icons/portion.svg';
import cuisineIcon from '../../assets/icons/cuisine.svg';
import dietIcon from '../../assets/icons/diet.svg';
import mealTypeIcon from '../../assets/icons/mealType.svg';

const RecipeInfo = ({ cookTime, level, servingSize, rating, ratingCount, cuisine, diet, mealType }) => {
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

      {/* {cuisine && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={cuisineIcon} alt="Cuisine" />
          <span>{cuisine}</span>
        </div>
      )}

      {diet && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={dietIcon} alt="Diet" />
          <span>{diet}</span>
        </div>
      )}

      {mealType && (
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={mealTypeIcon} alt="Meal Type" />
          <span>{mealType}</span>
        </div>
      )} */}
    </div>
  );
};

export default RecipeInfo;
