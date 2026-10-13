import type { Metadata } from "next";
import Image from "next/image";
import { Check, MessageCircle, MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
  title: "Talleres",
  description:
    "Taller Triplete en Brasas de Alto Linaje: formación online sobre técnicas, carnes, salmueras, fuego y emplatados de alta cocina.",
};

const CONTENT = [
  "Genética animal",
  "Tipos de varas y tipos de leña",
  "Procesos de ósmosis y métodos de aceleración del proceso",
  "Técnicas para aplicar salmuera y mantequilla aromatizada: hidrosolubles y liposolubles",
  "Términos de cocción en carne de res, con y sin termómetro",
  "Elaboración de aceite de humo",
  "Piña caramelizada",
  "Emplatados de alta cocina",
];

const PHOTOS = [
  "/images/talleres/taller-1.jpg",
  "/images/talleres/taller-2.jpg",
  "/images/talleres/taller-3.JPG",
];

const VIDEOS = [
  "/images/talleres/video-taller-1.mp4",
  "/images/talleres/video-taller-2.mp4",
];

export default function TalleresPage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f8b900]/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <Image
            src="/images/talleres/logo-taller.png"
            alt="Taller Triplete en Brasas"
            width={1044}
            height={315}
            priority
            className="mx-auto h-auto w-full max-w-3xl"
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f8b900]">
                Contenido del taller
              </p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Domina el fuego y lleva tus técnicas al siguiente nivel
              </h1>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {CONTENT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/75">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f8b900]/15 text-[#f8b900]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-3xl border border-[#f8b900]/30 bg-gradient-to-br from-[#211d13] to-[#16181d] p-6 text-center sm:p-8">
              <MonitorPlay className="mx-auto h-10 w-10 text-[#f8b900]" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f8b900]">
                Modalidad presencial y online
              </p>
              <h2 className="mt-3 text-4xl font-bold">¡Suscríbete!</h2>
              <p className="mx-auto mt-4 max-w-sm text-white/70">
                Vive la experiencia principalmente de forma presencial o elige la modalidad online si se adapta mejor a ti.
              </p>
              <p className="mt-8 text-sm text-white/50">Modalidad online por tan solo</p>
              <p className="mt-1 text-6xl font-bold text-[#f8b900]">$40</p>
              <a
                href="https://wa.me/584147046714?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20suscribirme%20al%20Taller%20Triplete%20en%20Brasas%2C%20presencial%20u%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f8b900] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#ffd044]"
              >
                <MessageCircle className="h-5 w-5" />
                Suscribirme por WhatsApp
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f8b900]">La experiencia</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Aprende de forma práctica</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((src, index) => (
              <figure key={src} className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]">
                <Image
                  src={src}
                  alt={`Taller Triplete en Brasas ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f8b900]">Conoce el taller</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Mira nuestros videos</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            {VIDEOS.map((src, index) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]">
                <video controls preload="metadata" playsInline className="aspect-[9/16] w-full bg-black object-contain">
                  <source src={src} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
                <p className="p-4 text-center text-sm font-medium text-white/70">Video del taller {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
