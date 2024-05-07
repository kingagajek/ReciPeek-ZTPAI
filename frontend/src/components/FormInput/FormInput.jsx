import React from 'react';

import classes from './FormInput.module.css';

const FormInput = ({ type, placeholder, name, value, onChange, required, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${classes.formInput} ${className}`}
    />
  );
}

export default FormInput;
