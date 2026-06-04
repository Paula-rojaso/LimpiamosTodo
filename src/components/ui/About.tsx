import "./About.css";

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/imagen6.png"
            alt="Servicio de limpieza profesional"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>
            Más que limpieza, tranquilidad para <span>tu espacio</span>
          </h2>

          <p>
            Nacimos con el propósito de entregar un servicio de limpieza
            confiable, responsable y adaptado a las necesidades de cada cliente,
            ayudando a mantener hogares, departamentos y oficinas limpias,
            ordenadas y agradables.
          </p>

          <p>
            Nos enfocamos en brindar una atención cercana y profesional,
            cuidando cada detalle para que puedas disfrutar de espacios más
            frescos, higiénicos y cómodos, sin preocuparte por el desorden o la
            limpieza diaria.
          </p>

          <p>
            Nuestro equipo trabaja con compromiso, puntualidad y dedicación,
            utilizando productos adecuados para lograr resultados de calidad en
            casas, departamentos, oficinas y espacios comerciales.
          </p>
        </div>
      </div>
    </section>
  );
};