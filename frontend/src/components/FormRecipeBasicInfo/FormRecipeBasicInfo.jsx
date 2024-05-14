import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './FormRecipeBasicInfo.module.css';
import time from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';
import cuisineIcon from '../../assets/icons/cuisine.svg';
import dietIcon from '../../assets/icons/diet.svg';
import mealTypeIcon from '../../assets/icons/mealType.svg';

function FormRecipeBasicInfo({ onInputChange, formData }) {
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:8080/api/cuisines'),
          axios.get('http://localhost:8080/api/diets'),
          axios.get('http://localhost:8080/api/mealTypes')
        ]);
        setCuisines(Array.isArray(responses[0].data) ? responses[0].data : []);
        setDiets(Array.isArray(responses[1].data) ? responses[1].data : []);
        setMealTypes(Array.isArray(responses[2].data) ? responses[2].data : [])
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.mainInfoText}>
      <input
        className={classes.recipeTitle}
        type="text"
        name="title"
        placeholder="Recipe name..."
        value={formData.title}
        onChange={(e) => onInputChange('title', e.target.value)}
        required
      />

      <div className={classes.recipeInfo}>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
          <input
            type="number"
            name="cookTime"
            placeholder="Total time (mins)..."
            value={formData.cookTime}
            onChange={(e) => onInputChange('cookTime', parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="difficulty-icon" />
          <select
            className={classes.infoSelect}
            name="difficultyId"
            value={formData.difficultyId}
            onChange={(e) => onInputChange('difficultyId', parseInt(e.target.value))}
            required
          >
            <option value="">Select difficulty...</option>
            <option value="1">Easy</option>
            <option value="2">More effort</option>
            <option value="3">A challenge</option>
          </select>
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={portion} alt="portion-icon" />
          <input
            type="number"
            name="servingSize"
            placeholder="Portions..."
            value={formData.servingSize}
            onChange={(e) => onInputChange('servingSize', parseInt(e.target.value))}
            min="1"
          />
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={cuisineIcon} alt="cuisine-icon" />
          <select
            className={classes.infoSelect}
            name="cuisineId"
            value={formData.cuisineId}
            onChange={(e) => onInputChange('cuisineId', parseInt(e.target.value))}
            required
          >
            <option value="">Select Cuisine...</option>
            {cuisines.length > 0 && cuisines.map(cuisine => (
              <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>
            ))}
          </select>
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={dietIcon} alt="diet-icon" />
          <select
            className={classes.infoSelect}
            name="dietId"
            value={formData.dietId}
            onChange={(e) => onInputChange('dietId', parseInt(e.target.value))}
            required
          >
            <option value="">Select Diet...</option>
            {diets.length > 0 && diets.map(diet => (
              <option key={diet.id} value={diet.id}>{diet.type}</option>
            ))}
          </select>
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={mealTypeIcon} alt="mealType-icon" />
          <select
            className={classes.infoSelect}
            name="mealTypeId"
            value={formData.mealTypeId}
            onChange={(e) => onInputChange('mealTypeId', parseInt(e.target.value))}
            required
          >
            <option value="">Select Meal Type...</option>
            {mealTypes.length > 0 && mealTypes.map(mealType => (
              <option key={mealType.id} value={mealType.id}>{mealType.name}</option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        className={classes.recipeDescription}
        name="description"
        placeholder="Add recipe description..."
        value={formData.description}
        onChange={(e) => onInputChange('description', e.target.value)}
        required
      ></textarea>
    </div>
  );
}

export default FormRecipeBasicInfo;
