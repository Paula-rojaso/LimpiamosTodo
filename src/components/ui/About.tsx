import "./About.css";

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="https://vibe.filesafe.space/1779746439107848010/assets/6eb852c3-6a0e-4fa8-af44-bc89d1afae11.png"
            alt="Barbería"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>
            Más que un corte de pelo, <span>una experiencia</span>
          </h2>

          <p>
            Fundada con la pasión por el oficio clásico, nuestra barbería es un
            santuario para el hombre moderno que valora la tradición y el buen
            gusto.
          </p>

          <p>
            Nos enorgullecemos de ofrecer un servicio excepcional en un ambiente
            donde puedes relajarte, disfrutar de una buena conversación y salir
            luciendo tu mejor versión.
          </p>

          <p>
            Nuestros barberos son artesanos experimentados, dedicados a
            perfeccionar cada detalle.
          </p>
        </div>
      </div>
    </section>
  );
};