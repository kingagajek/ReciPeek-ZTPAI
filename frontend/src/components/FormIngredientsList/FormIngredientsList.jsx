import React, { useState } from 'react';
import classes from './FormIngredientsList.module.css';

function FormIngredientsList({ onIngredientsChange }) {
  const [ingredients, setIngredients] = useState([]);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
    onIngredientsChange(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', measurement: '' }]);
  };

  return (
    <div className={classes.ingredients}>
      <h2>Ingredients</h2>
      <div id="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <div key={index} className={classes.ingredientItem}>
            <input
              type="text"
              placeholder="Ingredient..."
              className={classes.ingredientInput}
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity..."
              className={classes.ingredientQuantity}
              min="0"
              step="any"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
            />
            <input
              type="text"
              placeholder="Measurement..."
              className={classes.ingredientMeasurement}
              value={ingredient.measurement}
              onChange={(e) => handleIngredientChange(index, 'measurement', e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient} className={classes.addIngredientBtn}>Add Ingredient</button>
      </div>
    </div>
  );
}

export default FormIngredientsList;
