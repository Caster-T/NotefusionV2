import React, { useState } from 'react';
import NavBar from './componentes/Navbar';
import LoginModal from './componentes/LoginModal';
import './estilos/App.css';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <NavBar 
        openPopup={() => setButtonPopup(true)} 
      />

      <section className="contenedor">
        {"hola"}
        <div className="element1">
          <h3>About Us</h3>
          {/* Contenido aquí */}
        </div>
      </section>

      <LoginModal 
        buttonPopup={buttonPopup} 
        setButtonPopup={setButtonPopup} 
      />
    </div>
  );
}

export default App;
