import React, { useState } from 'react';
import Tarjetas from './components/Tarjetas';
import NavBarProy from './components/NavBarProy';
import Footer from '../../Components/Footer/Footer';
import Popup from './components/Popup';
import "./proyecto.css";

const Proyectos = () => {
  const [tarjetas, setTarjetas] = useState([
    { titulo: "Proyecto por Defecto", descripcion: "Descripción del proyecto por defecto", selected: false, color: '#aaaaa' } // Color por defecto
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editCardIndex, setEditCardIndex] = useState(null); // Índice de la tarjeta en edición
  const [color, setColor] = useState('#ffffff'); // Estado para manejar el color

  const handleAddCard = (nuevaTarjeta) => {
    if (editCardIndex !== null) {
      // Si editamos una tarjeta existente
      const updatedTarjetas = tarjetas.map((tarjeta, index) =>
        index === editCardIndex ? { ...nuevaTarjeta, selected: tarjeta.selected, color } : tarjeta // Usar el color seleccionado
      );
      setTarjetas(updatedTarjetas);
      setEditCardIndex(null); // Resetea el índice de edición
    } else {
      // Agregar una nueva tarjeta
      setTarjetas([...tarjetas, { ...nuevaTarjeta, selected: false, color }]); // Usar el color seleccionado
    }
  };

  const handleDeleteCards = () => {
    setTarjetas(tarjetas.filter((tarjeta) => !tarjeta.selected));
  };

  const toggleSelectCard = (index) => {
    setTarjetas(tarjetas.map((tarjeta, i) =>
      i === index ? { ...tarjeta, selected: !tarjeta.selected } : tarjeta
    ));
  };

  const handleEditCard = (index) => {
    setEditCardIndex(index);
    setColor(tarjetas[index].color); // Al editar, se establece el color actual de la tarjeta
    setIsPopupOpen(true);
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
          setColor('#ffffff'); // Reiniciar color al agregar nueva tarjeta
          setIsPopupOpen(true); 
        }}
        onDeleteCards={handleDeleteCards}
      />
      <div className='main'>
        <Popup
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onAddCard={handleAddCard}
          initialTitulo={editCardIndex !== null && tarjetas[editCardIndex] ? tarjetas[editCardIndex].titulo : ''}
          initialDescripcion={editCardIndex !== null && tarjetas[editCardIndex] ? tarjetas[editCardIndex].descripcion : ''}
          color={color} // Pasar el color seleccionado
          setColor={setColor} // Pasar la función para actualizar el color
        />

        <div className="listaTarjetas">
          {filteredTarjetas.map((tarjeta, index) => (
            <Tarjetas
              key={index}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              selected={tarjeta.selected}
              onClick={() => toggleSelectCard(index)}
              onEdit={() => handleEditCard(index)}
              color={tarjeta.color} // Usar el color de cada tarjeta
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
