import "./MapReviews.css";

export const MapReviews = () => {
  return (
    <section id="ubicacion" className="map-reviews-section">
      <div className="map-reviews-container">
        <div className="map-reviews-header">
          <span>Ubicación y reseñas</span>

          <h2>
            Encuéntranos y revisa nuestras <strong>opiniones</strong>
          </h2>

          <p>
            Visítanos en nuestra barbería y revisa las reseñas reales de
            nuestros clientes directamente en Google Maps.
          </p>
        </div>

        <div className="map-reviews-grid">
          <div className="map-card">
            <div className="map-frame">
              <iframe
                title="Ubicación BAMBINO BARBERSHOP & SALON"
                src="https://www.google.com/maps?q=BAMBINO%20BARBERSHOP%20%26%20SALON%20Maip%C3%BA%20Chile&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-info">
              <div>
                <h4>BAMBINO BARBERSHOP & SALON</h4>
                <p>Av. Principal 123, Maipú, Chile</p>
              </div>

              <a
                href="https://maps.app.goo.gl/cTYeBDm45uoFi8vDA"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Abrir mapa
              </a>
            </div>
          </div>

          <div className="reviews-card">
            <span>Reseñas reales</span>

            <h3>Mira lo que opinan nuestros clientes</h3>

            <p>
              Revisa las opiniones reales de BAMBINO BARBERSHOP & SALON
              directamente en Google Maps y conoce la experiencia de otros
              clientes.
            </p>

            <div className="reviews-stars-wrapper">
              <img
                src="/Google-Review-Symbol.png"
                alt="Google Reviews"
                className="google-review-logo"
              />

              <small>Opiniones reales en Google Maps</small>
            </div>

            <a
              href="https://maps.app.goo.gl/cTYeBDm45uoFi8vDA"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-button"
            >
              Ver reseñas en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};