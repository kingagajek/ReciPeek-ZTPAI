import React from 'react';
import classes from './FormRecipeBasicInfo.module.css'
import time from '../../assets/icons/time.svg';
import difficulty from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';

function FormRecipeBasicInfo() {
  return (
    <div className={classes.mainInfoText}>
      <input className={classes.recipeTitle} type="text" name="title" placeholder="Recipe name..." required />

      <div className={classes.recipeInfo}>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
          <input type="number" name="cook_time" placeholder="Total time(mins)..." min="1" required />
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
          <select name="difficulty" required>
            <option value="">Select difficulty...</option>
            <option value="1">Easy</option>
            <option value="2">More effort</option>
            <option value="3">A challenge</option>
          </select>
        </div>
        <div className={classes.recipeInfoItem}>
          <img className={classes.recipeInfoIcon} src={portion} alt="portion-icon" />
          <input type="number" name="serving_size" placeholder="Portions..." min="1" />
        </div>
      </div>
      
      <textarea className={classes.recipeDescription} name="description" placeholder="Add recipe description..." required></textarea>
    </div>
  );
}

export default FormRecipeBasicInfo;
