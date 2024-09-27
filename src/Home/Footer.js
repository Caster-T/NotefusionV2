import React from "react";
import "../Home/HomeCss/Home.css";

const Footer = () => {
  return (
    <div className="ContenedorFlex">
      <p className="HijoFlex" id="FooterInicio">
        Inicio
      </p>{" "}
      {/*con js borrar en inicio */}
      <p className="HijoFlex">Política de privacidad</p>
      <p className="HijoFlex">Terminos</p>
      <div className="HijoFlex">Copyright © 2024</div>
    </div>
  );
};

export default Footer;
