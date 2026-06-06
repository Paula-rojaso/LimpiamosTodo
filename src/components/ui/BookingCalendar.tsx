import "./BookingCalendar.css";

const BookingCalendar = () => {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3s2gkWruScg1v074MNYHFCHUkdoRlZlWsbkTSihq1kqeLWut9UN7z-BHfD8GOtKBnabjaRLFgB?gv=true";

  return (
    <section id="agendar" className="booking-section">
      <div className="booking-container">
        <div className="booking-header">
          <span className="booking-label">Reserva tu cita</span>

          <h2>
            Agenda tu <strong>visita</strong>
          </h2>

          <p>
            Agenda directamente en nuestro calendario de Google. Elige el día y
            horario disponible que más te acomode.
          </p>
        </div>

        <div className="booking-card booking-google-card">
          <h3>Agenda tu cita online</h3>

          <p>
            Al hacer clic en el botón, se abrirá nuestra agenda de Google
            Calendar para que puedas seleccionar un horario disponible.
          </p>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-submit booking-link"
          >
            Agendar hora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;