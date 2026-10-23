"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "¿Qué incluye el costo de los servicios?",
    answer:
      "Nuestros costos cubren el traslado, toldo (de ser necesario), así como toda la maquinaria y utensilios requeridos para la realización del servicio.",
  },
  {
    question: "¿El monto de reserva representa un costo adicional?",
    answer:
      "No, el monto de la reserva no es adicional; forma parte del total del servicio contratado.",
  },
  {
    question: "¿Qué sucede si debo suspender mi evento? ¿Tienen política de reembolso?",
    answer:
      "No se realizan devoluciones de dinero en caso de suspensión. Sin embargo, el evento se reprograma para una nueva fecha que decidas y serás atendido con total prioridad.",
  },
  {
    question: "¿Los niños pagan la tarifa completa del servicio?",
    answer:
      "Los niños de hasta 3 años de edad están completamente exentos de costo. Para niños de entre 4 y 7 años, se abona únicamente el 50% de la tarifa establecida.",
  },
  {
    question: "¿Con cuánta anticipación debe cancelarse la totalidad del evento?",
    answer:
      "El pago total del evento debe estar liquidado al menos 5 días antes de la fecha pautada.",
  },
  {
    question: "¿Qué ocurre si se retrasa la hora acordada para servir la comida?",
    answer:
      "En caso de presentarse un retraso mayor a 3 horas por parte del cliente respecto a la hora acordada de servicio, aplicará una penalidad.",
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
