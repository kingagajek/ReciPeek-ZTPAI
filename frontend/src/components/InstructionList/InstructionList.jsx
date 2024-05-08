import React from 'react';
import classes from './InstructionList.module.css';

const InstructionList = ({ instructions }) => {
  return (
    <div className={classes.instructionsContainer}>
      <h2>Instructions</h2>
      <ol className={classes.instructionList}>
        {instructions.map((instruction, index) => (
          <li key={index} className={classes.instructionItem}>
            {instruction.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionList;
