import React from 'react';
import Footer from "./CompRepetitivos/Footer";
import BotonFlecha from "./CompRepetitivos/BotonFlecha";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavigation = () => {
    navigate("/"); // Reemplaza '/ruta' con la ruta a la que deseas navegar
  };
  return (
    <div>
      <h1>
      <BotonFlecha onClick={handleNavigation} />{" "}Bienvenido a Login</h1>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    
  );
}

export default Login;
