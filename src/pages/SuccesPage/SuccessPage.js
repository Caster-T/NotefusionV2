// SuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import "./SuccessPage.css";

function SuccessPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoHome = () => {
    login(); // Cambia el estado a autenticado
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Has iniciado sesión con éxito</h1>
        <button className="success-button" onClick={handleGoHome}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
