import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import classes from './Recipe.module.css';
import Header from '../../components/Header/Header';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import NutritionInfo from '../../components/NutritionInfo/NutritionInfo';
import IngredientList from '../../components/IngredientList/IngredientList';
import InstructionList from '../../components/InstructionList/InstructionList';
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';
import { useAuth } from '../../context/AuthProvider';

export default function Recipe() {
  const { id } = useParams();
  const { auth, user } = useAuth();
  const isLoggedIn = !!user;

  const [recipeData, setRecipeData] = useState(null);
  const [nutritionData, setNutritionData] = useState([]);
  const [averageRating, setAverageRating] = useState(null);
  const [ratingCount, setRatingCount] = useState(null);
  const [userHasRated, setUserHasRated] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
        setRecipeData(response.data);
      } catch (error) {
        console.error('Error fetching recipe', error);
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (!recipeData) return;

    const fetchNutrition = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/recipes/${id}/nutrition`);
        setNutritionData(response.data);
      } catch (error) {
        console.error('Error fetching nutrition data', error);
      }
    };

    fetchNutrition();
  }, [recipeData, id]);

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/ratings/average/${id}`);
        setAverageRating(response.data.average);
        setRatingCount(response.data.count);
      } catch (error) {
        console.error('Error fetching average rating', error);
      }
    };

    fetchAverageRating();
  }, [id]);

  useEffect(() => {
    const checkUserRating = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/ratings/user/${user.id}/recipe/${id}`);
        setUserHasRated(response.data.hasRated);
      } catch (error) {
        console.error('Error checking user rating', error);
      }
    };

    if (user && id) {
      checkUserRating();
    }
  }, [user, id]);

  const handleRate = async (rating) => {
    try {
      if (!userHasRated) {
        await axios.post(
          'http://localhost:8080/api/ratings',
          { value: rating, recipeId: id, userId: user.id },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            }
          }
        );
        const updatedResponse = await axios.get(`http://localhost:8080/api/ratings/average/${id}`);
        setAverageRating(updatedResponse.data.average);
        setRatingCount(updatedResponse.data.count);
        setUserHasRated(true);
      } else {
        alert('You have already rated this recipe.');
        return true;
      }
    } catch (error) {
      console.error('Error rating recipe:', error);
    }
  };

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.mainInfo}>
          <ImageDisplay src={recipeData.pictureUrl} alt={recipeData.title} />
          <div className={classes.mainInfoText}>
            <h1 className={classes.RecipeTitle}>{recipeData.title}</h1>
            <RecipeInfo
              cookTime={recipeData.cookTime}
              level={recipeData.difficulty.level}
              servingSize={recipeData.servingSize}
              rating={averageRating}
              ratingCount={ratingCount}
              onRate={handleRate}
              isLoggedIn={isLoggedIn}
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