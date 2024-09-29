import React from "react";
import Header from "../Home/Header";
import ImageSection from "../Home/ImageSection";
import ButtonGroup from "../Home/ButtonGroup";
import "../Home/HomeCss/Home.css";
import Footer from "./Footer";
import Seccion from "../Home/Seccion";
import image from "../assets/placeholdeer.png";
const Home = () => {

  return (
    <>
      <div className="grid-container">
        <div className="image">
          <ImageSection />
        </div>
        <div className="text-content">
          <Header title={"Organiza tus tareas con Notefusion"} />
          <ButtonGroup />
        </div>
      </div>

      <div>
        <Header title={"Hazlo a tu estilo"} />
        <Seccion
          imagen={image}
          texto="Crear y personalizar roadmaps que muestren los hitos y fases clave de tu proyecto, ajustando el flujo de trabajo según tus necesidades."
          invertido={true}
        />
        <Seccion
          imagen={image}
          texto="Organizar tareas en tableros visuales que se pueden dividir en fases, categorías o prioridades, y mover fácilmente las tareas entre las diferentes etapas del proyecto."
          invertido={false}
        />
        <Seccion
          imagen={image}
          texto="Gestionar equipos y colaborar en tiempo real, asignando tareas, agregando descripciones, comentarios y compartiendo archivos de manera eficiente."
          invertido={true}
        />
        <Seccion
          imagen={image}
          texto="Automatizar flujos de trabajo para optimizar la productividad, integrando herramientas externas y configurando reglas automáticas que te ahorran tiempo."
          invertido={false}
        />
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;