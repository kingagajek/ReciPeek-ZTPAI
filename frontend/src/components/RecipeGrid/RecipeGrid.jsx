import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';
import classes from './RecipeGrid.module.css';

export default function RecipeGrid({ recipes }) {
  const validRecipes = Array.isArray(recipes) ? recipes : [];

  return (
    <div className={classes.recipeGrid}>
      {validRecipes.map(recipe => (
        <RecipeCard
        key={recipe.id}
        title={recipe.title}
        image={recipe.image}
        rating={recipe.rating}
        cookTime={`${recipe.cookTime} min`}
        level={recipe.difficulty ? recipe.difficulty.level : 'Unknown'}
      />
      ))}
    </div>
  );
}
