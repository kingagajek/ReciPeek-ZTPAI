import React from 'react';
import classes from './FormRecipeNutrition.module.css';

function FormRecipeNutrition({ onInputChange, formData }) {
  return (
    <div className={classes.nutritionInfo}>
      <h3>Nutrition (optional):</h3>
      <div className={classes.nutritionDetails}>
        <input
          type="number"
          name="kcal"
          placeholder="kcal..."
          value={formData.nutrition?.kcal || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, kcal: e.target.value })}
          min="0"
        />
        <input
          type="number"
          name="fat"
          placeholder="fat (g)..."
          value={formData.nutrition?.fat || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, fat: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="saturates"
          placeholder="saturates (g)..."
          value={formData.nutrition?.saturates || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, saturates: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="carbs"
          placeholder="carbs (g)..."
          value={formData.nutrition?.carbs || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, carbs: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="sugars"
          placeholder="sugars (g)..."
          value={formData.nutrition?.sugars || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, sugars: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="fiber"
          placeholder="fiber (g)..."
          value={formData.nutrition?.fiber || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, fiber: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="protein"
          placeholder="protein (g)..."
          value={formData.nutrition?.protein || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, protein: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="salt"
          placeholder="salt (g)..."
          value={formData.nutrition?.salt || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, salt: e.target.value })}
          min="0" step="0.01"
        />
      </div>
    </div>
  );
}

export default FormRecipeNutrition;
