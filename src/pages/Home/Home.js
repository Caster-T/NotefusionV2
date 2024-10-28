import React from "react";
import Seccion from "../../Components/img-disposal/Seccion/Seccion";
import ImageAText from "../../Components/img-disposal/ImageAText";
import NavBar from "../../Components/NavBar/Navbar";
import Header from "./Header"; 
import ButtonGroup from "./ButtonGroup";
import Footer from "../../Components/Footer/Footer";
import image from "../../assets/images/Tarjeta_1.png";
import imagenHome from "../../assets/images/imagen1.png";
import "./Home.css";
import { useState } from "react";

const Home = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

const handleLogin = () => {
  setIsAuthenticated(true);
};

  return (
    <>
      <nav>
        <NavBar isAuthenticated={isAuthenticated} />
      </nav>

      <button className="prueba" onClick={handleLogin}>Simular Iniciar Sesión</button>


      <div className="grid-container">
        <div className="image">
          <ImageAText img={imagenHome} />
        </div>
        <div className="text-content">
          <Header title={"Organiza tus tareas con Notefusion"} />
          <ButtonGroup />
        </div>
      </div>

      <div className="SeccionContainer">
        <Header
          subtitle={(
            <>
              <span>Dale tu toque personal</span>
              <span>y hazlo a tu manera</span>
            </>
          )}
        />

        <Header  paragraph={"Transforma tu proyecto: Añade tu estilo único y deja que la creatividad te guíe en cada detalle"}/>

        <Seccion
          imagen={image}
          texto="Crear y personalizar roadmaps que muestren los hitos y fases clave de tu proyecto, ajustando el flujo de trabajo según tus necesidades."
          invertido={true}
        />
        <Seccion
          imagen={image}
          texto="Personaliza cada nodo del roadmap modificando su tamaño y color según tus preferencias. Esta flexibilidad permite resaltar las fases más importantes o diferenciarlas visualmente. "
          invertido={false}
        />
        {/* <Seccion
          imagen={image}
          texto="Gestionar equipos y colaborar en tiempo real, asignando tareas, agregando descripciones, comentarios y compartiendo archivos de manera eficiente."
          invertido={true}
        /> */}
        <Seccion
          imagen={image}
          texto="Cada proyecto puede ser completamente personalizado con descripciones detalladas, objetivos específicos y titulos clave. 
          Esto te permite definir claramente el alcance y los resultados esperados, asegurando que estés alineado."
          invertido={true}
        />
      </div>

        <Footer />
    </>
  );
};

export default Home;
