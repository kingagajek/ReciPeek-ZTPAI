import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RecipeCard from '../RecipeCard/RecipeCard';
import classes from './RecipeGrid.module.css';

export default function RecipeGrid({ recipes, showDescription, showFullRating, backgroundColor }) {
  const validRecipes = Array.isArray(recipes) ? recipes : [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        <a key={recipe.id} className={classes.slide} href={`/recipe/${recipe.id}`} >
          <RecipeCard
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