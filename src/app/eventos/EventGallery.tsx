"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const CATEGORIES = ["Todas", "Boda", "Empresarial", "Familiar", "Cumpleaños"];

const EVENTS = [
  { id: "1", title: "Boda campestre", category: "Boda" },
  { id: "2", title: "Evento corporativo", category: "Empresarial" },
  { id: "3", title: "Cumpleaños familiar", category: "Cumpleaños" },
  { id: "4", title: "Fiesta de fin de año", category: "Empresarial" },
  { id: "5", title: "Boda íntima", category: "Boda" },
  { id: "6", title: "Encuentro familiar", category: "Familiar" },
  { id: "7", title: "Cumpleaños sorpresa", category: "Cumpleaños" },
  { id: "8", title: "Lanzamiento de marca", category: "Empresarial" },
  { id: "9", title: "Boda al atardecer", category: "Boda" },
  { id: "10", title: "Reunión familiar", category: "Familiar" },
];

export default function EventGallery() {
  const [filter, setFilter] = useState("Todas");

  const filtered =
    filter === "Todas" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? "border-[#fd0200] bg-[#fd0200] text-white"
                : "border-white/10 bg-[#16181d] text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((event) => (
            <motion.figure
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]"
            >
              <PlaceholderImage
                alt={`Foto del evento: ${event.title}`}
                className="aspect-[4/3] w-full"
              />
              <figcaption className="flex flex-1 flex-col p-4">
                <span className="text-xs font-medium text-[#fd0200]">
                  {event.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {event.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
