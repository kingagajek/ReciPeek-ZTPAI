import React from 'react';

import classes from './FormInput.module.css';

const FormInput = ({ type, placeholder, name, required, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className={`${classes.formInput} ${className}`}
    />
  );
}

export default FormInput;
