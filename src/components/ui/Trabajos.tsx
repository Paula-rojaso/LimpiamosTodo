import { useState } from "react";
import "./Trabajos.css";

const trabajos = [
  {
    id: 1,
    imagen: "/limpieza-hogar.jpg",
    alt: "Limpieza general de hogar con espacios limpios y ordenados",
    titulo: "Limpieza de hogar",
  },
  {
    id: 2,
    imagen: "/limpieza-departamento.jpg",
    alt: "Departamento limpio y fresco después del servicio de limpieza",
    titulo: "Limpieza de departamento",
  },
  {
    id: 3,
    imagen: "/limpieza-cocina.jpg",
    alt: "Cocina limpia, ordenada y desinfectada",
    titulo: "Limpieza de cocina",
  },
  {
    id: 4,
    imagen: "/limpieza-bano.jpg",
    alt: "Baño limpio, higienizado y con superficies brillantes",
    titulo: "Limpieza de baños",
  },
  {
    id: 5,
    imagen: "/limpieza-oficina.jpg",
    alt: "Oficina limpia y ordenada para un ambiente de trabajo agradable",
    titulo: "Limpieza de oficinas",
  },
  {
    id: 6,
    imagen: "/limpieza-profunda.jpg",
    alt: "Limpieza profunda de espacios con atención a cada detalle",
    titulo: "Limpieza profunda",
  },
];

export const Trabajos = () => {
  const [inicio, setInicio] = useState(0);
  const cantidadVisible = 3;

  const trabajosVisibles = trabajos.slice(inicio, inicio + cantidadVisible);

  const siguiente = () => {
    if (inicio + cantidadVisible < trabajos.length) {
      setInicio(inicio + 1);
    } else {
      setInicio(0);
    }
  };

  const anterior = () => {
    if (inicio > 0) {
      setInicio(inicio - 1);
    } else {
      setInicio(trabajos.length - cantidadVisible);
    }
  };

  return (
    <section id="trabajos" className="trabajos-section">
      <div className="trabajos-container">
        <span className="trabajos-subtitle">Galería</span>

        <h2>Algunos de nuestros trabajos</h2>

        <p className="trabajos-description">
          Conoce parte de nuestros servicios de limpieza realizados en hogares,
          departamentos, oficinas y espacios que requieren orden, higiene y
          cuidado en cada detalle.
        </p>

        <div className="trabajos-carousel-horizontal">
          <button
            className="trabajos-btn trabajos-btn-left"
            onClick={anterior}
            aria-label="Ver trabajos anteriores"
          >
            ‹
          </button>

          <div className="trabajos-cards-horizontal">
            {trabajosVisibles.map((trabajo) => (
              <div className="trabajo-card-horizontal" key={trabajo.id}>
                <div className="trabajo-img-horizontal">
                  <img src={trabajo.imagen} alt={trabajo.alt} />
                </div>

                <div className="trabajo-texto-horizontal">
                  <span>Servicio destacado</span>
                  <h3>{trabajo.titulo}</h3>
                  <p>{trabajo.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="trabajos-btn trabajos-btn-right"
            onClick={siguiente}
            aria-label="Ver más trabajos"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};