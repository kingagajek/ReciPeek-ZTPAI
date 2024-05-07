import React from 'react';
import classes from './ImageDisplay.module.css';

const ImageDisplay = ({ src, alt }) => {
  return (
    <div className={classes.imageContainer}>
      <img src={src} alt={alt} className={classes.recipeImage} />
    </div>
  );
};

export default ImageDisplay;
