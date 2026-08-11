import type { Metadata } from "next";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resolvemos tus dudas sobre parrilleros en sitio, logística de eventos, métodos de pago y cotizaciones con Alto Linaje.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Preguntas frecuentes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Todo lo que necesitas saber sobre nuestro servicio, logística y
          cotizaciones.
        </p>
      </div>

      <FaqAccordion />
    </div>
  );
}
