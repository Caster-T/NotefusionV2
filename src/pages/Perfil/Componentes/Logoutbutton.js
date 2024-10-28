import React, { useState } from "react";

const LogoutButton = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    const handleLogoutClick = () => {
      setShowConfirmation(true); 
    };
  
    const handleConfirmLogout = () => {
      
      alert("Has cerrado sesión.");
      setShowConfirmation(false); 
    };
  
    const handleCancelLogout = () => {
      setShowConfirmation(false); 
    };
  
    return (
      <div>
        {showConfirmation ? (
          <div>
            <p>¿Estás seguro?</p>
            <button onClick={handleConfirmLogout}>Sí</button>
            <button onClick={handleCancelLogout}>No</button>
          </div>
        ) : (
          <button onClick={handleLogoutClick}>Cerrar sesión</button>
        )}
      </div>
    );
  };
  
  export default LogoutButton;