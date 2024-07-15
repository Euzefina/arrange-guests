import React from "react";
import Modal from "./Modal";
import StartModal from "./StartModal";

export default function ElementAdd({ updateDiv, numDivs }) {  // Add numDivs prop
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="add-element">
      <h5>Adauga element</h5>
      <button type="button" onClick={handleOpen}>
        +
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <StartModal updateDiv={updateDiv} numDivs={numDivs} onClose={handleClose} /> {/* Pass numDivs as a prop */}
      </Modal>
    </div>
  );
}