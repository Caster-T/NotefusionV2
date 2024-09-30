import React from "react";
import "./Seccion.css";

const Seccion = ({ imagen, texto, invertido }) => {
  return (
    <div className="contenedorComponenteSeccion">
      <div className={`seccion ${invertido ? "seccion-invertida" : ""}`}>
        <div className="SeccionMarco">
          <div className="seccionImagen">
            <img src={imagen} alt="Sección visual" className="imagen" />
          </div>
        </div>
        <div className="seccionTexto">
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
};

export default Seccion;
