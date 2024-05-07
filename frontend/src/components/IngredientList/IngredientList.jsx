import React from 'react';
import classes from './IngredientList.module.css';

const IngredientList = ({ ingredients }) => {
  return (
    <div className={classes.ingredientsContainer}>
      <h2>Ingredients</h2>
      <ul className={classes.ingredientList}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={classes.ingredientItem}>
            {ingredient.ingredient.name} - {ingredient.quantity} {ingredient.measurement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
