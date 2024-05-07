import React from 'react';
import classes from './NutritionInfo.module.css';

const NutritionInfo = ({ nutritionData }) => {
  const nutritionElements = nutritionData ? Object.entries(nutritionData).map(([key, value]) => (
    <div key={key} className={classes.nutritionItem}>
      <span className={classes.nutritionLabel}>{key}</span>
      <span className={classes.nutritionValue}>{value}</span>
    </div>
  )) : <div>No nutrition data available.</div>;

  return (
    <div className={classes.nutritionInfo}>
      <h3>Nutrition:</h3>
      <div className={classes.nutritionDetails}>
        {nutritionElements}
      </div>
    </div>
  );
};

export default NutritionInfo;
