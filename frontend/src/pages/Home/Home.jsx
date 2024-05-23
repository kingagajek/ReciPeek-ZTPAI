import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Home.module.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeGrid from '../../components/RecipeGrid/RecipeGrid';

export default function Home() {
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [recentRecipes, setRecentRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const responseRec = await axios.get('http://localhost:8080/api/recipes/recommended');
        if (responseRec.data && responseRec.data.content) {
          setRecommendedRecipes(responseRec.data.content);
        }
  
        const responseRecent = await axios.get('http://localhost:8080/api/recipes/recent');
        if (responseRecent.data && responseRecent.data.content) {
          setRecentRecipes(responseRecent.data.content);
        }
      } catch (error) {
        console.error('Failed to fetch recipes', error);
      }
    };
  
    fetchRecipes();
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <div className={classes.mainContainer}>
        <div className={classes.recommendedRecipes}>
          <h2 className={classes.recipeGridTitle}>Recommended</h2>
          <RecipeGrid 
            recipes={recommendedRecipes} 
            showDescription={false} 
            showFullRating={false} 
            backgroundColor="var(--color-peach)" 
          />
        </div>
        <div className={classes.recentRecipes}>
          <h2 className={classes.recipeGridTitle}>Most recent recipes</h2>
          <RecipeGrid 
            recipes={recentRecipes} 
            showDescription={false} 
            showFullRating={false} 
            backgroundColor="#fff" 
          />
        </div>
      </div>
    </>
  );
}