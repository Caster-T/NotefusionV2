// Popup.js
import React, { useState } from 'react';
import './popup.css'; 

const Popup = ({ open, onClose, onAddCard }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ titulo, descripcion });
    setTitulo('');
    setDescripcion('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Nuevo proyecto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          
          />
          <button type="submit">Agregar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
