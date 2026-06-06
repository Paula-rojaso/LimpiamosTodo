import {
  FaRegBuilding,
  FaClipboardCheck,
  FaSprayCan,
} from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      icon: <MdCleaningServices size={34} />,
      title: "Limpieza Estándar",
      description:
        "Limpieza completa y eficiente para dejar tu espacio listo para usar.",
    },
    {
      icon: <GiVacuumCleaner size={34} />,
      title: "Limpieza Profunda",
      description:
        "Servicios periódicos para mantener tu propiedad en perfectas condiciones a largo plazo.",
    },
    {
      icon: <FaRegBuilding size={34} />,
      title: "Limpieza a Empresas",
      description:
        "Servicios especializados de limpieza para oficinas y espacios comerciales con horarios flexibles.",
    },
    {
      icon: <FaClipboardCheck size={34} />,
      title: "Limpieza Post-Venta",
      description:
        "Limpieza después de obras, remodelaciones o mudanzas para dejar tu espacio listo para usar.",
    },
    {
      icon: <FaSprayCan size={34} />,
      title: "Limpieza de Espacios Exteriores",
      description:
        "Limpieza y mantenimiento de jardines, terrazas, patios y otras áreas exteriores de tu propiedad.",
    },
    {
      icon: <MdCleaningServices size={34} />,
      title: "Limpieza Pre Entrega",
      description:
        "Servicio ideal para preparar casas, departamentos u oficinas antes de entregar, arrendar o recibir visitas.",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-subtitle">Servicios completos</span>

          <h2>
            Servicios Completos para una <span>limpieza impecable</span>
          </h2>

          <p>
            Soluciones de limpieza pensadas para hogares, propiedades,
            empresas, espacios exteriores y servicios especiales.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};