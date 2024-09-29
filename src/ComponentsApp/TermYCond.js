import React from "react";
import Footer from "./Footer";
import BotonFlecha from "./BotonFlecha";
import { useNavigate } from "react-router-dom";

function TermYCond() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavigation = () => {
    navigate("/ruta"); // Reemplaza '/ruta' con la ruta a la que deseas navegar
  };
  return (
    <div>
      <section class="py-5 bg-light">
        {/* Texto de Terminos y Condiciones */}
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <h2 class="text-center mb-5">
                <BotonFlecha onClick={handleNavigation} />{" "}
                Términos y Condiciones de Uso - NoteFusion
              </h2>

              <h5>1. Definiciones</h5>
              <p>
                <strong>"Plataforma"</strong>: se refiere a la página web y
                aplicación de NoteFusion.
              </p>
              <p>
                <strong>"Usuario"</strong>: cualquier persona que accede y
                utiliza los servicios de NoteFusion.
              </p>
              <p>
                <strong>"Servicios"</strong>: todas las funcionalidades,
                herramientas y recursos proporcionados por NoteFusion.
              </p>

              <h5>2. Uso de los Servicios</h5>
              <p>
                2.1. <strong>Registro:</strong> Para utilizar la plataforma,
                debes crear una cuenta proporcionando información precisa y
                completa. Eres responsable de mantener la confidencialidad de
                tus credenciales y de todas las actividades que ocurran bajo tu
                cuenta.
              </p>
              <p>
                2.2. <strong>Responsabilidad del Usuario:</strong> Eres
                responsable de todas las actividades y datos que cargues en la
                plataforma. NoteFusion no se hace responsable del contenido que
                los usuarios suban, compartan o gestionen a través de nuestra
                plataforma.
              </p>
              <p>
                2.3. <strong>Uso Permitido:</strong> No debes utilizar la
                plataforma para actividades ilegales, distribución de spam,
                virus u otros contenidos que puedan dañar la funcionalidad de
                NoteFusion o de terceros.
              </p>

              <h5>3. Propiedad Intelectual</h5>
              <p>
                3.1. <strong>Derechos sobre la Plataforma:</strong> Todo el
                contenido, diseño y código de NoteFusion, incluyendo pero no
                limitándose a logos, gráficos y software, son propiedad de
                NoteFusion o de sus licenciantes, y están protegidos por las
                leyes de propiedad intelectual.
              </p>
              <p>
                3.2. <strong>Contenido de Usuarios:</strong> Los usuarios
                conservan los derechos sobre el contenido que suben, pero
                otorgan a NoteFusion una licencia mundial, no exclusiva y
                gratuita para almacenar, distribuir y mostrar ese contenido con
                el fin de proporcionar el servicio.
              </p>

              <h5>4. Privacidad</h5>
              <p>
                NoteFusion se compromete a proteger la privacidad de los
                usuarios. Consulta nuestra{" "}
                <strong>Política de Privacidad</strong> para obtener más
                detalles sobre cómo recopilamos, usamos y protegemos tu
                información.
              </p>

              <h5>5. Limitación de Responsabilidad</h5>
              <p>
                NoteFusion no garantiza que la plataforma estará libre de
                interrupciones, errores o vulnerabilidades de seguridad. No
                seremos responsables por daños directos, indirectos,
                incidentales, especiales o consecuentes derivados del uso o la
                incapacidad de uso de la plataforma, incluso si NoteFusion ha
                sido advertido de la posibilidad de dichos daños.
              </p>

              <h5>6. Planes y Tarifas</h5>
              <p>
                6.1. <strong>Planes de Pago:</strong> NoteFusion ofrece planes
                gratuitos y de pago. Al suscribirte a un plan de pago, aceptas
                los términos de facturación aplicables, que pueden incluir
                tarifas recurrentes hasta que canceles tu suscripción.
              </p>
              <p>
                6.2. <strong>Política de Cancelación:</strong> Puedes cancelar
                tu suscripción en cualquier momento. Los pagos ya realizados no
                serán reembolsables, y seguirás teniendo acceso a las
                características pagadas hasta el final del período de
                facturación.
              </p>

              <h5>7. Modificaciones a los Servicios</h5>
              <p>
                NoteFusion se reserva el derecho de modificar, actualizar o
                descontinuar el servicio en cualquier momento sin previo aviso.
                Sin embargo, te informaremos de cambios significativos que
                afecten tu uso de la plataforma.
              </p>

              <h5>8. Modificaciones a los Términos</h5>
              <p>
                NoteFusion puede modificar estos Términos y Condiciones en
                cualquier momento. Los cambios entrarán en vigor una vez
                publicados en nuestra plataforma. Al continuar utilizando los
                servicios, aceptas estar sujeto a las versiones actualizadas de
                estos términos.
              </p>

              <h5>9. Suspensión o Terminación de Cuenta</h5>
              <p>
                NoteFusion puede suspender o cancelar tu cuenta si violas estos
                Términos y Condiciones, o si lo consideramos necesario por
                razones de seguridad o legales. Te notificaremos de cualquier
                suspensión o cancelación, excepto en casos de emergencia.
              </p>

              <h5>10. Ley Aplicable y Jurisdicción</h5>
              <p>
                Estos Términos y Condiciones se regirán e interpretarán de
                acuerdo con las leyes del país en que se ubique NoteFusion, sin
                perjuicio de los principios de conflicto de leyes. Cualquier
                disputa que surja será sometida a la jurisdicción exclusiva de
                los tribunales competentes de dicha jurisdicción.
              </p>

              <h5>11. Contacto</h5>
              <p>
                Si tienes preguntas sobre estos Términos y Condiciones, puedes
                ponerte en contacto con nosotros en:{" "}
                <strong>soporte@notefusion.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default TermYCond;
