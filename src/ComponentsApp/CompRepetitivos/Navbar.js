import React from "react";
import '../../estilosApp/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1 className="site-title">NoteFusion</h1>
        <div className="nav-items">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/login" id="login">Iniciar Sesión</a></li>
            <li><a href="/register">Registrarse</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
