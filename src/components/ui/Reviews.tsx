import "./Reviews.css";

export const Reviews = () => {
  return (
    <section id="resenas" className="reviews-section">
      <div className="reviews-header">
        <span>Reseñas reales</span>

        <h2>Opiniones de nuestros clientes</h2>

        <p>
          Conoce la experiencia de quienes ya confiaron en nuestro servicio de
          limpieza.
        </p>
      </div>

      <div className="mini-reviews-card">
        <div className="mini-reviews-content">
          <span>Google Reviews</span>

          <h3>Conoce la experiencia de nuestros clientes</h3>

          <p>
            Revisa opiniones reales en Google Maps y descubre cómo ha sido la
            experiencia de quienes ya confiaron en nuestro servicio de limpieza.
          </p>
        </div>

        <div className="mini-reviews-action">
          <img
            src="/Google-Review-Symbol.png"
            alt="Google Reviews"
            className="mini-google-logo"
          />

          <a
            href="https://g.page/r/CSBq1fdAEs_9EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mini-reviews-button"
          >
            Ver reseñas
          </a>
        </div>
      </div>
    </section>
  );
};