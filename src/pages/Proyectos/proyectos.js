import React, { useState } from 'react';
import Tarjetas from './components/Tarjetas';
import NavBarProy from './components/NavBarProy'; // Asegúrate de que la ruta sea correcta
import Footer from '../../Components/Footer/Footer';
import Popup from './components/Popup';
import "./proyecto.css"

const Proyectos = () => {
  const [tarjetas, setTarjetas] = useState([
    { titulo: "Proyecto por Defecto", descripcion: "Descripción del proyecto por defecto" }
  ]);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCard = (nuevaTarjeta) => {
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };

  const handleDeleteCards = () => {
    // Lógica para eliminar tarjetas seleccionadas
  };

  const filteredTarjetas = tarjetas.filter((tarjeta) =>
    tarjeta.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBarProy 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onAddCard={() => setIsPopupOpen(true)} 
        onDeleteCards={handleDeleteCards} 
      />
      
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
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Proyectos;
