import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Perfil.css";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/Navbar";
import Popup from "./Componentes/PopupCustom";
import placeholderPFP from "./Componentes/placeholderPFP.png";
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '../SuccesPage/Context/AuthContext';

const supabase = createClient(
  "https://pupykdosdzzurbezcovq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1cHlrZG9zZHp6dXJiZXpjb3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNTA0MDUsImV4cCI6MjA0NTYyNjQwNX0.UdaegPhGjaxAJk34CbdHMqDo5UPHAEKrjkayp3o7mLY"
);

const Perfil = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Usuario");
  const [userDescription, setUserDescription] = useState("Hola, soy nuevo aca");
  const [profileImage, setProfileImage] = useState(placeholderPFP);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedDescription = localStorage.getItem("userDescription");
    const storedImage = localStorage.getItem("profileImage");

    if (storedName) setUserName(storedName);
    if (storedDescription) setUserDescription(storedDescription);
    if (storedImage) setProfileImage(storedImage);
  }, []);

  const handleProfileUpdate = (newName, newDescription) => {
    setUserName(newName);
    setUserDescription(newDescription);
    setIsPopupOpen(false);

    localStorage.setItem("userName", newName);
    localStorage.setItem("userDescription", newDescription);
    localStorage.setItem("profileImage", profileImage);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
    localStorage.removeItem("userName");
    localStorage.removeItem("userDescription");
    localStorage.removeItem("profileImage");
    navigate('/');
  };

  return (
    <div className="containerProyect">
      <NavBar />
      <div className="main">
        <div className="perfil-page">
          <div className="perfil-container">
            <div className="perfil-content">
              <div className="profile-picture-container">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-picture"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="upload-button"></label>
              </div>
              <div className="profile-info">
                <h2 className="user-name">{userName}</h2>
                <p className="user-description">{userDescription}</p>
                <button
                  className="edit-description"
                  onClick={() => setIsPopupOpen(true)}
                >
                  Modificar Perfil
                </button>
                <button className="logout-button" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Popup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={({ nombre, descripcion }) => handleProfileUpdate(nombre, descripcion)}
        initialTitulo="Editar Perfil"
        initialNombre={userName}
        initialDescripcion={userDescription}
      />
    </div>
  );
};

export default Perfil;
