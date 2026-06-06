import { useState } from "react";
import "./Calculator.css";

type Propiedad = {
  id: string;
  nombre: string;
  precio: number;
};

type Extra = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
};

const propiedades: Propiedad[] = [
  { id: "1d1b", nombre: "1 Dorm + 1 Baño", precio: 30000 },
  { id: "2d1b", nombre: "2 Dorm + 1 Baño", precio: 35000 },
  { id: "2d2b", nombre: "2 Dorm + 2 Baños", precio: 40000 },
  { id: "3d2b", nombre: "3 Dorm + 2 Baños", precio: 45000 },
  { id: "3d3b", nombre: "3 Dorm + 3 Baños", precio: 55000 },
  { id: "4d3b", nombre: "4 Dorm + 3 Baños", precio: 65000 },
  { id: "4d4b", nombre: "4 Dorm + 4 Baños", precio: 70000 },
  { id: "5d5b", nombre: "5 Dorm + 5 Baños", precio: 80000 },
];

const extras: Extra[] = [
  {
    id: "arreglos",
    nombre: "Arreglos menores",
    descripcion: "Pequeños arreglos y mantenciones básicas.",
    precio: 10000,
  },
  {
    id: "ropa-cama",
    nombre: "Lavado de Ropa de Cama",
    descripcion: "Lavado de sábanas y ropa de cama.",
    precio: 5000,
  },
  {
    id: "horno",
    nombre: "Limpieza de Horno",
    descripcion: "Limpieza profunda del horno.",
    precio: 8000,
  },
  {
    id: "quincho",
    nombre: "Limpieza de Quincho",
    descripcion: "Limpieza completa de parrilla, mesones y pisos.",
    precio: 15000,
  },
  {
    id: "refrigerador",
    nombre: "Limpieza de Refrigerador",
    descripcion: "Limpieza interna completa.",
    precio: 7000,
  },
];

export const Calculator = () => {
  const [propiedadSeleccionada, setPropiedadSeleccionada] =
    useState<Propiedad>(propiedades[0]);

  const [extrasSeleccionados, setExtrasSeleccionados] = useState<string[]>([]);

  const formatoPrecio = (precio: number) => {
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });
  };

  const toggleExtra = (id: string) => {
    setExtrasSeleccionados((prev) =>
      prev.includes(id)
        ? prev.filter((extraId) => extraId !== id)
        : [...prev, id]
    );
  };

  const totalExtras = extras
    .filter((extra) => extrasSeleccionados.includes(extra.id))
    .reduce((total, extra) => total + extra.precio, 0);

  const subtotal = propiedadSeleccionada.precio;
  const totalFinal = subtotal + totalExtras;

  const extrasTexto =
    extras
      .filter((extra) => extrasSeleccionados.includes(extra.id))
      .map((extra) => `- ${extra.nombre}: ${formatoPrecio(extra.precio)}`)
      .join("\n") || "Sin servicios adicionales";

  return (
    <section id="cotizar" className="calculator-section">
      <div className="calculator-header">
        <span>Calculadora de precios</span>

        <h2>
          Cotiza tu servicio de <strong>limpieza</strong>
        </h2>

        <p>
          Selecciona el tipo de propiedad, agrega servicios adicionales y
          solicita tu cotización directamente por WhatsApp.
        </p>
      </div>

      <div className="calculator-layout">
        <div className="calculator-column property-column">
          <h3>Selecciona la configuración de la propiedad:</h3>

          <div className="property-box">
            <span className="property-title">⌂ Propiedad</span>

            <select
              value={propiedadSeleccionada.id}
              onChange={(e) => {
                const propiedad = propiedades.find(
                  (item) => item.id === e.target.value
                );

                if (propiedad) {
                  setPropiedadSeleccionada(propiedad);
                }
              }}
            >
              {propiedades.map((propiedad) => (
                <option key={propiedad.id} value={propiedad.id}>
                  {propiedad.nombre} — {formatoPrecio(propiedad.precio)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="calculator-column extras-column">
          <h3>Agrega servicios adicionales:</h3>

          <div className="extras-list">
            {extras.map((extra) => {
              const activo = extrasSeleccionados.includes(extra.id);

              return (
                <div
                  key={extra.id}
                  className={`extra-card ${activo ? "active" : ""}`}
                >
                  <div>
                    <h4>{extra.nombre}</h4>
                    <strong>+ {formatoPrecio(extra.precio)}</strong>
                    <p>{extra.descripcion}</p>
                  </div>

                  <button type="button" onClick={() => toggleExtra(extra.id)}>
                    {activo ? "Quitar" : "Agregar"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="calculator-summary">
          <div className="summary-total-main">
            <span>$</span>
            <strong>{totalFinal.toLocaleString("es-CL")}</strong>
            <small>CLP</small>
          </div>

          <div className="summary-box">
            <div className="summary-row">
              <span>Subtotal:</span>
              <strong>{formatoPrecio(subtotal)}</strong>
            </div>

            <div className="summary-row">
              <span>Extras:</span>
              <strong>{formatoPrecio(totalExtras)}</strong>
            </div>

            <div className="summary-row summary-final">
              <span>Total final:</span>
              <strong>{formatoPrecio(totalFinal)}</strong>
            </div>
          </div>

          <a
            href={`https://wa.me/56994902677?text=${encodeURIComponent(
              `Hola, quiero solicitar una cotización de limpieza.\n\n` +
                `Propiedad: ${propiedadSeleccionada.nombre}\n` +
                `Subtotal: ${formatoPrecio(subtotal)}\n` +
                `Servicios adicionales:\n${extrasTexto}\n\n` +
                `Extras: ${formatoPrecio(totalExtras)}\n` +
                `Total estimado: ${formatoPrecio(totalFinal)}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="summary-button"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
};