import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './FormIngredientsList.module.css';

function FormIngredientsList({ currentIngredients, onIngredientsChange }) {
  const [ingredients, setIngredients] = useState(currentIngredients || []);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await axios.get('http://localhost:8080/api/ingredients');
        setAvailableIngredients(response.data);
      } catch (error) {
        console.error('Failed to fetch ingredients', error);
      }
    }

    fetchIngredients();
  }, []);

  useEffect(() => {
    setIngredients(currentIngredients);
  }, [currentIngredients]);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        let updatedValue = value;
        if (field === "quantity") {
          updatedValue = parseFloat(value) || 0;
        } else if (field === "ingredientId") {
          updatedValue = parseInt(value) || '';
        }
        return { ...ingredient, [field]: updatedValue };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
    onIngredientsChange(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { ingredientId: '', quantity: 0, measurement: '' }]);
  };

  return (
    <div className={classes.ingredients}>
      <h2>Ingredients</h2>
      {error && <p className={classes.error}>{error}</p>}
      <div id="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <div key={index} className={classes.ingredientItem}>
            <select
              className={classes.ingredientInput}
              value={ingredient.ingredientId || ''}
              onChange={(e) => handleIngredientChange(index, 'ingredientId', e.target.value)}
            >
              <option value="">Select Ingredient</option>
              {availableIngredients.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
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