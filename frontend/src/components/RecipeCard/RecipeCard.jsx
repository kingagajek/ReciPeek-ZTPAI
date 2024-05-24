import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classes from './RecipeCard.module.css';
import star from '../../assets/icons/star.png';
import time from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';

export default function RecipeCard({ 
  id, 
  title, 
  image, 
  cookTime, 
  level, 
  description, 
  showDescription, 
  showFullRating, 
  backgroundColor, 
  isResultPage 
}) {
  const [ratingData, setRatingData] = useState({ average: 0, count: 0 });

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/ratings/average/${id}`);
        setRatingData(response.data);
      } catch (error) {
        console.error('Error fetching average rating:', error);
      }
    };

    fetchRatingData();
  }, [id]);

  const averageRating = typeof ratingData.average === 'number' ? ratingData.average : 0;
  const textColor = backgroundColor === '#fff' ? '#000' : '#fff';

  const getImageSrc = (image) => {
    if (image) {
      return `data:image/jpeg;base64,${image}`;
    }
    return 'defaultImage.jpg';
  };

  return (
    <div className={classes.recipeCard} style={{ backgroundColor }}>
      <img className={classes.recipeThumbnail} src={getImageSrc(image)} alt={title} />
      <div className={classes.recipeMeta}>
        {isResultPage ? (
          <>
            <h3 className={classes.recipeTitle} style={{ color: textColor }}>{title}</h3>
            {showDescription && <p className={classes.recipeDescription}>{description}</p>}
            <div className={classes.recipeInfo}>
              <div className={classes.timeInfo}>
                <img className={classes.recipeInfoIcon} src={time} alt="time-icon" style={{ filter: textColor === '#000' ? 'invert(0)' : 'invert(1)' }} />
                <span style={{ color: textColor }}>{cookTime} mins</span>
              </div>
              <div className={classes.difficultyInfo}>
                <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="difficulty-icon" style={{ filter: textColor === '#000' ? 'invert(0)' : 'invert(1)' }} />
                <span style={{ color: textColor }}>{level}</span>
              </div>
            </div>
            <div className={classes.recipeRating}>
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  className={classes.starIcon}
                  src={star}
                  alt="star-icon"
                  style={{ opacity: index < averageRating ? 1 : 0.5 }}
                />
              ))}
              <span>{averageRating.toFixed(1)}</span>
            </div>
          </>
        ) : (
          <>
            <div className={classes.recipeTitle} style={{ color: textColor }}>
              {showFullRating ? (
                <div className={classes.recipeRating}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <img
                      key={index}
                      className={classes.starIcon}
                      src={star}
                      alt="star-icon"
                      style={{ opacity: index < averageRating ? 1 : 0.5 }}
                    />
                  ))}
                  <span>{averageRating.toFixed(1)}</span>
                </div>
              ) : (
                <div className={classes.recipeRating}>
                  <img className={classes.starIcon} src={star} alt="star-icon" />
                  <span>{averageRating.toFixed(1)}</span>
                </div>
              )}
              <h3>{title}</h3>
            </div>
            {showDescription && <p className={classes.recipeDescription}>{description}</p>}
            <div className={classes.recipeInfo}>
              <div className={classes.timeInfo}>
                <img className={classes.recipeInfoIcon} src={time} alt="time-icon" style={{ filter: textColor === '#000' ? 'invert(0)' : 'invert(1)' }} />
                <span style={{ color: textColor }}>{cookTime} mins</span>
              </div>
              <div className={classes.difficultyInfo}>
                <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="difficulty-icon" style={{ filter: textColor === '#000' ? 'invert(0)' : 'invert(1)' }} />
                <span style={{ color: textColor }}>{level}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  cookTime: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  description: PropTypes.string,
  showDescription: PropTypes.bool,
  showFullRating: PropTypes.bool,
  backgroundColor: PropTypes.string,
  isResultPage: PropTypes.bool,
};

RecipeCard.defaultProps = {
  showDescription: false,
  showFullRating: false,
  backgroundColor: 'var(--color-peach)',
  isResultPage: false,
};