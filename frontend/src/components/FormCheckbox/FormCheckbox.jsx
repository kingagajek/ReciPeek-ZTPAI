import React from 'react';
import classes from './FormCheckbox.module.css';

const FormCheckbox = ({ id, name, label, checked, onChange }) => {
  return (
    <div className={classes.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className={classes.checkbox}
      />
      <label htmlFor={id} className={classes.checkboxLabel}>{label}</label>
    </div>
  );
}

export default FormCheckbox;