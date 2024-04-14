import React from 'react';

import './AddRecipe.css';
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'
import portion from '../../assets/icons/portion.svg'
import search from '../../assets/icons/search.svg'
import Header from '../../components/Header/Header';

export default function AddRecipe() {
  return (
    <>
    <Header />
      <form className="main-container" method="post" encType="multipart/form-data">
        <div className="main-info">
            <div className="image-upload-container">
                <div className="image-preview-container"></div>
                <label htmlFor="file-upload" className="image-upload-label">
                    <div className="image-upload-plus">+</div>
                    <div className="image-upload-text">Upload image</div>
                </label>
                <input id="file-upload" type="file" name="image" accept="image/*" style={{ display: 'none' }}/>
            </div>
            <div className="main-info-text">
                <input className="recipe-title" type="text" name="title" placeholder="Recipe name..." required />
                <div className="recipe-info">
                    <div className="recipe-info-item">
                        <img className="recipe-info-icon" src={time} alt="time-icon" />
                        <input type="number" name="cook_time" placeholder="Total time(mins)..." min="1" required />
                    </div>
                    <div className="recipe-info-item">
                        <img className="recipe-info-icon" src={difficulty} alt="difficulty-icon" />
                        <select name="difficulty" placeholder="Difficulty..." required>
                            <option value="">Select difficulty...</option>
                            <option value="1">Easy</option>
                            <option value="2">More effort</option>
                            <option value="3">A challenge</option>
                        </select>
                    </div>
                    <div className="recipe-info-item">
                        <img className="recipe-info-icon" src={portion} alt="portion-icon" />
                        <input type="number" name="serving_size" placeholder="Portions..." min="1" />
                    </div>
                </div>
                <textarea className="recipe-description" name="description" placeholder="Add recipe description..." required></textarea>
                <div className="nutrition-info">
                    <h3>Nutrition (optional):</h3>
                    <div className="nutrition-details">
                        {/* Each of these would be controlled inputs with state in a real application */}
                        <input type="number" name="calories" placeholder="kcal..." min="0" />
                        {/* More inputs for nutrition info */}
                    </div>
                </div>
            </div>
        </div>

        <div className="recipe-content">
            {/* Step 2: Ingredients */}
            <div className="ingredients">
                <h2>Ingredients</h2>
                <div id="ingredients-list">
                    <div className="ingredient-item">
                        {/* Inputs for ingredients */}
                    </div>
                </div>
                <button type="button" id="add-ingredient-btn">Add Ingredient</button>
            </div>
            {/* Step 3: Instructions */}
            <div className="instructions">
                <h2>Instructions</h2>
                <div id="instructions-list">
                    {/* Steps would be dynamically added here */}
                </div>
                <button type="button" id="add-instruction-btn">Add Step</button>
            </div>
        </div>
        {/* Submit Button */}
        <button type="submit" className="submit-button button-bg-gradient">Submit Recipe</button>
      </form>
    </>
  );
};