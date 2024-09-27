import React from "react";
import "../Home/HomeCss/Home.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return <div className="ContenedorFlex">
    <Link to ="/"><button className="HijoFlex" id="FooterInicio">Inicio</button></Link>
    <Link to ="/TerminosYCondiciones"><button className="HijoFlex">Terminos</button></Link> 
    <div className="HijoFlex">Copyright © 2024</div>
  </div>
};

export default Footer;