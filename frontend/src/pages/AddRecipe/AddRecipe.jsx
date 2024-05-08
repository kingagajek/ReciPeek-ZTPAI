import React from 'react';

import classes from '../Recipe/Recipe.module.css';
import time from '../../assets/icons/time.svg';
import difficulty from '../../assets/icons/difficulty.svg';
import portion from '../../assets/icons/portion.svg';
import Header from '../../components/Header/Header';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import FormRecipeBasicInfo from '../../components/FormRecipeBasicInfo/FormRecipeBasicInfo';
import FormRecipeNutrition from '../../components/FormRecipeNutrition/FormRecipeNutrition';
import FormIngredientsList from '../../components/FormIngredientsList/FormIngredientsList';
import FormInstructionsList from '../../components/FormInstructionsList/FormInstructionsList';
import FormButton from '../../components/FormButton/FormButton';

export default function AddRecipe() {
  return (
    <>
      <Header />
      <form className={classes.mainContainer} method="post" encType="multipart/form-data">
        <div className={classes.mainInfo}>
        <ImageUpload />
          <div className={classes.mainInfoText}>
            <FormRecipeBasicInfo />
            <FormRecipeNutrition />
          </div>
        </div>

        <div className={classes.recipeContent}>
          <FormIngredientsList />
          <FormInstructionsList />
        </div>
        <FormButton type="submit" className="buttonBgGradient">Submit Recipe</FormButton>
      </form>
    </>
  );
}