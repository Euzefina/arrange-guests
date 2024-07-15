import React, { useState } from "react";

export default function StartModal({ updateDiv, numDivs, onClose }) { // Add numDivs prop
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  const handleNumberChange = (e) => {
    const value = Math.min(e.target.value, numDivs); // Ensure value does not exceed numDivs
    setNumber(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    updateDiv(number, name);
    onClose();
  };

  return (
    <div className="start-modal">
      <h4>Adauga un element</h4>
      <div className="items">
      <label>Numar masa</label>
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          min="1"
          max={numDivs} // Set max attribute based on numDivs
        />
      </div>
      <div className="items">
        <label>Nume</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Introdu numele"
        />
      </div>
      <div className="modal-buttons">
        <button onClick={handleSubmit}>Adauga</button>
        <button onClick={onClose}>Inchide</button>
      </div>
    </div>
  );
}