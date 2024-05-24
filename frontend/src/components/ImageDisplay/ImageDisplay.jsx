import React from 'react';
import classes from './ImageDisplay.module.css';

const ImageDisplay = ({ src, alt }) => {
  const getImageSrc = (src) => {
    if (src) {
      return `data:image/jpeg;base64,${src}`;
    }
    return '';
  };

  return (
    <img src={getImageSrc(src)} alt={alt} className={classes.recipeImage} />
  );
};

export default ImageDisplay;