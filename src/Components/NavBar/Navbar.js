import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="nav">
        <h1 className="site-title">NoteFusion</h1>
        <div className="nav-items">
          <ul>
            <Link to ="/">Inicio</Link>
            <Link to ="/AboutUs">About Us</Link>
            {isAuthenticated ? (
              <Link to="/profile" id="profile">Perfil</Link>
            ) : (
              <>
            <Link to ="/login" id="login">Iniciar Sesión</Link>
            <Link to ="/Registrar">Registrarse</Link>
            </>
            )}
            <Link to= "/canvas">Canvas</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
