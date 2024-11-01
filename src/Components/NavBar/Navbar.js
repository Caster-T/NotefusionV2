// NavBar.js
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from '../../pages/SuccesPage/Context/AuthContext'; // Importar el contexto

const NavBar = () => {
  const { isAuthenticated } = useAuth(); // Usar el contexto aquí

  return (
    <nav className="nav">
      <h1 className="site-title">NoteFusion</h1>
      <div className="nav-items">
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/AboutUs">About Us</Link>
          {isAuthenticated ? (
            <>
              <Link to="/perfil">Perfil</Link>
              <Link to="/proyectos">Proyectos</Link>
            </>
          ) : (
            <Link to="/login" id="login">Iniciar Sesión/Registrarse</Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
