import React from 'react';

import classes from './Home.module.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeGrid from '../../components/RecipeGrid/RecipeGrid';
// import '../../assets/images/chicken-wrap.jpg';

const recommendedRecipes = [
  {
    id: 1,
    title: 'Chicken Wrap',
    image: 'chicken-wrap.jpg',
    rating: '4.5',
    timeRequired: '30 mins',
    difficultyLevel: 'Easy'
  },
];

const recentRecipes = [
];

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={classes.mainContainer}>
        <div className={classes.recommendedRecipes}>
          <h2 className={classes.recipeGridTitle}>Recommended</h2>
          <RecipeGrid recipes={recommendedRecipes} />
        </div>

        <div className={classes.recentRecipes}>
          <h2 className={classes.recipeGridTitle}>Most recent recipes</h2>
          <RecipeGrid recipes={recentRecipes} />
        </div>
      </div>
    </>
  );
}