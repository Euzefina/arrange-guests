import React, { useState } from "react";
import ElementAdd from "./ElementAdd";

function DivGenerator() {
  const [numDivs, setNumDivs] = useState(0);
  const [divs, setDivs] = useState([]);

  const handleChange = (e) => {
    const value = Math.min(e.target.value, 15);
    setNumDivs(value);
  };

  const createDivs = () => {
    const newDivs = [];
    for (let i = 0; i < numDivs; i++) {
      newDivs.push({ id: i, names: [], number: i + 1 });
    }
    setDivs(newDivs);
  };

  const updateDiv = (number, name, isVegan) => {
    const updatedDivs = divs.map((div) =>
      div.number === number ? { ...div, names: [...div.names, { name, isVegan }] } : div
    );
    setDivs(updatedDivs);
  };

  const removeElement = (number, name) => {
    const updatedDivs = divs.map((div) =>
      div.number === number ? { ...div, names: div.names.filter((n) => n.name !== name) } : div
    );
    setDivs(updatedDivs);
  };

  const changeTableNumber = (oldNumber, newNumber, name) => {
    const updatedDivs = divs.map((div) => {
      if (div.number === oldNumber) {
        return { ...div, names: div.names.filter((n) => n.name !== name) };
      } else if (div.number === newNumber) {
        const guest = divs.find((d) => d.number === oldNumber).names.find((n) => n.name === name);
        return { ...div, names: [...div.names, guest] };
      }
      return div;
    });
    setDivs(updatedDivs);
  };

  return (
    <div>
      <label>Introdu numarul de mese: </label>
      <input
        type="number"
        value={numDivs}
        onChange={handleChange}
        placeholder="Introdu numarul de mese"
        min="1"
        max="15"
      />
      <button onClick={createDivs}>OK</button>
      <div className="div-container">
        {divs.map((div) => (
          <div key={div.id} className="box-table">
            <p className="title"><strong>Masa {div.number}</strong></p>
            {div.names.map((guest, idx) => (
              <div className="container-element" key={idx}>
                <div className="added-element">
                  <p className="name-element">{guest.name}</p>
                  {guest.isVegan && <span className="vegan-icon">🥗</span>}
                  <div className="option-element">
                    <div className="select-wrapper">
                      <select
                        value={div.number}
                        onChange={(e) => changeTableNumber(div.number, parseInt(e.target.value), guest.name)}
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
                <button className="remove-element" onClick={() => removeElement(div.number, guest.name)}>x</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      {divs.length > 0 && <ElementAdd updateDiv={updateDiv} numDivs={numDivs} />}
    </div>
  );
}

export default DivGenerator;
