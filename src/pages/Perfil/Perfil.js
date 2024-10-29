import React, { useState } from "react";
import "./Perfil.css";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/Navbar";
import LogoutButton from "./Componentes/Logoutbutton";
import placeholderPFP from "./Componentes/placeholderPFP.png";

const Perfil = () => {
  const handleJobSelect = (job) => {
    alert(`Has seleccionado: ${job}`);
  };

  const [userName, setUserName] = useState("Nombre");
  const [userDescription, setUserDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  );

  const handleDescriptionChange = () => {
    const newDescription = prompt(
      "Ingresa una nueva descripción:",
      userDescription
    );
    if (newDescription !== null && newDescription.trim() !== "") {
      setUserDescription(newDescription);
    }
  };

  return (
    <div className="containerProyect">
      <div>
        <NavBar />
      </div>

      <div className="main">
        <div className="perfil-page">
          <div className="perfil-container">
            <div className="perfil-content">
              <div className="profile-picture-container">
                <img
                  src={placeholderPFP}
                  alt="Profile"
                  className="profile-picture"
                />
              </div>
              <div className="profile-info">
                <h2 className="user-name">{userName}</h2>
                <p className="user-description">{userDescription}</p>
                <button
                  className="edit-description"
                  onClick={handleDescriptionChange}
                >
                  Modificar Descripción
                </button>
              </div>
              <LogoutButton>
                <button className="logout-button">Cerrar Sesion</button>
              </LogoutButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Perfil;
