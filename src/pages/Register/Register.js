import React from 'react';
import Footer from "../../Components/Footer/Footer";
import BotonFlecha from "../../Components/Buttons/ButtonArrow/ButtonArrow";
import { useNavigate } from "react-router-dom";

function Registrar() {
  const navigate = useNavigate(); 

  const handleNavigation = () => {
    navigate("/"); 
  };
  return (
    <>
      <div>
        <h1>
        <BotonFlecha onClick={handleNavigation} />{" "}Bienvenido a Registrar</h1>
        <p>Aquí puedes gestionar tus proyectos visualmente.</p>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Registrar;
