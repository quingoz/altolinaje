import { Suspense } from "react";
import EventCalculator from "@/components/calculator/EventCalculator";

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#0b0c0e] px-4 pb-16 pt-24 text-center sm:pt-32 lg:pt-40"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto max-w-4xl">
          <h1
            id="hero-title"
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Parrilla de alto linaje
            <span className="block text-[#fd0200]">para eventos únicos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Carnes ahumadas, en vara y servicio gourmet en sitio. Diseña tu
            experiencia y recibe un estimado al instante.
          </p>
          <a
            href="#cotizador"
            className="mt-8 inline-flex rounded-full bg-[#fd0200] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            Cotizar mi evento
          </a>
        </div>
        <div className="pointer-events-none absolute -bottom-24 left-0 right-0 h-64 bg-gradient-to-t from-[#0b0c0e] to-transparent" />
      </section>

      <section id="cotizador" className="scroll-mt-20">
        <Suspense
          fallback={
            <div className="flex h-96 items-center justify-center text-white/60">
              Cargando cotizador…
            </div>
          }
        >
          <EventCalculator />
        </Suspense>
      </section>
    </>
  );
}
