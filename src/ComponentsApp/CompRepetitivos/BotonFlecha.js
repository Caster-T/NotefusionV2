import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../estilosApp/BotonFlecha.css";

const BotonFlecha = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button className="circle-button" onClick={handleClick}>
      <i className="fas fa-arrow-left"></i>
    </button>
  );
};

export default BotonFlecha;