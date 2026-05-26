import { NavLink } from "./NavLink";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          <img src="/logo.png" alt="BAMBINO BARBERSHOP & SALON" />
        </a>

        <nav className="navbar-menu">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#reserva">Reservar</NavLink>
          <NavLink href="#ubicacion">Ubicación</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-socials">
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

          <a href="#reserva" className="navbar-button">
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
};