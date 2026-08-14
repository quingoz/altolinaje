import type { Metadata } from "next";
import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { ChefHat, Carrot, Leaf } from "lucide-react";
import rateConfigData from "@/data/rates.json";
import type { RateConfig } from "@/types/calculator";

const rateConfig = rateConfigData as RateConfig;

export const metadata: Metadata = {
  title: "Comidas",
  description:
    "Explora el menú completo de Alto Linaje: cortes premium ahumados, recetas en vara, contornos y ensaladas para tu evento.",
};

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

export default function ComidasPage() {
  const { recipes, sides, salads } = rateConfig.menuOptions;

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
        />

        <MenuSection
          id="sides"
          items={sides}
          type="sides"
          note="Perfectos para acompañar los cortes principales."
        />

        <MenuSection
          id="salads"
          items={salads}
          type="salads"
          note="Frescas, livianas y equilibradas."
        />
      </div>
    </div>
  );
}

function MenuSection({
  id,
  items,
  type,
  note,
}: {
  id: string;
  items: { id: string; name: string; description?: string; image?: string }[];
  type: "recipes" | "sides" | "salads";
  note: string;
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
        className={`grid gap-6 ${
          type === "recipes"
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : type === "salads"
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#16181d] transition-colors hover:border-[#fd0200]/50"
          >
            {item.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Foto de ${item.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <PlaceholderImage
                alt={`Foto de ${item.name}`}
                className="aspect-[4/3] w-full"
              />
            )}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              {item.description && (
                <p className="mt-2 line-clamp-3 text-sm text-white/60">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
