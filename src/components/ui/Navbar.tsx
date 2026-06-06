import { useState } from "react";
import { NavLink } from "./NavLink";
import "./Navbar.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Limpiamos Todo CL - Servicios de limpieza" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <NavLink href="#inicio" onClick={closeMenu}>Inicio</NavLink>
          <NavLink href="#nosotros" onClick={closeMenu}>Nosotros</NavLink>
          <NavLink href="#galeria" onClick={closeMenu}>Galería</NavLink>
          <NavLink href="#servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink href="#agendar" onClick={closeMenu}>Agendar</NavLink>
          <NavLink href="#cotizar" onClick={closeMenu}>Cotizar</NavLink>
          <NavLink href="#resenas" onClick={closeMenu}>Reseñas</NavLink>
          <NavLink href="#contacto" onClick={closeMenu}>Contacto</NavLink>
        </nav>

        <div className={`navbar-actions ${menuOpen ? "active" : ""}`}>
          <div className="navbar-socials">
            <a
              href="https://www.instagram.com/limpiamostodocl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Limpiamos Todo CL"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590514116096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Limpiamos Todo CL"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@limpiamostodocl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Limpiamos Todo CL"
            >
              <FaTiktok />
            </a>
          </div>

          <a href="#cotizar" className="navbar-button" onClick={closeMenu}>
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
};