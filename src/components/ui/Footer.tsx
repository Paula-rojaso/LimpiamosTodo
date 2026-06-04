import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contacto" className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img src="/logo.png" alt="Empresa de limpieza profesional" />
          </a>

          <p>
            Empresa de limpieza profesional para casas, departamentos, oficinas
            y espacios comerciales. Entregamos un servicio responsable, puntual
            y enfocado en dejar tus espacios limpios, frescos y ordenados.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#reserva">Reservar</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <h4>Datos de contacto</h4>
          <p>Servicio de Limpieza Profesional</p>
          <p>Maipú, Santiago, Chile</p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/56990138613"
              target="_blank"
              rel="noopener noreferrer"
            >
              +569 90138613
            </a>
          </p>
          <p>Horario: Lun a Sáb 08:00 - 20:00</p>
        </div>

        <div className="footer-action">
          <h4>Solicita tu limpieza</h4>
          <p>
            Agenda tu servicio de limpieza para casas, departamentos, oficinas
            o espacios comerciales de forma rápida y sencilla.
          </p>

          <a href="#reserva" className="footer-button">
            Reservar ahora
          </a>

          <a
            href="https://maps.app.goo.gl/cTYeBDm45uoFi8vDA"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            Ver ubicación en Google Maps
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Servicio de Limpieza Profesional. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};