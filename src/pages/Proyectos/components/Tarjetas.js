import React from 'react';
import "./tarjetas.css";

const Tarjetas = ({ titulo, descripcion, selected, onClick, onEdit }) => {
  return (
    <div 
      className={`ContainerTarjetas ${selected ? 'selected' : ''}`} 
      onClick={onClick} 
    >
      <div className="TituloTarjetas">
        <h1>{titulo}</h1>
      </div>
      <div className="DescripcionTarjetas">
        <p>{descripcion}</p>
      </div>
      <button className='editar-button' onClick={(e) => {e.stopPropagation(); onEdit();}}>Editar</button>
      <button className="delete-button" onClick={(e) => e.stopPropagation() }>Continuar</button>
    </div>
  );
};

export default Tarjetas;
