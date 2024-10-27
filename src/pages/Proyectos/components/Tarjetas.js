import React from 'react';
import "./tarjetas.css"
const Tarjetas = ({ titulo, descripcion, onDelete }) => {
  return (
    <div className="ContainerTarjetas">
      <div className="TituloTarjetas">
        <h1>{titulo}</h1>
      </div>
      <div className="DescripcionTarjetas">
        <p>{descripcion}</p>
      </div>
      <button onClick={onDelete} className="delete-button">Eliminar</button>
    </div>
  );
};

export default Tarjetas;
