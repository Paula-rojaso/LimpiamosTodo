import { Scissors, Droplet, Wind } from "lucide-react";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      icon: <Scissors size={28} />,
      title: "Corte clásico",
      description: "Corte de cabello a tijera o máquina, con acabado profesional y peinado.",
      price: "$12.500",
    },
    {
      icon: <Scissors size={28} />,
      title: "Arreglo de barba",
      description: "Diseño, recorte y perfilado de barba con terminación profesional.",
      price: "$15.000",
    },
    {
      icon: <Droplet size={28} />,
      title: "Afeitado tradicional",
      description: "Ritual de afeitado con toalla caliente, espuma clásica y navaja.",
      price: "$20.000",
    },
    {
      icon: <Scissors size={28} />,
      title: "Corte + barba",
      description: "Paquete completo de corte de cabello y arreglo de barba.",
      price: "$35.000",
    },
    {
      icon: <Scissors size={28} />,
      title: "Corte niño",
      description: "Corte especial para los más pequeños, con paciencia y estilo.",
      price: "$18.000",
    },
    {
      icon: <Wind size={28} />,
      title: "Tratamiento facial",
      description: "Limpieza facial profunda, exfoliación e hidratación para tu piel.",
      price: "$30.000",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>
            Nuestros <span>Servicios</span>
          </h2>
          <p>
            Ofrecemos una amplia gama de servicios de barbería tradicional y
            moderna para satisfacer todas tus necesidades de estilo.
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