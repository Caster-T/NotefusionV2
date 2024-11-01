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
      onSubmit({ nombre, descripcion }); // Pasar nombre y descripción
    }
    setNombre(''); // Limpiar nombre
    setDescripcion(''); // Limpiar descripción
    onClose(); // Cerrar el popup
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
            maxLength={20} // Limite de caracteres para el nombre
          />
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            maxLength={200} // Limite de caracteres para la descripción
          />
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
