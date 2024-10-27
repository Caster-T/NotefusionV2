// NavBarProy.js
import React from 'react';
import "./navBarProy.css"
const NavBarProy = ({ searchQuery, setSearchQuery, onAddCard, onDeleteCards }) => {
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
        <button className="delete-button" onClick={onDeleteCards}>Eliminar Seleccionados</button>
      </div>
    </div>
  );
};

export default NavBarProy;
