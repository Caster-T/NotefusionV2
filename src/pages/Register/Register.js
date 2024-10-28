/*import React from "react";
import Footer from "../../Components/Footer/Footer";
import BotonFlecha from "../../Components/Buttons/ButtonArrow/ButtonArrow";
import CampoTexto from "../../Components/CampoTexto/CampoTexto";
import ButtonSubmit from "../../Components/Buttons/ButtonSubmit/ButtonSubmit";
import Header from "../Home/Header";
import ImageAText from "../../Components/img-disposal/ImageAText";
import imageLogin from "../../assets/images/LoginPicture.jpeg";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login-container-register">
        <div className="grid-container-register">
          <div className="image-register">
            <BotonFlecha
              onClick={handleNavigation}
              className="BotonFlecha-register"
            />
            <ImageAText img={imageLogin} />
          </div>
          <div className="text-content-register">
            <Header title={"Registrate"} />
            <form onSubmit={handleLogin}>
              <CampoTexto label="Nombre" type="text" />
              <CampoTexto label="Gmail" type="mail" />
              <CampoTexto label="Contraseña" type="password" />
              <ButtonSubmit text="Continuar" />
            </form>
          </div>
        </div>
      </div>
      <footer className="footer-register">
        <Footer />
      </footer>
    </>
  );
}

export default Register;
*/