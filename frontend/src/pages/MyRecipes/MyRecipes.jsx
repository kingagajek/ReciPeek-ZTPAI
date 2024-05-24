import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { useAuth } from '../../context/AuthProvider';
import NutritionInfo from '../../components/NutritionInfo/NutritionInfo';
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo'; 
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import classes from './MyRecipes.module.css';

const MyRecipes = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${user.id}/recipes`);
          const recipesData = response.data;

          if (Array.isArray(recipesData)) {
            const recipesWithNutrition = await addNutritionToRecipes(recipesData);
            setRecipes(recipesWithNutrition);
          } else {
            setRecipes([]);
          }
        } catch (error) {
          console.error('Error fetching recipes', error);
        }
      }
    };

    fetchRecipes();
  }, [user]);

  const addNutritionToRecipes = async (recipes) => {
    return Promise.all(recipes.map(async (recipe) => {
      try {
        const nutritionResponse = await axios.get(`http://localhost:8080/api/recipes/${recipe.id}/nutrition`);
        return { ...recipe, nutrition: nutritionResponse.data };
      } catch (error) {
        console.error(`Error fetching nutrition data for recipe ${recipe.id}`, error);
        return { ...recipe, nutrition: null };
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
      await axios.delete(`http://localhost:8080/api/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe', error);
    }
  };

  const handleAddNew = () => {
    navigate('/addRecipe');
  };

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
                ratingCount={recipe.ratingCount}
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
