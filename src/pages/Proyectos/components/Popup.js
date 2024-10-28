import React, { useState, useEffect } from 'react';
import './popup.css';

const Popup = ({ open, onClose, onAddCard, initialTitulo = '', initialDescripcion = '' }) => {
  const [titulo, setTitulo] = useState(initialTitulo);
  const [descripcion, setDescripcion] = useState(initialDescripcion);

  useEffect(() => {
    setTitulo(initialTitulo);
    setDescripcion(initialDescripcion);
  }, [initialTitulo, initialDescripcion]);

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
        <h2>{initialTitulo ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h2>
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
          <button type="submit">{initialTitulo ? 'Guardar Cambios' : 'Agregar'}</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
