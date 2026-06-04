import { FaHome, FaBroom, FaBuilding } from "react-icons/fa";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 1 Dormitorio",
      description:
        "Servicio ideal para espacios pequeños. Incluye limpieza general de dormitorio, baño, cocina, living, pisos, superficies y orden básico.",
      price: "Desde $25.000",
    },
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 2 Dormitorios y 1 Baño",
      description:
        "Limpieza general para hogares medianos. Incluye dormitorios, baño, cocina, living, comedor, pisos y superficies principales.",
      price: "Desde $40.000",
    },
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 3 Dormitorios y 2 Baños",
      description:
        "Servicio pensado para hogares más amplios. Considera dormitorios, baños, cocina, living, comedor, pasillos, pisos y superficies visibles.",
      price: "Desde $55.000",
    },
    {
      icon: <FaBroom size={28} />,
      title: "Limpieza Profunda",
      description:
        "Limpieza más detallada para espacios que requieren mayor dedicación. Incluye rincones, superficies, muebles, pisos, baños y cocina.",
      price: "Desde $65.000",
    },
    {
      icon: <FaBuilding size={28} />,
      title: "Limpieza de Oficinas",
      description:
        "Servicio de limpieza para espacios de trabajo, escritorios, baños, pisos, salas de reunión y zonas comunes. El valor depende del tamaño del lugar.",
      price: "Desde $45.000",
    },
    {
      icon: <FaBroom size={28} />,
      title: "Limpieza Personalizada",
      description:
        "Servicio adaptado a tus necesidades. Puedes solicitar limpieza por áreas específicas, por horas o según el estado del espacio.",
      price: "Desde $25.000",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-subtitle">Limpieza profesional</span>

          <h2>
            Nuestros <span>Servicios</span>
          </h2>

          <p>
            Ofrecemos servicios de limpieza para casas, departamentos, oficinas
            y espacios comerciales, con atención responsable, puntual y adaptada
            a las necesidades de cada cliente.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <span className="service-price">{service.price}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};