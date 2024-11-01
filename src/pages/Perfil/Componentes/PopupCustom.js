import React, { useState, useEffect } from 'react';
import './PopupCustom.css';

const Popup = ({ open, onClose, onSubmit, initialTitulo = '', initialNombre = '', initialDescripcion = '' }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [descripcion, setDescripcion] = useState(initialDescripcion);

  useEffect(() => {
    setNombre(initialNombre);
    setDescripcion(initialDescripcion);
  }, [initialNombre, initialDescripcion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ nombre, descripcion });
    }
    setNombre('');
    setDescripcion('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-buttonPopup" onClick={onClose}>&times;</button>
        <h2>{initialTitulo}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            maxLength={20}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            maxLength={200}
          />
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
