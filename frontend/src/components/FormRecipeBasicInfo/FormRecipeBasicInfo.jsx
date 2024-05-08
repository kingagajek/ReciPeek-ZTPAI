import React from 'react';

import classes from './FormRecipeBasicInfo.module.css'
import time from '../../assets/icons/time.svg';
import difficultyIcon from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';

function FormRecipeBasicInfo({ onInputChange, formData }) {
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
            name="cook_time" 
            placeholder="Total time(mins)..."
            value={formData.cookTime}
            onChange={(e) => onInputChange('cookTime', e.target.value)}
            min="1" 
            required 
          />
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={difficultyIcon} alt="difficulty-icon" />
          <select 
            name="level"
            value={formData.level}
            onChange={(e) => onInputChange('level', e.target.value)}
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
            name="serving_size" 
            placeholder="Portions..."
            value={formData.servingSize}
            onChange={(e) => onInputChange('servingSize', e.target.value)}
            min="1"
          />
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
