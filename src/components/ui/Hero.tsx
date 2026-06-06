import { FaCalendarAlt } from "react-icons/fa";
import "./Hero.css";

export const Hero = () => {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3s2gkWruScg1v074MNYHFCHUkdoRlZlWsbkTSihq1kqeLWut9UN7z-BHfD8GOtKBnabjaRLFgB?gv=true";

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <img
          src="/uñasbanner.jpeg"
          alt="Servicio de limpieza profesional"
          className="about-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>
          Servicio de Limpieza <span>Profesional</span>
        </h1>

        <p>
          Deja tus espacios impecables en manos de nuestro equipo. Realizamos
          limpieza para casas, departamentos, oficinas y espacios comerciales,
          con atención responsable, puntual y adaptada a tus necesidades.
        </p>

        <div className="hero-buttons">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-primary"
          >
            <FaCalendarAlt size={22} />
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