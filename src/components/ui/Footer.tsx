import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="contacto" className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
                <img src="/logo.png" alt="BAMBINO BARBERSHOP & SALON" />
            </a>

          <p>
            Barbería y salón con estilo clásico, atención profesional y una
            experiencia pensada para que luzcas tu mejor versión.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#reserva">Reserva</a>
          <a href="#ubicacion">Ubicación</a>
        </div>

        <div className="footer-contact">
          <h4>Datos de contacto</h4>
          <p>BAMBINO BARBERSHOP & SALON</p>
          <p>Av. Principal 123, Maipú, Chile</p>
          <p>WhatsApp: +56 9 9778 8351</p>
          <p>Horario: Lun a Sáb 10:00 - 20:00</p>
        </div>

        <div className="footer-action">
          <h4>Agenda tu visita</h4>
          <p>Reserva tu hora de forma rápida desde Google Calendar.</p>

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
          © 2026 BAMBINO BARBERSHOP & SALON. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};