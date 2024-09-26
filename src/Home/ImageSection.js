import React from 'react';
import myImage from '../assets/imagen1.webp'; // Asegúrate de que la ruta sea correcta

const ImageSection = () => {
  return (
    <div>
      <img src={myImage} alt="Descripción de la imagen" style={{ width: 'auto', height: 'auto' }} />
    </div>
  );
};

export default ImageSection;
