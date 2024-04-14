import React from 'react';

import classes from '../Recipe/Recipe.module.css';
import time from '../../assets/icons/time.svg';
import difficulty from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';
import Header from '../../components/Header/Header';

export default function AddRecipe() {
  return (
    <>
      <Header />
      <form className={classes.mainContainer} method="post" encType="multipart/form-data">
        <div className={classes.mainInfo}>
          <div className={classes.imageUploadContainer}>
            <div className={classes.imagePreviewContainer}></div>
            <label htmlFor="file-upload" className={classes.imageUploadLabel}>
              <div className={classes.imageUploadPlus}>+</div>
              <div className={classes.imageUploadText}>Upload image</div>
            </label>
            <input id="file-upload" type="file" name="image" accept="image/*" style={{ display: 'none' }}/>
          </div>
          <div className={classes.mainInfoText}>
            <input className={classes.recipeTitle} type="text" name="title" placeholder="Recipe name..." required />
            <div className={classes.recipeInfo}>
              <div className={classes.recipeInfoItem}>
                <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
                <input type="number" name="cook_time" placeholder="Total time(mins)..." min="1" required />
              </div>
              <div className={classes.recipeInfoItem}>
                <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
                <select name="difficulty" placeholder="Difficulty..." required>
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
            <div className={classes.nutritionInfo}>
              <h3>Nutrition (optional):</h3>
              <div className={classes.nutritionDetails}>
                <input type="number" name="calories" placeholder="kcal..." min="0" />
                <input type="number" name="fat" placeholder="fat (g)..." min="0" step="0.1" />
                <input type="number" name="saturated_fat" placeholder="saturates (g)..." min="0" step="0.1" />
                <input type="number" name="carbohydrates" placeholder="carbs (g)..." min="0" step="0.1" />
                <input type="number" name="sugars" placeholder="sugars (g)..." min="0" step="0.1" />
                <input type="number" name="fiber" placeholder="fiber (g)..." min="0" step="0.1" />
                <input type="number" name="protein" placeholder="protein (g)..." min="0" step="0.1" />
                <input type="number" name="salt" placeholder="salt (g)..." min="0" step="0.01" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.recipeContent}>
          <div className={classes.ingredients}>
            <h2>Ingredients</h2>
            <div id="ingredients-list">
              <div className={classes.ingredientItem}>
                <input type="text" name="ingredients[]" placeholder="Ingredient..." class="ingredientInput" />
                <input type="number" name="quantities[]" placeholder="Quantity..." class="ingredientQuantity" min="0" step="any" />
                <input type="text" name="measurements[]" placeholder="Measurement..." class="ingredientMeasurement" />
              </div>
            </div>
            <button type="button" id="add-ingredient-btn" className={classes.addIngredientBtn}>Add Ingredient</button>
          </div>
          <div className={classes.instructions}>
            <h2>Instructions</h2>
            <div id="instructions-list">
            </div>
            <button type="button" id="add-instruction-btn" className={classes.addInstructionBtn}>Add Step</button>
          </div>
        </div>
        <button type="submit" className={classes.submitButton}>Submit Recipe</button>
      </form>
    </>
  );
}