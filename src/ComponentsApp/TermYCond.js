import React from 'react';
import Footer from "./Footer";
import '../estilosApp/TermYCond.css'
function TermYCond() {
  return (
    <div>    
      <h1>Términos y Condiciones de Uso</h1>

      <h2>1. Aceptación de los Términos</h2>
      <p>Al acceder y utilizar el sitio web <strong>Note Fusion</strong> (en adelante, "el Sitio"), aceptas cumplir con estos Términos y Condiciones de Uso.</p>
      <p>Si no estás de acuerdo con alguno de estos términos, no debes utilizar el Sitio.</p>

      <h2>2. Modificaciones a los Términos</h2>
      <p><strong>Note Fusion</strong> se reserva el derecho de modificar estos Términos en cualquier momento.</p>
      <p>Cualquier cambio será efectivo inmediatamente después de su publicación en el Sitio.</p>
      <p>Es tu responsabilidad revisar periódicamente estos Términos para estar al tanto de cualquier cambio.</p>

      <h2>3. Uso del Sitio</h2>

      <h3>3.1. Elegibilidad</h3>
      <p>Debes tener al menos 13 años para utilizar este Sitio.</p>
      <p>Al utilizar el Sitio, afirmas que tienes la edad mínima requerida y que tienes la capacidad legal para aceptar estos Términos.</p>

      <h3>3.2. Conducta del Usuario</h3>
      <p>Te comprometes a utilizar el Sitio solo con fines legales y de acuerdo con las leyes aplicables.</p>
      <p>No puedes:</p>
      <ul>
          <li>Usar el Sitio de ninguna manera que cause daño, deshabilite, sobrecargue o perjudique el Sitio o interfiera con el uso de cualquier otra parte.</li>
          <li>Introducir virus, troyanos, gusanos, bombas de tiempo o cualquier otro material que sea malicioso o tecnológicamente dañino.</li>
          <li>Intentar obtener acceso no autorizado al Sitio, el servidor donde se almacena el Sitio, o cualquier servidor, computadora o base de datos conectada al Sitio.</li>
      </ul>

      <h2>4. Propiedad Intelectual</h2>
      <p>Todos los derechos de propiedad intelectual sobre el Sitio y su contenido, incluyendo pero no limitándose a texto, gráficos, logotipos, imágenes y software, son propiedad de <strong>Note Fusion</strong> o de sus licenciantes.</p>
      <p>Está prohibida la reproducción, distribución o modificación de cualquier contenido del Sitio sin el consentimiento previo por escrito de <strong>Note Fusion</strong>.</p>

      <h2>5. Exoneración de Responsabilidad</h2>
      <p>El uso del Sitio es bajo tu propio riesgo.</p>
      <p><strong>Note Fusion</strong> no garantiza que el Sitio esté libre de errores, virus u otros componentes dañinos.</p>
      <p>No seremos responsables de ninguna pérdida o daño que surja del uso o la incapacidad de usar el Sitio.</p>

      <h2>6. Limitación de Responsabilidad</h2>
      <p>En la máxima medida permitida por la ley aplicable, <strong>Note Fusion</strong> no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja de o esté relacionado con tu uso del Sitio.</p>

      <h2>7. Enlaces a Terceros</h2>
      <p>El Sitio puede contener enlaces a sitios web de terceros.</p>
      <p><strong>Note Fusion</strong> no asume ninguna responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros.</p>
      <p>Te recomendamos revisar los términos y condiciones de cualquier sitio web de terceros que visites.</p>

      <h2>8. Ley Aplicable</h2>
      <p>Estos Términos se rigen e interpretan de acuerdo con las leyes del país en el que opera <strong>Note Fusion</strong>, sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>

      <h2>9. Contacto</h2>
      <p>Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes contactarnos a través de nuestro correo electrónico: nenriquez@lasalleflorida.edu.ar or lgrizzidiehl@lasalleflorida.edu.ar.</p>
      
      <footer className="footer">
          <Footer />
      </footer>
    </div>
  );
}

export default TermYCond;
