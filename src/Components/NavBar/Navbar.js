import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1 className="site-title">NoteFusion</h1>
        <div className="nav-items">
          <ul>
            <Link to ="/">Inicio</Link>
            <Link to ="/AboutUs">About Us</Link>
            <Link to ="/login" id="login">Iniciar Sesión</Link>
            <Link to ="/Registrar">Registrarse</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
