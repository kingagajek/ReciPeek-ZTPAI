import React from 'react';
import './Recipe.css';
import chickenwWrap from '../../assets/images/chicken-wrap.jpg'
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'
import portion from '../../assets/icons/portion.svg'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Recipe() {
  return (
    <>
    <Header />
        <SearchBar />
        <div class="main-container">
        <div class="main-info">
            <img class="recipe-picture" src={chickenwWrap} alt="Chicken wrap" />
            <div class="main-info-text">
                <h1>Title</h1>
                <div class="recipe-rating">
                    <img class="star-icon" src={star} alt="star-icon" />
                    <span>58 ratings</span>
                </div>
                <div class="recipe-info">
                    <div class="recipe-info-item">
                        <img class="recipe-info-icon" src={time} alt="time-icon" />
                        <span> 30 mins</span>
                    </div>
                    <div class="recipe-info-item">
                        <img class="recipe-info-icon" src={difficulty} alt="difficulty-icon" />
                        <span>easy</span>
                    </div>
                    <div class="recipe-info-item">
                        <img class="recipe-info-icon" src={portion} alt="portion-icon" />
                        <span>2 portion</span>
                    </div>
                </div>
                <p class="recipe-description">
                    Description
                </p>
                <div class="nutrition-info">
                    <h3>Nutrition:</h3>
                    <div class="nutrition-details">
                        <div class="nutrition-item">
                            <span class="nutrition-label">kcal</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">fat</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">saturates</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">carbs</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">sugars</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">fibre</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">protein</span>
                            <span class="nutrition-value">0</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">salt</span>
                            <span class="nutrition-value">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="recipe-content">
            <div class="ingredients">
                <h2>Ingredients</h2>
                <form class="ingredients-list">
                    <label class="ingredient-item">
                        <input type="checkbox" name="ingredient" value="400g graham crackers" />
                        <span>400g graham crackers</span>
                    </label>
                    <label class="ingredient-item">
                        <input type="checkbox" name="ingredient" value="150g unsalted butter, melted" />
                        <span>150g unsalted butter, melted</span>
                    </label>
                </form>
            </div>

            <div class="instructions">
                <h2>Instructions</h2>
                <ol class="instruction-list">
                    <li>Preheat your oven to 180°C (350°F) and line a baking tray with parchment paper.</li>
                    <li>In a large bowl, combine the flour, sugar, baking powder, and a pinch of salt.</li>
                    <li>Cut in the butter until the mixture resembles coarse crumbs.</li>
                </ol>
            </div>
        </div>
    </div>
    </>
  );
}
