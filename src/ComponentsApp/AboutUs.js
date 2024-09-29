import React from 'react';
import Footer from "./CompRepetitivos/Footer";

function Canvas() {
  return (
    <div>
        <h1>¿Quiénes somos?</h1>
        <p>Somos unos estudiantes que notamos la gran necesidad de crear una página amigable para organizar nuestras tareas, objetivos y metas. Para ello, mediante nuestro curso con Generación T, hemos decidido encargarnos de esa necesidad.</p>
        
        <h2>Integrantes:</h2>
        <ul>
            <li>Holm</li>
            <li>Chavez</li>
            <li>Perez Venturo</li>
            <li>Grizzi</li>
            <li>Binder</li>
        </ul>
        <h2>Link Repositorio:</h2>
        <a href='https://github.com/Caster-T/NotefusionV2'> Github </a>

        <footer className="footer">
        <Footer />
        </footer>
    </div>
  );
}

export default Canvas;
