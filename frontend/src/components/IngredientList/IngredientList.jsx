import React, { useState } from 'react';
import classes from './IngredientList.module.css';

const IngredientList = ({ ingredients }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients(prevChecked => {
      if (prevChecked.includes(ingredient)) {
        return prevChecked.filter(item => item !== ingredient);
      } else {
        return [...prevChecked, ingredient];
      }
    });
  };

  return (
    <div className={classes.ingredientsContainer}>
      <h2>Ingredients</h2>
      <ul className={classes.ingredientList}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={classes.ingredientItem}>
            <label>
              <input
                type="checkbox"
                checked={checkedIngredients.includes(ingredient)}
                onChange={() => handleCheckboxChange(ingredient)}
              />
              <span>
                {ingredient.ingredient.name} - {ingredient.quantity} {ingredient.measurement}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
