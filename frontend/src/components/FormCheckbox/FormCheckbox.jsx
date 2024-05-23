import React from 'react';
import classes from './FormCheckbox.module.css';

const FormCheckbox = ({ id, name, label, checked, onChange, onBlur, error }) => {
  return (
    <div className={classes.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        className={classes.checkbox}
      />
      <label htmlFor={id} className={classes.checkboxLabel}>{label}</label>
      {error && <div className={classes.errorText}>{error}</div>}
    </div>
  );
}

export default FormCheckbox;
