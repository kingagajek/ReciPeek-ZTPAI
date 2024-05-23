import React from 'react';
import classes from './FormInput.module.css';

const FormInput = ({ type, placeholder, name, value, onChange, onBlur, required, className, error }) => {
  return (
    <div className={classes.formInputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`${classes.formInput} ${className} ${error ? classes.invalidInput : ''}`}
      />
      {error && <div className={classes.errorText}>{error}</div>}
    </div>
  );
}

export default FormInput;
