import './App.css';
import NavBar from './Navbar';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  return (
    <div className="App">
      <NavBar 
        openPopup={() => {
          setButtonPopup(true);
          setPopupContent("Aca va el login"); // Puedes modificar este texto dinámicamente
        }}/>

      <section className="contenedor">
        <div className="element1">
          <h3>About Us</h3>
          Somos unos estudiantes los cuales notamos la gran necesidad de crear una pagina amigable para organizar nuestras tareas, objetivos y metas. Para ello, mediante nuestro curso con <span>"Generacion T"</span> hemos decidido encargarnos de esa necesidad.
        </div>
        <div className="element2">
          <h3>¿Qué es <span className='pA'>NoteFusion</span>?</h3>
          <span className='pA'>NoteFusion</span> es una plataforma que permite a los usuarios gestionar sus proyectos y tareas mediante un enfoque visual y altamente personalizable. Combina la estructura de un roadmap dinámico, donde los usuarios pueden planificar y visualizar objetivos a largo plazo, con la funcionalidad de tableros al estilo Trello para organizar tareas diarias y proyectos de manera flexible.
        </div>
        <div className="element3">
          <ul id="listaAboutUs">
            <h3>Con <span className="pA">NoteFusion</span>, tu puedes:</h3>
            <li>
              Crear y personalizar roadmaps que muestren los hitos y fases clave de tu proyecto, ajustando el flujo de trabajo según tus necesidades.
            </li>
            <li>
              Organizar tareas en tableros visuales que se pueden dividir en fases, categorías o prioridades, y mover fácilmente las tareas entre las diferentes etapas del proyecto.
            </li>
            <li>
              Gestionar equipos y colaborar en tiempo real, asignando tareas, agregando descripciones, comentarios y compartiendo archivos de manera eficiente.
            </li>
            <li>
              Automatizar flujos de trabajo para optimizar la productividad, integrando herramientas externas y configurando reglas automáticas que te ahorran tiempo.
            </li>
          </ul>
        </div>
        <div className="element4">
        <img src={`${process.env.PUBLIC_URL}/img/imgPrueba.jpg`} alt="Descripción de la imagen" />
        </div>
        <div className="element5">
        <img src={`${process.env.PUBLIC_URL}/img/gifPrueba.gif`} alt="GIF animado" />
        </div>
      </section>

      <section className="bg-light d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{width: '22rem'}}>
          <h4 className="text-center mb-4">Registrarse</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Repite tu contraseña" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
          </form>
          <div className="login-link">
            ¿Ya tienes una cuenta? <button className="btn btn-link" onClick={() => setButtonPopup(true)}>Iniciar sesión</button>
          </div>
        </div>
      </section>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${buttonPopup ? 'show' : ''}`} id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden={!buttonPopup} style={{ display: buttonPopup ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">{popupContent}</h5>
              <button type="button" className="btn-close" onClick={() => setButtonPopup(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
