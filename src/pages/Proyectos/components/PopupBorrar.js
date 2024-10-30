// PopupBorrar.js
import React from 'react';
import "./PopupBorrar.css";

const PopupBorrar = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onCancel}>✕</button>
        <h3>¿Estás seguro de que deseas eliminar los proyectos seleccionados?</h3>
        <button className="confirm-button-large" onClick={onConfirm}>Borrar</button>
      </div>
    </div>
  );
};

export default PopupBorrar;
