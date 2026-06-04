import "./About.css";

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/imagen6.png"
            alt="Barbería"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>
            Más que una limpieza, tranquilidad para <span>tu espacio</span>
          </h2>

          <p>
            Nacimos con el propósito de entregar un servicio de limpieza confiable,
            responsable y adaptado a las necesidades de cada cliente, ayudando a mantener
            espacios limpios, ordenados y agradables.
          </p>

          <p>
            Nos enfocamos en brindar una atención cercana y profesional, ideal para hogares,
            departamentos, oficinas y espacios comerciales que buscan limpieza de calidad y
            cuidado en cada detalle.
          </p>

          <p>
            Nuestro equipo trabaja con compromiso, puntualidad y dedicación, utilizando
            productos adecuados para lograr ambientes más frescos, higiénicos y cómodos
            para ti, tu familia o tu lugar de trabajo.
          </p>
        </div>
      </div>
    </section>
  );
};