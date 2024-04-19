import React from 'react';

import classes from './FormButton.module.css';

const FormButton = ({ children, onClick, type = 'button', className }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default FormButton;
