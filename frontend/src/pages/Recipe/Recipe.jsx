import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Recipe.module.css';
import chickenWrap from '../../assets/images/chicken-wrap.jpg';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import NutritionInfo from '../../components/NutritionInfo/NutritionInfo';
import IngredientList from '../../components/IngredientList/IngredientList';
import InstructionList from '../../components/InstructionList/InstructionList';
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';

export default function Recipe() {

  const [recipeData, setRecipeData] = useState(null);
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recipes/1');
        setRecipeData(response.data);
      } catch (error) {
        console.error('Error fetching recipe', error);
      }
    };

    fetchRecipe();
  }, []);

  useEffect(() => {
    if (!recipeData) return;

    const fetchNutrition = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/recipes/1/nutrition`);
        setNutritionData(response.data);
      } catch (error) {
        console.error('Error fetching nutrition data', error);
      }
    };

    fetchNutrition();
  }, [recipeData]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <SearchBar />
      <div className={classes.mainContainer}>
        <div className={classes.mainInfo}>
        <ImageDisplay src={chickenWrap} alt="Chicken wrap" />
          <div className={classes.mainInfoText}>
            <h1 className={classes.RecipeTitle}>{recipeData.title}</h1>
            <RecipeInfo
              cookTime={recipeData.cookTime}
              level={recipeData.difficulty.level}
              servingSize={recipeData.servingSize}
              rating={recipeData.rating}
              ratingCount={recipeData.ratingCount}
            />
            <p className={classes.recipeDescription}>{recipeData.description}</p>
            <NutritionInfo nutritionData={nutritionData} />
          </div>
        </div>

        <div className={classes.recipeContent}>
          <IngredientList ingredients={recipeData.ingredients} />
          <InstructionList instructions={recipeData.instructions} />
        </div>
      </div>
    </>
  );
}
