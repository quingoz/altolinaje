import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia de Alto Linaje, nuestra pasión por las carnes ahumadas y en vara, y el concepto de exclusividad que define cada evento.",
};

const VIDEOS = [
  {
    title: "Evento en Caracas",
    src: "/images/nosotros/catering-1.mp4",
  },
  {
    title: "Evento en Acarigua",
    src: "/images/nosotros/catering-2.mp4",
  },
  {
    title: "Evento en San Cristobal",
    src: "/images/nosotros/catering-3.mp4",
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
          <img
            src="/images/nosotros/nosotros-1.jpg"
            alt="Equipo de Alto Linaje en un evento al aire libre"
            className="w-full rounded-2xl"
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

        <div className="mt-24">
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
            Un vistazo a la experiencia, el fuego y los eventos que hacemos realidad.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <div
                key={video.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]"
              >
                <video
                  controls
                  preload="metadata"
                  className="w-full"
                >
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
