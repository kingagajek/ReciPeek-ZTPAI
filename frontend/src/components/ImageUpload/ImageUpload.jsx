import React, { useState, useEffect } from 'react';
import classes from './ImageUpload.module.css';

const ImageUpload = ({ onImageChange, imagePreviewUrl }) => {
  const [preview, setPreview] = useState(imagePreviewUrl || null);

  useEffect(() => {
    if (imagePreviewUrl) {
      setPreview(imagePreviewUrl);
    }
  }, [imagePreviewUrl]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className={classes.imageUploadContainer}>
      {preview ? (
        <div className={classes.imagePreviewContainer}>
          <img src={preview} alt="Preview" className={classes.imagePreview} />
          <button
            type="button"
            className={classes.changeImageButton}
            onClick={() => document.getElementById('file-upload').click()}
          >
            Change image
          </button>
        </div>
      ) : (
        <label htmlFor="file-upload" className={classes.imageUploadLabel}>
          <div className={classes.imageUploadPlus}>+</div>
          <div className={classes.imageUploadText}>Upload image</div>
        </label>
      )}
      <input
        id="file-upload"
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className={classes.imageInput}
      />
    </div>
  );
};

export default ImageUpload;