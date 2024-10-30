// NavBarProy.js
import React, { useState } from 'react';
import "./navBarProy.css";
import PopupBorrar from './PopupBorrar';

const NavBarProy = ({ searchQuery, setSearchQuery, onAddCard, onDeleteCards }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(false);
    onDeleteCards();
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <div className="navbar-proy">
      <div className="site-title">Mis Proyectos</div>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="add-button" onClick={onAddCard}>Agregar Proyecto</button>
        <button className="delete-button" onClick={handleDeleteClick}>Eliminar Seleccionados</button>
      </div>
      {showPopup && (
        <PopupBorrar onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
    </div>
  );
};

export default NavBarProy;
