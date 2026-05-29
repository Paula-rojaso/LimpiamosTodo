import { useState } from "react";
import "./Trabajos.css";

const trabajos = [
  {
    id: 1,
    imagen: "/uñasnudeplateado.jpg",
    alt: "Diseño de uñas acrílicas en tonos nude y plateado",
    titulo: "Uñas nude y plateado",
  },
  {
    id: 2,
    imagen: "/balayage.avif",
    alt: "Balayage profesional en tonos cálidos",
    titulo: "Balayage profesional",
  },
  {
    id: 3,
    imagen: "/uñaselegantes.jpg",
    alt: "Diseño de uñas elegantes en tonos rosados",
    titulo: "Uñas elegantes",
  },
  {
    id: 4,
    imagen: "/imagen4.png",
    alt: "Coloración profesional de cabello",
    titulo: "Coloración profesional",
  },
  {
    id: 5,
    imagen: "/imagen5.png",
    alt: "Coloración profesional de cabello",
    titulo: "Diseño de uñas profesional",
  },
  {
    id: 6,
    imagen: "/trabajo6.jpg",
    alt: "Peinado profesional para ocasión especial",
    titulo: "Peinado elegante",
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
          Conoce parte de nuestros diseños de manicura y peluquería, creados con
          dedicación, estilo y atención a cada detalle.
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
                  <span>Trabajo destacado</span>
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