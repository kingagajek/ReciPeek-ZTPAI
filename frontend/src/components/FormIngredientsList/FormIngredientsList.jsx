import React from 'react';
import classes from './FormIngredientsList.module.css';

function FormIngredientsList() {
  return (
    <div className={classes.ingredients}>
      <h2>Ingredients</h2>
      <div id="ingredients-list">
        <div className={classes.ingredientItem}>
          <input type="text" name="ingredients[]" placeholder="Ingredient..." className={classes.ingredientInput} />
          <input type="number" name="quantities[]" placeholder="Quantity..." className={classes.ingredientQuantity} min="0" step="any" />
          <input type="text" name="measurements[]" placeholder="Measurement..." className={classes.ingredientMeasurement} />
        </div>
      </div>
      <button type="button" id="add-ingredient-btn" className={classes.addIngredientBtn}>Add Ingredient</button>
    </div>
  );
}

export default FormIngredientsList;