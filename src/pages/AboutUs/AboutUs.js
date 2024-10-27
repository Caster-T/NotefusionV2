import React from 'react';
import Footer from "../../Components/Footer/Footer";
import NavBar from '../../Components/NavBar/Navbar';
import SeccionIntegrantes from "../../Components/Seccion-Integrantes/integrantes";
import "./AboutUs.css"

function Canvas() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
    <div className='containerAboutUs'>
      <div className='containerQS'>
        <h1>¿Quiénes somos?</h1>
        <hr></hr>
        <p>
          Hola, somos un grupo de estudiantes que notamos lo difícil que es organizar nuestras tareas y metas. 
          Muchas veces, nos sentimos abrumados con la carga de trabajo y pensamos que sería útil tener una herramienta que nos ayude.
          Así que, en nuestro curso con Generación T, decidimos crear una página web sencilla y fácil de usar. 
          La idea es que cada uno pueda organizar sus tareas, establecer objetivos y hacer seguimiento de su progreso. 
          También queremos incluir opciones para colaborar y compartir recursos con otros.
          Nuestro objetivo es facilitar un poco la vida estudiantil y ayudar a que todos podamos alcanzar nuestras metas.
          </p>
          </div>
          <div>
          <h1 id='tituloI'>Integrantes</h1>
            <div className='containerI'>
              <SeccionIntegrantes nombre={"Binder"}/>
              <SeccionIntegrantes nombre={"Chavez"}/>
              <SeccionIntegrantes nombre={"Holm"}/>
              <SeccionIntegrantes nombre={"Grizzi"}/>
              <SeccionIntegrantes nombre={"Perez V."}/>
            </div>
          </div>
          <div className='repositorio'>
            <a href='https://github.com/Caster-T/NotefusionV2'><button>Repositorio Github</button></a>
          </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Canvas;
