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
  const [color, setColor] = useState('#ffffff'); // Estado para manejar el color
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar proyectos desde localStorage
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setTarjetas(storedProjects);
  }, []);

  const handleContinue = (titulo) => {
    navigate(`/canvas/${titulo}`); // Redirigir al canvas con el título
  };

  const handleAddCard = (nuevaTarjeta) => {
    let updatedTarjetas;
  
    if (editCardIndex !== null) {
      // Si editamos una tarjeta existente
      updatedTarjetas = tarjetas.map((tarjeta, index) =>
        index === editCardIndex ? { ...nuevaTarjeta, selected: tarjeta.selected, color } : tarjeta
      );
      setEditCardIndex(null); // Resetea el índice de edición
    } else {
      // Agregar una nueva tarjeta
      updatedTarjetas = [...tarjetas, { ...nuevaTarjeta, selected: false, color }]; // Usar el color seleccionado
    }
  
    setTarjetas(updatedTarjetas);
    localStorage.setItem('projects', JSON.stringify(updatedTarjetas)); // Guardar en localStorage
    setIsPopupOpen(false); // Cerrar el popup después de añadir
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
              onContinue={() => handleContinue(tarjeta.titulo)} // Pasar la función aquí
              onClick={() => toggleSelectCard(index)}
              onEdit={() => handleEditCard(index)}
              color={tarjeta.color} // Usar el color de cada tarjeta
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Proyectos;