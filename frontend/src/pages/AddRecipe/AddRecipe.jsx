import React, { useState } from 'react';
import axios from 'axios';

import classes from '../Recipe/Recipe.module.css';
import Header from '../../components/Header/Header';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import FormRecipeBasicInfo from '../../components/FormRecipeBasicInfo/FormRecipeBasicInfo';
import FormRecipeNutrition from '../../components/FormRecipeNutrition/FormRecipeNutrition';
import FormIngredientsList from '../../components/FormIngredientsList/FormIngredientsList';
import FormInstructionsList from '../../components/FormInstructionsList/FormInstructionsList';
import FormButton from '../../components/FormButton/FormButton';

export default function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    cookTime: "",
    level: "",
    servingSize: "",
    nutrition: {},
    ingredients: [],
    instructions: []
  });

  const handleInputChange = (field, value) => {
    setRecipeData({ ...recipeData, [field]: value });
  };

  const handleIngredientsChange = (ingredients) => {
    setRecipeData({ ...recipeData, ingredients });
  };

  const handleInstructionsChange = (instructions) => {
    setRecipeData({ ...recipeData, instructions });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/recipes', recipeData);
      console.log("Recipe submitted successfully", response.data);
    } catch (error) {
      console.error('Failed to submit recipe', error);
    }
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
          <FormIngredientsList onIngredientsChange={handleIngredientsChange} />
          <FormInstructionsList instructions={recipeData.instructions} setInstructions={handleInstructionsChange} />
        </div>
        <FormButton type="submit" className="buttonBgGradient">Submit Recipe</FormButton>
      </form>
    </>
  );
}
