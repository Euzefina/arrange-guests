import React, { useState } from "react";

export default function StartModal({ updateDiv, numDivs, onClose }) {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");
  const [isVegan, setIsVegan] = useState(false);

  const handleNumberChange = (e) => {
    const value = Math.min(e.target.value, numDivs);
    setNumber(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleVeganChange = (e) => {
    setIsVegan(e.target.checked);
  };

  const handleSubmit = () => {
    updateDiv(number, name, isVegan);
    onClose();
  };

  return (
    <div className="start-modal">
      <h4>Adauga un invitat</h4>
      <div className="items">
        <label>Numar masa</label>
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          min="1"
          max={numDivs}
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
      <div className="items">
        <label>
          Este vegan
        </label>
        <input
            type="checkbox"
            checked={isVegan}
            onChange={handleVeganChange}
          />
      </div>
      <div className="modal-buttons">
        <button onClick={handleSubmit}>Adauga</button>
        <button onClick={onClose}>Inchide</button>
      </div>
    </div>
  );
}
