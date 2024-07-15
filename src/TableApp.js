import React, { useState } from "react";
import ElementAdd from "./ElementAdd";

function DivGenerator() {
  const [numDivs, setNumDivs] = useState(0);
  const [divs, setDivs] = useState([]);

  const handleChange = (e) => {
    const value = Math.min(e.target.value, 15); // Ensure value does not exceed 15
    setNumDivs(value);
  };

  const createDivs = () => {
    const newDivs = [];
    for (let i = 0; i < numDivs; i++) {
      newDivs.push({ id: i, names: [], number: i + 1 });
    }
    setDivs(newDivs);
  };

  const updateDiv = (number, name) => {
    const updatedDivs = divs.map((div) =>
      div.number === number ? { ...div, names: [...div.names, name] } : div
    );
    setDivs(updatedDivs);
  };

  const changeTableNumber = (oldNumber, newNumber, name) => {
    const updatedDivs = divs.map((div) => {
      if (div.number === oldNumber) {
        return { ...div, names: div.names.filter((n) => n !== name) };
      } else if (div.number === newNumber) {
        return { ...div, names: [...div.names, name] };
      }
      return div;
    });
    setDivs(updatedDivs);
  };

  return (
    <div>
      <input
        type="number"
        value={numDivs}
        onChange={handleChange}
        placeholder="Introdu numarul de mese"
        min="1"
        max="15" // Set max attribute to 15
      />
      <button onClick={createDivs}>Genereaza</button>
      <div className="div-container">
        {divs.map((div) => (
          <div key={div.id} className="box-table">
            <strong>Masa {div.number}</strong>
            {div.names.map((name, idx) => (
              <div className="added-element" key={idx}>
                <p className="name-element">{name}</p>
                <div className="option-element">
                  <div className="select-wrapper">
                    <select
                      value={div.number}
                      onChange={(e) => changeTableNumber(div.number, parseInt(e.target.value), name)}
                    >
                      {divs.map((d) => (
                        <option key={d.id} value={d.number}>
                          Masa {d.number}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {divs.length > 0 && <ElementAdd updateDiv={updateDiv} numDivs={numDivs} />} {/* Pass numDivs as a prop */}
    </div>
  );
}

export default DivGenerator;