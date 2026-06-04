import {
  FaHome,
  FaBuilding,
  FaBroom,
  FaBath,
  FaTruckMoving,
  FaMagic,
} from "react-icons/fa";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 1 Dormitorio",
      description:
        "Limpieza general para espacios pequeños. Incluye dormitorio, baño, cocina, living, pisos, superficies y orden básico del espacio.",
      price: "Desde $25.000",
    },
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 2 Dormitorios y 1 Baño",
      description:
        "Servicio ideal para hogares medianos. Incluye limpieza de dormitorios, baño, cocina, living, comedor, pisos y superficies principales.",
      price: "Desde $40.000",
    },
    {
      icon: <FaHome size={28} />,
      title: "Casa o Departamento 3 Dormitorios y 2 Baños",
      description:
        "Limpieza general para hogares más amplios. Considera dormitorios, baños, cocina, living, comedor, pasillos, pisos y superficies visibles.",
      price: "Desde $55.000",
    },
    {
      icon: <FaBath size={28} />,
      title: "Limpieza Profunda de Baños y Cocina",
      description:
        "Servicio enfocado en zonas que requieren mayor higiene y detalle, como baños, cocina, grifería, superficies, muebles y espacios de uso frecuente.",
      price: "Desde $35.000",
    },
    {
      icon: <FaBroom size={28} />,
      title: "Limpieza Profunda del Hogar",
      description:
        "Limpieza más detallada para espacios que necesitan mayor dedicación. Incluye rincones, superficies, muebles, pisos, baños, cocina y áreas comunes.",
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
      icon: <FaTruckMoving size={28} />,
      title: "Limpieza por Mudanza",
      description:
        "Ideal para antes o después de cambiarte de casa. Dejamos el espacio limpio, ordenado y listo para entregar o comenzar una nueva etapa.",
      price: "Desde $70.000",
    },
    {
      icon: <FaMagic size={28} />,
      title: "Limpieza Personalizada",
      description:
        "Servicio adaptado a tus necesidades específicas. Puedes solicitar limpieza por horas, por áreas determinadas o según el estado del espacio.",
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
            y espacios comerciales, con valores según cantidad de dormitorios,
            baños y nivel de limpieza requerido.
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

        <p className="services-note">
          *Los valores pueden variar según tamaño del espacio, cantidad de baños,
          nivel de suciedad y requerimientos especiales. No incluye lavado,
          doblado ni planchado de ropa.
        </p>
      </div>
    </section>
  );
};