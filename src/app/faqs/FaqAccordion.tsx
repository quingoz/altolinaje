"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "¿El parrillero va incluido en el servicio?",
    answer:
      "Sí. Todos nuestros paquetes incluyen parrilleros profesionales en sitio, encargados de cocinar, servir y coordinar la experiencia gastronómica del evento.",
  },
  {
    question: "¿Cuántos parrilleros necesita mi evento?",
    answer:
      "Calculamos un parrillero por cada 40 invitados en ciudades que requieren hospedaje. El desglose se ajusta automáticamente según la pax y la ubicación.",
  },
  {
    question: "¿Cómo se calcula el costo de traslado?",
    answer:
      "Usamos tarifas fijas por ciudad (San Cristóbal, Caracas, Cúcuta y Barinas) o multiplicamos la distancia en kilómetros por 0.90. Si el evento supera los 180 invitados, el traslado se duplica por logística pesada.",
  },
  {
    question: "¿Pueden atender eventos fuera de Venezuela?",
    answer:
      "Trabajamos principalmente en Venezuela, con sucursales en San Cristóbal (Andina/Occidente) y Caracas (Centro). Eventos en ciudades especiales se evalúan caso por caso.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, pago móvil (donde aplique) y efectivo. El 50% del total suele solicitarse como reserva para confirmar la fecha.",
  },
  {
    question: "¿Cuánto tiempo antes debo reservar?",
    answer:
      "Recomendamos reservar con al menos 2 o 3 semanas de anticipación, especialmente en temporada alta, para garantizar disponibilidad de equipo y personal.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-4">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between p-5 text-left"
            aria-expanded={open === i}
          >
            <span className="pr-4 font-medium text-white">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-[#fd0200] transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
