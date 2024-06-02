import React, { useState, useEffect } from 'react';
import classes from './RecipeInfo.module.css';
import starIcon from '../../assets/icons/star.png';
import timeIcon from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portionIcon from '../../assets/icons/portion.svg';

const RecipeInfo = ({ cookTime, level, servingSize, rating, ratingCount, onRate, isLoggedIn, showRatingCount = true }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleMouseOver = (index) => {
    if (isLoggedIn) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    if (isLoggedIn) {
      const hasUserRated = onRate(index + 1);

      if (!hasUserRated) setCurrentRating(index);
    }
  };

  const getStarWidth = (index) => {
    const ratingToUse = hoverRating || currentRating;
    return `${Math.min(Math.max(ratingToUse - index, 0), 1) * 100}%`;
  };

  return (
    <div className={classes.recipeInfoContainer}>
      <div className={classes.recipeRating}>
        <div className={classes.recipeRatingStars}>
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={classes.starWrapper}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <img className={classes.starIcon} src={starIcon} alt="star-icon" />
              <div
                className={classes.starOverlay}
                style={{
                  width: getStarWidth(index),
                }}
              >
                <img className={classes.starIcon} src={starIcon} alt="star-icon" />
              </div>
            </div>
          ))}
        </div>
        <span>{currentRating?.toFixed(1)}
        {showRatingCount && <> {` (${ratingCount} ratings)`}</>}
        </span>
      </div>
      <div className={classes.infoDetails}>
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
    </div>
  );
};

export default RecipeInfo;
