import React from 'react';
import classes from './FormInstructionsList.module.css';

function FormInstructionsList({ instructions, setInstructions }) {
  const addInstruction = () => {
    const newStep = { stepNumber: instructions.length + 1, description: "" };
    setInstructions([...instructions, newStep]);
  };

  const updateInstruction = (stepNumber, description) => {
    const updatedInstructions = instructions.map(step => {
      if (step.stepNumber === stepNumber) {
        return { ...step, description: description };
      }
      return step;
    });
    setInstructions(updatedInstructions);
  };

  return (
    <div className={classes.instructions}>
      <h2>Instructions</h2>
      <div id="instructions-list">
        {instructions.map((instruction, index) => (
          <div key={instruction.stepNumber} className={classes.instructionItem}>
            <label>Step {index + 1}</label>
            <input
              type="text"
              placeholder={`Step ${instruction.stepNumber}`}
              value={instruction.description}
              onChange={(e) => updateInstruction(instruction.stepNumber, e.target.value)}
              className={classes.instructionInput}
            />
          </div>
        ))}
      </div>
      <button type="button" onClick={addInstruction} className={classes.addInstructionBtn}>
        Add Step
      </button>
    </div>
  );
}

export default FormInstructionsList;
