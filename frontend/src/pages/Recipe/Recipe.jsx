import React from 'react';

import classes from './Recipe.module.css';
import chickenWrap from '../../assets/images/chicken-wrap.jpg';
import star from '../../assets/icons/star.png';
import time from '../../assets/icons/time.svg';
import difficulty from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Recipe() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={classes.mainContainer}>
        <div className={classes.mainInfo}>
          <img className={classes.recipePicture} src={chickenWrap} alt="Chicken wrap" />
          <div className={classes.mainInfoText}>
            <h1>Title</h1>
            <div className={classes.recipeRating}>
              <img className={classes.starIcon} src={star} alt="star-icon" />
              <span>58 ratings</span>
            </div>
            <div className={classes.recipeInfo}>
              <div className={classes.recipeInfoItem}>
                <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
                <span>30 mins</span>
              </div>
              <div className={classes.recipeInfoItem}>
                <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
                <span>Easy</span>
              </div>
              <div className={classes.recipeInfoItem}>
                <img className={classes.recipeInfoIcon} src={portion} alt="portion-icon" />
                <span>2 portions</span>
              </div>
            </div>
            <p className={classes.recipeDescription}>
              Description
            </p>
            <div className={classes.nutritionInfo}>
              <h3>Nutrition:</h3>
              <div className={classes.nutritionDetails}>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>kcal</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>fat</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>saturates</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>carbs</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>sugars</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>fibre</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>protein</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
                <div className={classes.nutritionItem}>
                  <span className={classes.nutritionLabel}>salt</span>
                  <span className={classes.nutritionValue}>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.recipeContent}>
          <div className={classes.ingredients}>
            <h2>Ingredients</h2>
            <form className={classes.ingredientsList}>
              <label className={classes.ingredientItem}>
                <input type="checkbox" name="ingredient" value="400g graham crackers" />
                <span>400g graham crackers</span>
              </label>
              <label className={classes.ingredientItem}>
                <input type="checkbox" name="ingredient" value="150g unsalted butter, melted" />
                <span>150g unsalted butter, melted</span>
              </label>
            </form>
          </div>

          <div className={classes.instructions}>
            <h2>Instructions</h2>
            <ol className={classes.instructionList}>
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