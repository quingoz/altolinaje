"use client";

import { useState } from "react";
import Image from "next/image";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { ChefHat, Carrot, Leaf, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import rateConfigData from "@/data/rates.json";
import type { RateConfig, MenuOption } from "@/types/calculator";

const rateConfig = rateConfigData as RateConfig;

const sectionIcon = {
  recipes: ChefHat,
  sides: Carrot,
  salads: Leaf,
};

const sectionTitle = {
  recipes: "Recetas",
  sides: "Contornos",
  salads: "Ensaladas",
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function ClientMenuPage() {
  const { recipes, sides, salads } = rateConfig.menuOptions;
  const [selectedItem, setSelectedItem] = useState<
    (MenuOption & { type: "recipes" | "sides" | "salads" }) | null
  >(null);

  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Menú Alto Linaje
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Selección de cortes, contornos y ensaladas pensadas para una
            experiencia de parrilla memorable.
          </p>
        </div>

        <MenuSection
          id="recipes"
          items={recipes}
          type="recipes"
          note="Cada receta puede combinarse según la modalidad de servicio que elijas."
          onView={setSelectedItem}
        />

        <MenuSection
          id="sides"
          items={sides}
          type="sides"
          note="Perfectos para acompañar los cortes principales."
          onView={setSelectedItem}
        />

        <MenuSection
          id="salads"
          items={salads}
          type="salads"
          note="Frescas, livianas y equilibradas."
          onView={setSelectedItem}
        />
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#16181d]"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
              >
                <X className="h-5 w-5" />
              </button>

              <ImageCarousel
                images={selectedItem.images || []}
                alt={selectedItem.name}
                fallback={sectionIcon[selectedItem.type]}
                aspectClass="aspect-video"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">
                  {selectedItem.name}
                </h3>
                {selectedItem.description && (
                  <p className="mt-3 text-white/70">
                    {selectedItem.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuSection({
  id,
  items,
  type,
  note,
  onView,
}: {
  id: string;
  items: MenuOption[];
  type: "recipes" | "sides" | "salads";
  note: string;
  onView: (item: MenuOption & { type: typeof type }) => void;
}) {
  const Icon = sectionIcon[type];

  return (
    <section id={id} className="mt-20 scroll-mt-28">
      <div className="mb-8 flex items-center gap-3">
        <Icon className="h-6 w-6 text-[#fd0200]" />
        <h2 className="text-2xl font-semibold text-white">
          {sectionTitle[type]}
        </h2>
      </div>
      <p className="mb-8 max-w-3xl text-white/60">{note}</p>

      <div
        className={cn(
          "grid gap-6",
          type === "salads"
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            type={type}
            onView={() => onView({ ...item, type })}
          />
        ))}
      </div>
    </section>
  );
}

function MenuCard({
  item,
  type,
  onView,
}: {
  item: MenuOption;
  type: "recipes" | "sides" | "salads";
  onView: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const Icon = sectionIcon[type];
  const firstImage = item.images?.[0];

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#16181d] transition-colors hover:border-[#fd0200]/50">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]">
        {firstImage && !imgError ? (
          <Image
            src={firstImage}
            alt={`Foto de ${item.name}`}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <Icon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/30" />
        )}

        <button
          type="button"
          onClick={onView}
          className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
          aria-label="Ver detalles"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        {item.description && (
          <p className="mt-2 line-clamp-3 text-sm text-white/60">
            {item.description}
          </p>
        )}
        <button
          type="button"
          onClick={onView}
          className="mt-4 text-sm font-medium text-[#fd0200] transition-colors hover:text-white"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}
