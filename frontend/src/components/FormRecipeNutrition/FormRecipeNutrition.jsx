import React from 'react';
import classes from './FormRecipeNutrition.module.css';

function FormRecipeNutrition() {
  return (
    <div className={classes.nutritionInfo}>
      <h3>Nutrition (optional):</h3>
      <div className={classes.nutritionDetails}>
        <input type="number" name="calories" placeholder="kcal..." min="0" />
        <input type="number" name="fat" placeholder="fat (g)..." min="0" step="0.1" />
        <input type="number" name="saturated_fat" placeholder="saturates (g)..." min="0" step="0.1" />
        <input type="number" name="carbohydrates" placeholder="carbs (g)..." min="0" step="0.1" />
        <input type="number" name="sugars" placeholder="sugars (g)..." min="0" step="0.1" />
        <input type="number" name="fiber" placeholder="fiber (g)..." min="0" step="0.1" />
        <input type="number" name="protein" placeholder="protein (g)..." min="0" step="0.1" />
        <input type="number" name="salt" placeholder="salt (g)..." min="0" step="0.01" />
      </div>
    </div>
  );
}

export default FormRecipeNutrition;
