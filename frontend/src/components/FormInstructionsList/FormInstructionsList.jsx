import React, { useState } from 'react';
import classes from './FormInstructionsList.module.css';

function FormInstructionsList() {
  const [instructions, setInstructions] = useState([]);

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
        {instructions.map((instruction) => (
          <div key={instruction.id} className={classes.instructionItem}>
            <input
              type="text"
              placeholder={`Step ${instruction.id}`}
              value={instruction.text}
              onChange={(e) => updateInstruction(instruction.id, e.target.value)}
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