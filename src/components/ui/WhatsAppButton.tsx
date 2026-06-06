import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const numeroWhatsapp = "56994902677";

  const mensaje =
    "Hola, quiero reservar una cita en nuestro salón de manicura y peluquería.";

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
      <FaWhatsapp />
    </button>
  );
};