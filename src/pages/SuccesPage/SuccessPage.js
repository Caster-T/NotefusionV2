// SuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../Logout/Logout'; // Importa LogoutButton
import "./SuccessPage.css";

function SuccessPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Has iniciado sesión con éxito</h1>
        <button className="success-button" onClick={handleGoHome}>
          Volver a la página principal
        </button>
        <LogoutButton /> {/* Botón para cerrar sesión */}
      </div>
    </div>
  );
}

export default SuccessPage;
