import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import classes from '../Recipe/Recipe.module.css';
import Header from '../../components/Header/Header';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import FormRecipeBasicInfo from '../../components/FormRecipeBasicInfo/FormRecipeBasicInfo';
import FormRecipeNutrition from '../../components/FormRecipeNutrition/FormRecipeNutrition';
import FormIngredientsList from '../../components/FormIngredientsList/FormIngredientsList';
import FormInstructionsList from '../../components/FormInstructionsList/FormInstructionsList';
import FormButton from '../../components/FormButton/FormButton';
import { useAuth } from '../../context/AuthProvider';

export default function AddRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    cookTime: 0,
    difficultyId: 1,
    servingSize: 0,
    mealTypeId: 1,
    cuisineId: 1,
    dietId: 1,
    nutrition: {},
    ingredients: [],
    instructions: []
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/recipes/${id}`, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          });
          setRecipeData({ ...response.data });
        } catch (error) {
          console.error('Error fetching recipe data:', error);
        }
      };
      fetchData();
    }
  }, [id, auth.token]);

  useEffect(() => {
    if (id && recipeData) {
      const fetchNutrition = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/recipes/${id}/nutrition`, {
            headers: {
              'Authorization': `Bearer ${auth.token}`
            }
          });
          setRecipeData((prevData) => ({ ...prevData, nutrition: { ...response.data } }));
        } catch (error) {
          console.error('Error fetching nutrition data:', error);
        }
      };

      fetchNutrition();
    }
  }, [id, recipeData, auth.token]);

  const handleInputChange = (field, value) => {
    if (field === 'cookTime' || field === 'servingSize') {
      value = parseInt(value);
    }
    setRecipeData({ ...recipeData, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedData = {
      ...recipeData,
      cookTime: parseInt(recipeData.cookTime),
      servingSize: parseInt(recipeData.servingSize),
      ingredients: recipeData.ingredients.map(ing => ({ ...ing, quantity: parseFloat(ing.quantity) })),
      instructions: recipeData.instructions.map(ins => ({ stepNumber: ins.stepNumber, description: ins.description }))
    };

    try {
      let response;
      if (id) {
        response = await axios.put(`http://localhost:8080/api/recipes/${id}`, formattedData, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        });
      } else {
        response = await axios.post('http://localhost:8080/api/recipes', formattedData, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        });
      }

      if (response.data && response.status === 200) {
        navigate(`/recipe/${response.data || id}`);
      } else {
        throw new Error('Failed to save recipe');
      }
    } catch (error) {
      console.error('Failed to submit recipe', error);
    }
  };

  const handleIngredientsChange = (ingredients) => {
    setRecipeData({ ...recipeData, ingredients });
  };

  const handleInstructionsChange = (instructions) => {
    setRecipeData({ ...recipeData, instructions });
  };

  return (
    <>
      <Header />
      <form className={classes.mainContainer} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={classes.mainInfo}>
          <ImageUpload />
          <div className={classes.mainInfoText}>
            <FormRecipeBasicInfo onInputChange={handleInputChange} formData={recipeData} />
            <FormRecipeNutrition onInputChange={handleInputChange} formData={recipeData} />
          </div>
        </div>
        <div className={classes.recipeContent}>
          <FormIngredientsList currentIngredients={recipeData.ingredients} onIngredientsChange={handleIngredientsChange} />
          <FormInstructionsList instructions={recipeData.instructions} setInstructions={handleInstructionsChange} />
        </div>
        <FormButton type="submit" className="buttonBgGradient">Submit Recipe</FormButton>
      </form>
    </>
  );
}