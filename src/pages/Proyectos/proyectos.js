import React, { useEffect, useState } from 'react';
import Tarjetas from './components/Tarjetas';
import NavBarProy from './components/NavBarProy';
import Footer from '../../Components/Footer/Footer';
import Popup from './components/Popup';
import { useNavigate } from 'react-router-dom';
import "./proyecto.css";

const Proyectos = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editCardIndex, setEditCardIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar proyectos desde localStorage
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setTarjetas(storedProjects);
  }, []);

  const handleAddCard = (nuevaTarjeta) => {
    const updatedTarjetas = [...tarjetas, { ...nuevaTarjeta, selected: false }];
    setTarjetas(updatedTarjetas);
    localStorage.setItem('projects', JSON.stringify(updatedTarjetas)); // Guardar en localStorage
    setIsPopupOpen(false); // Cerrar el popup después de añadir
  };

  const handleContinue = (titulo) => {
    navigate(`/canvas/${titulo}`); // Redirigir al canvas con el título
  };

  const filteredTarjetas = tarjetas.filter((tarjeta) =>
    tarjeta.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='containerProyect'>
      <NavBarProy 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onAddCard={() => {
          setEditCardIndex(null);
          setIsPopupOpen(true); 
        }}
      />
      <div className='main'>
        <Popup
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onAddCard={handleAddCard}
        />
        <div className="listaTarjetas">
          {filteredTarjetas.map((tarjeta, index) => (
            <Tarjetas
              key={index}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              selected={tarjeta.selected}
              onClick={() => {}}
              onEdit={() => {}}
              onContinue={() => handleContinue(tarjeta.titulo)} // Pasar la función aquí
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proyectos;
