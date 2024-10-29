import React, { useState } from "react";
import "./Perfil.css";
import NavBar from "../../Components/NavBar/Navbar";
import LogoutButton from "./Componentes/Logoutbutton";
import placeholderPFP from "../../assets/images/placeholdeer.png";

const Perfil = () => {
  const handleJobSelect = (job) => {
    alert(`Has seleccionado: ${job}`);
  };

  const [userName, setUserName] = useState("Nombre de usuario");
  const [profileImage, setProfileImage] = useState(placeholderPFP.png);
  const [userDescription, setUserDescription] = useState(
    "Descripcion del usuario"
  );

  const handleDescriptionChange = () => {
    const newDescription = prompt(
      "Ingresa una nueva descripción:",
      userDescription
    ); // Prompt para ingresar nueva descripción
    if (newDescription !== null && newDescription.trim() !== "") {
      setUserDescription(newDescription); // Actualiza la descripción si es válida
    }
  };

  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <div className="grid-container2">
        <div className="profile-container">
          <h1>Perfil de Usuario</h1>
          <div className="profile-info">
            <img src={profileImage} />
            <h2>{userName}</h2>
            <p>Descripción: {userDescription}</p>
            <button onClick={handleDescriptionChange}>
              Modificar Descripción
            </button>
          </div>
          <LogoutButton>
            <button>Cerrar sesion?</button>
          </LogoutButton>
        </div>

        <div className="job-section">
          <h2>Trabajos</h2>
          <ul className="jobs">
            <li onClick={() => handleJobSelect("Trabajo 1")}>Trabajo 1</li>
            <li onClick={() => handleJobSelect("Trabajo 2")}>Trabajo 2</li>
            <li onClick={() => handleJobSelect("Trabajo 3")}>Trabajo 3</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
