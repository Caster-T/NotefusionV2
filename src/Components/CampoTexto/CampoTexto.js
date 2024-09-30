import React from "react";

const CampoTexto = ({ label, type }) => {
  return (
    <div className="InputContainer">
      <label className="InputLabel">{label}</label>
      <input className="InputPassword" type={type} />
    </div>
  );
};

export default CampoTexto;
