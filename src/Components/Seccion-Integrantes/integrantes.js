import React from "react";
import "./integrantes.css";

const SeccionIntegrantes = ({ nombre }) => {
return (
    <div className="seccionIntegrantes">
        <h3>{nombre}</h3>
    </div>
);
};

export default SeccionIntegrantes;