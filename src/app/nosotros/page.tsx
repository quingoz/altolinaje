import type { Metadata } from "next";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { Flame, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia de Alto Linaje, nuestra pasión por las carnes ahumadas y en vara, y el concepto de exclusividad que define cada evento.",
};

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: "Fuego y tradición",
    text: "Rescatamos técnicas ancestrales de ahumado y cocción lenta a la leña para entregar cortes con sabor inconfundible.",
  },
  {
    icon: Award,
    title: "Exclusividad",
    text: "Cada evento es una edición limitada. Seleccionamos recetas, contornos y ensaladas según la ocasión y el gusto del cliente.",
  },
  {
    icon: Users,
    title: "Parrilleros en sitio",
    text: "Llevamos el equipo, la experiencia y el servicio a donde lo necesites, con parrilleros capacitados para atender a tus invitados.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Nuestra historia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Alto Linaje nace del respeto por el fuego, la carne de calidad y la
            experiencia de compartir alrededor de una parrilla.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <PlaceholderImage
            alt="Equipo de Alto Linaje en un evento al aire libre"
            className="aspect-[4/3] w-full"
          />
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Carnes ahumadas y en vara
            </h2>
            <p className="text-white/70">
              Nuestro sello es la combinación entre el ahumado tradicional y la
              cocina en vara llanera. Corte a corte, buscamos que cada bocado
              cuente una historia de sabor, textura y aroma.
            </p>
            <p className="text-white/70">
              Trabajamos con proveedores de confianza y un equipo de parrilleros
              que entiende el ritual del fuego: la temperatura, el humo y el punto
              exacto de cada pieza.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#16181d] p-6"
            >
              <item.icon className="h-8 w-8 text-[#fd0200]" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold text-white">
            Exclusividad en cada evento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            No hacemos menús genéricos. Diseñamos la propuesta gastronómica de
            tu evento según el número de invitados, la ubicación, la temporada y
            lo que quieras celebrar.
          </p>
        </div>
      </div>
    </div>
  );
}
