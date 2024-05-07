import React from 'react';
import classes from './RecipeCard.module.css';
import star from '../../assets/icons/star.png';
import time from '../../assets/icons/time.svg';
import difficulty from '../../assets/icons/difficulty.svg';
import chuj from '../../assets/images/chicken-wrap.jpg';

export default function RecipeCard({ title, image, rating, timeRequired, difficultyLevel }) {
  return (
    <div className={classes.recipeCard}>
      <img className={classes.recipeThumbnail} src={chuj} alt={title} />
      <div className={classes.recipeMeta}>
        <div className={classes.recipeTitle}>
          <div className={classes.recipeRating}>
            <img className={classes.starIcon} src={star} alt="star-icon" />
            <span>{rating}</span>
          </div>
          <h3>{title}</h3>
        </div>
        <div className={classes.recipeInfo}>
          <div className={classes.timeInfo}>
            <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
            <span>{timeRequired}</span>
          </div>
          <div className={classes.difficultyInfo}>
            <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
            <span>{difficultyLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}