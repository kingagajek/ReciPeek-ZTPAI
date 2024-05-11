import React from 'react';
import classes from './FormRecipeNutrition.module.css';

function FormRecipeNutrition({ onInputChange, formData }) {
  return (
    <div className={classes.nutritionInfo}>
      <h3>Nutrition (optional):</h3>
      <div className={classes.nutritionDetails}>
        <input
          type="number"
          name="calories"
          placeholder="kcal..."
          value={formData.nutrition.calories || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, calories: e.target.value })}
          min="0"
        />
        <input
          type="number"
          name="fat"
          placeholder="fat (g)..."
          value={formData.nutrition.fat || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, fat: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="saturatedFat"
          placeholder="saturates (g)..."
          value={formData.nutrition.saturatedFat || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, saturatedFat: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="carbohydrates"
          placeholder="carbs (g)..."
          value={formData.nutrition.carbohydrates || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, carbohydrates: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="sugars"
          placeholder="sugars (g)..."
          value={formData.nutrition.sugars || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, sugars: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="fiber"
          placeholder="fiber (g)..."
          value={formData.nutrition.fiber || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, fiber: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="protein"
          placeholder="protein (g)..."
          value={formData.nutrition.protein || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, protein: e.target.value })}
          min="0" step="0.1"
        />
        <input
          type="number"
          name="salt"
          placeholder="salt (g)..."
          value={formData.nutrition.salt || ''}
          onChange={(e) => onInputChange('nutrition', { ...formData.nutrition, salt: e.target.value })}
          min="0" step="0.01"
        />
      </div>
    </div>
  );
}

export default FormRecipeNutrition;
