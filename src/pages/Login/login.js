import React from 'react';
import Footer from "../../Components/Footer/Footer";
import BotonFlecha from "../../Components/Buttons/ButtonArrow/ButtonArrow";
import CampoTexto from "../../Components/CampoTexto/CampoTexto"; 
import ButtonSubmit from "../../Components/Buttons/ButtonSubmit/ButtonSubmit"; 
import Header from '../Home/Header';
import ImageAText from "../../Components/img-disposal/ImageAText"
import imageLogin from "../../assets/images/LoginPicture.jpeg" 
import "./login.css"


import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 

  const handleNavigation = () => {
    navigate("/"); 
  };

  const handleLogin = (event) => {
    event.preventDefault();

  };

  return (
    <div className="login-container">   
        <BotonFlecha onClick={handleNavigation} /> 
        <div className="grid-container">
          <div className="image">
            <ImageAText img={imageLogin}/>
          </div>
        <div className="text-content">
          <Header title={"Iniciar Sesión"}/>
          <form onSubmit={handleLogin}>
          <CampoTexto label="Nombre" type="text" />
          <CampoTexto label="Contraseña" type="password" />
          <ButtonSubmit text="Continuar" />
          </form>
        </div>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
