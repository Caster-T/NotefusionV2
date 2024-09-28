import React from "react";
import "../estilosApp/footer.css";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <div className="ContenedorFlex">
      {location.pathname !== "/" && (
        <Link to="/">
          <button className="HijoFlex">Inicio</button>
        </Link>
      )}
      {location.pathname !== "/AboutUs" && (
      <Link to="/AboutUs">
      <button className="HijoFlex">About Us</button>
      </Link>
      )}
      {location.pathname !== "/TerminosYCondiciones" && (
      <Link to="/TerminosYCondiciones">
      <button className="HijoFlex">Terminos y condiciones</button>
    </Link>
      )}

      <div className="HijoFlex">Copyright © 2024</div>
    </div>
  );
};

export default Footer;
