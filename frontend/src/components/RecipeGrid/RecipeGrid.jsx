import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RecipeCard from '../RecipeCard/RecipeCard';
import classes from './RecipeGrid.module.css';

const NextArrow = ({ onClick }) => {
  return (
    <div className={`${classes.arrow} ${classes.next}`} onClick={onClick}>
      <span>&#8250;</span>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className={`${classes.arrow} ${classes.prev}`} onClick={onClick}>
      <span>&#8249;</span>
    </div>
  );
};

export default function RecipeGrid({ recipes, showDescription, showFullRating, backgroundColor }) {
  const validRecipes = Array.isArray(recipes) ? recipes : [];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className={classes.recipeGrid}>
      {validRecipes.map(recipe => (
        <a key={recipe.id} className={classes.slide} href={`/recipe/${recipe.id}`}>
          <RecipeCard
            id={recipe.id}
            title={recipe.title}
            image={recipe.pictureUrl}
            rating={recipe.rating}
            cookTime={recipe.cookTime}
            level={recipe.difficulty ? recipe.difficulty.level : 'Unknown'}
            description={recipe.description}
            showDescription={showDescription}
            showFullRating={showFullRating}
            backgroundColor={backgroundColor}
          />
        </a>
      ))}
    </Slider>
  );
}