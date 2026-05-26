import { CalendarDays } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <img
          src="https://vibe.filesafe.space/1779746439107848010/assets/6eb852c3-6a0e-4fa8-af44-bc89d1afae11.png"
          alt="Barbería interior"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>
          Estilo y Tradición en <span>Cada Corte</span>
        </h1>

        <p>
          Descubre la experiencia definitiva en cuidado masculino. Maestros
          barberos, ambiente clásico y resultados impecables.
        </p>

        <div className="hero-buttons">
          <a href="#reserva" className="hero-button hero-button-primary">
            <CalendarDays size={22} />
            Reserva tu Cita
          </a>

          <a href="#servicios" className="hero-button hero-button-outline">
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};