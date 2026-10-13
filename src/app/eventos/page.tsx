import type { Metadata } from "next";
import EventGallery from "./EventGallery";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Galería de experiencias de catering y parrilla en sitio de Alto Linaje.",
};

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Galería de catering
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Un vistazo a las experiencias de Alto Linaje y a nuestra pasión por
            crear momentos memorables alrededor del fuego.
          </p>
        </div>

        <EventGallery />
      </div>
    </div>
  );
}
