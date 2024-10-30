import React, { useState, useEffect } from 'react';
import './popup.css';

const Popup = ({ open, onClose, onAddCard, initialTitulo = '', initialDescripcion = '', color, setColor }) => {
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
    setColor('#ffffff'); // Reiniciar color al cerrar el popup
    onClose();
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-buttonPopup" onClick={onClose}>&times;</button>
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

          {/* Sección para seleccionar color */}
          <div className="color-selector">
            <h3>Selecciona un color:</h3>
            <div className="color-options">
              {['#fff', '#fdffb6 ', '#caffbf ', '#9bf6ff ','#a0c4ff ' ].map((pastelColor) => (
                <div
                  key={pastelColor}
                  className="color-circle"
                  style={{ backgroundColor: pastelColor }}
                  onClick={() => setColor(pastelColor)} // Actualizar color al hacer clic
                />
              ))}
            </div>
          </div>

          <button type="submit">{initialTitulo ? 'Guardar Cambios' : 'Agregar'}</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
