import React from "react";
import "../Home/HomeCss/Seccion.css";

const Seccion = ({ imagen, texto, invertido }) => {
  return (
    <div className="contenedorSeccion">
      <div className={`seccion ${invertido ? "seccion-invertida" : ""}`}>
        <div className="seccion-imagen">
          <img src={imagen} alt="Sección visual" className="imagen" />
        </div>
        <div className="seccion-texto">
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
};

export default Seccion;
