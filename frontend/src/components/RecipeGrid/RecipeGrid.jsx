import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';
import classes from './RecipeGrid.module.css';

function RecipeGrid({ recipes }) {
  return (
    <div className={classes.recipeGrid}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;
