import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3s2gkWruScg1v074MNYHFCHUkdoRlZlWsbkTSihq1kqeLWut9UN7z-BHfD8GOtKBnabjaRLFgB?gv=true";

  return (
    <footer id="contacto" className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img
              src="/logo.png"
              alt="Limpiamos Todo - Servicio de limpieza profesional"
            />
          </a>

          <p>
            Limpiamos Todo ofrece servicios de limpieza profesional para casas,
            departamentos, oficinas y espacios comerciales. Trabajamos con
            responsabilidad, puntualidad y dedicación para dejar tus espacios
            limpios, frescos y ordenados.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/limpiamostodocl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590514116096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@limpiamostodocl"
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
          <a href="#agendar">Agendar</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <h4>Datos de contacto</h4>

          <p>Limpiamos Todo</p>

          <p>
            Servicio de limpieza para casas, departamentos, oficinas y espacios
            comerciales.
          </p>

          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/56994902677"
              target="_blank"
              rel="noopener noreferrer"
            >
              +569 949 02 677
            </a>
          </p>

          <p>Horario: Lun a Sáb 08:00 - 20:00</p>
        </div>

        <div className="footer-action">
          <h4>Agenda tu limpieza</h4>

          <p>
            Reserva tu servicio de limpieza de forma rápida y sencilla desde
            nuestro calendario online.
          </p>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            Reservar ahora
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Limpiamos Todo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};