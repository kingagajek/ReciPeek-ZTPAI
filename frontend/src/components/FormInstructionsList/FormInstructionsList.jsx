import React from 'react';
import classes from './FormInstructionsList.module.css';

function FormInstructionsList({ instructions, setInstructions }) {
  const addInstruction = () => {
    const newStep = { id: instructions.length + 1, text: "" };
    setInstructions([...instructions, newStep]);
  };

  const updateInstruction = (id, text) => {
    const updatedInstructions = instructions.map(step => {
      if (step.id === id) {
        return { ...step, text: text };
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
          <div key={instruction.id} className={classes.instructionItem}>
            <label>Step {index + 1}</label>
            <input
              type="text"
              placeholder={`Step ${instruction.id}`}
              value={instruction.text}
              onChange={(e) => updateInstruction(instruction.id, e.target.value)}
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
