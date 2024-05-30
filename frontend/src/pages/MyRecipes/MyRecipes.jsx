import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { useAuth } from '../../context/AuthProvider';
import NutritionInfo from '../../components/NutritionInfo/NutritionInfo';
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo'; 
import Header from '../../components/Header/Header';
import classes from './MyRecipes.module.css';
import { ClipLoader } from 'react-spinners';

const MyRecipes = () => {
  const navigate = useNavigate();
  const { user, auth } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User:", user);
    console.log("Auth:", auth);
    const fetchRecipes = async () => {
      if (user && auth) {
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${user.id}/recipes`, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          });
          console.log("Recipes response:", response.data);
          const recipesData = response.data;

          if (Array.isArray(recipesData)) {
            const recipesWithNutrition = await addNutritionToRecipes(recipesData);
            setRecipes(recipesWithNutrition);
            const recipesWithRating = await addRatingToRecipes(recipesData);
            setRecipes(recipesWithRating);
          } else {
            setRecipes([]);
          }
        } catch (error) {
          console.error('Error fetching recipes', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [user, auth]);

  const addNutritionToRecipes = async (recipes) => {
    return Promise.all(recipes.map(async (recipe) => {
      try {
        const nutritionResponse = await axios.get(`http://localhost:8080/api/recipes/${recipe.id}/nutrition`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        });
        console.log(`Nutrition for recipe ${recipe.id}:`, nutritionResponse.data);
        return { ...recipe, nutrition: nutritionResponse.data };
      } catch (error) {
        console.error(`Error fetching nutrition data for recipe ${recipe.id}`, error);
        return { ...recipe, nutrition: null };
      }
    }));
  };

  const addRatingToRecipes = async (recipes) => {
    return Promise.all(recipes.map(async (recipe) => {
      try {
        const ratingResponse = await axios.get(`http://localhost:8080/api/ratings/average/${recipe.id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        });
        console.log(`Ratig for recipe ${recipe.id}:`, ratingResponse.data.average);
        return { ...recipe, rating: ratingResponse.data.average };
      } catch (error) {
        console.error(`Error fetching rating data for recipe ${recipe.id}`, error);
        return { ...recipe, rating: null };
      }
    }));
  };

  const handleEdit = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/addRecipe/${id}`);
  };

  const handleDelete = async (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await axios.delete(`http://localhost:8080/api/recipes/${id}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      });
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe', error);
    }
  };

  const handleAddNew = () => {
    navigate('/addRecipe');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    );
  }

  return (
    <div className={classes.myRecipesContainer}>
      <Header />
      <button className="buttonBgGradient" onClick={handleAddNew}>Add New Recipe</button>
      <div className={classes.recipeList}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={classes.recipeCard} onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <ImageDisplay src={recipe.pictureUrl} alt={recipe.title} />
            <div className={classes.mainInfoText}>
              <h1 className={classes.RecipeTitle}>{recipe.title}</h1>
              <RecipeInfo
                cookTime={recipe.cookTime}
                level={recipe.difficulty.level}
                servingSize={recipe.servingSize}
                rating={recipe.rating}
                showRatingCount={false}
              />
              <p className={classes.recipeDescription}>{recipe.description}</p>
              <NutritionInfo nutritionData={recipe.nutrition} />
            </div>
            <div className={classes.actionButtons}>
              <button className={classes.iconButton} onClick={(event) => handleEdit(recipe.id, event)}><FaEdit /></button>
              <button className={classes.iconButton} onClick={(event) => handleDelete(recipe.id, event)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
