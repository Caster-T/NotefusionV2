import React, { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = ({ label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="InputContainer">
      <label className="InputLabel">{label}</label>
      <div className="PasswordContainer">
        <input
          className="InputField"
          type={showPassword ? "text" : type} // Cambia entre 'password' y 'text'
        />
        {type === "password" && (
          <button
            type="button"
            className="TogglePasswordButton"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️‍🗨️" : "🙈"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CampoTexto;