import React from "react";
import { Link } from 'react-router-dom';  // Asegúrate de importar Link

export default function NavBar({ openPopup }) {
  return (
    <nav className="nav">
      <h1 className="site-title">NoteFusion</h1>
      <div className="nav-items">
        <ul>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/canvas">Canvas</Link></li>
          <li><button onClick={openPopup} id="login">Login</button></li>
        </ul>
      </div>
    </nav>
  );
}
