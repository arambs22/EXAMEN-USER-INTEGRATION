import React, { useState } from 'react';
import Modal from 'react-modal';
import './PrevDescription.css';

Modal.setAppElement('#root');

const PrevDescription = ({ descriptions }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const openModal = (description) => {
    setSelectedDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={{ overflowX: 'scroll', width: '80.3%', whiteSpace: 'nowrap' , padding: "15px"}}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '15px'}}>
        {descriptions?.map((des, idx) => (
          <div key={idx} className="pres" onClick={() => openModal(des)}>
            <p><strong>Descripción:</strong> {des.description}</p>
            <p><strong>Prescripción:</strong> {des.prescription}</p>
          </div>
        ))}
        <div style={{ flexShrink: 0, width: '0.1px' }}></div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Description Modal"
      >
        <h2>Descripción: {selectedDescription?.description}</h2>
        <p>Prescripción: {selectedDescription?.prescription}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
}; 

export default PrevDescription;