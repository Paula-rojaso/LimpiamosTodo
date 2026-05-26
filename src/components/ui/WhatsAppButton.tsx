import "./WhatsAppButton.css";

export const WhatsAppButton = () => {
  const numeroWhatsapp = "56997788351";

  const mensaje =
    "Hola, quiero reservar una cita en BAMBINO BARBERSHOP & SALON.";

  const abrirWhatsapp = () => {
    const paginaActual = window.location.href;

    const mensajeFinal = `${mensaje}\n\nVengo desde esta página: ${paginaActual}`;

    const texto = encodeURIComponent(mensajeFinal);

    window.open(`https://wa.me/${numeroWhatsapp}?text=${texto}`, "_blank");
  };

  return (
    <button
      type="button"
      className="whatsapp-main-button"
      onClick={abrirWhatsapp}
      aria-label="Contactar por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </button>
  );
};