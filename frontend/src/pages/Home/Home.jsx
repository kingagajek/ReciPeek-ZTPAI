import React from 'react'
import classes from './Home.module.css' 
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import chickenWrap from '../../assets/images/chicken-wrap.jpg'
import star from '../../assets/icons/star.png'
import time from '../../assets/icons/time.svg'
import difficulty from '../../assets/icons/difficulty.svg'

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={classes.mainContainer}>
        <div className={classes.recommendedRecipes}>
          <h2 className={classes.recipeGridTitle}>Recommended</h2>
          <div className={classes.recipeGrid}>
            <div className={classes.recipeCard}>
              <img className={classes.recipeThumbnail} src={chickenWrap} alt="Chicken Wrap" />
              <div className={classes.recipeMeta}>
                <div className={classes.recipeTitle}>
                  <div className={classes.recipeRating}>
                    <img className={classes.starIcon} src={star} alt="star-icon" />
                    <span>4.5</span>
                  </div>
                  <h3>Chicken Wrap</h3>
                </div>
                <div className={classes.recipeInfo}>
                  <div className={classes.timeInfo}>
                    <img className={classes.recipeInfoIcon} src={time} alt="time-icon" />
                    <span>30 mins</span>
                  </div>
                  <div className={classes.difficultyInfo}>
                    <img className={classes.recipeInfoIcon} src={difficulty} alt="difficulty-icon" />
                    <span>Easy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.recentRecipes}>
          <h2 className={classes.recipeGridTitle}>Most recent recipes</h2>
          <div className={classes.recipeGrid}>
            
          </div>
        </div>
      </div>
    </>
  );
}
