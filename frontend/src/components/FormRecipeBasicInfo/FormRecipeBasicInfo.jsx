import React from 'react';
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
          {cuisine.map(cuisine => (
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
          {diets.map(diet => (
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
          {mealTypes.map(mealType => (
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
