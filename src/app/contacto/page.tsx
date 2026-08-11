import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Alto Linaje. Sucursales en San Cristóbal y Caracas, formulario directo y redes sociales.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Estamos listos para diseñar tu evento. Escríbenos o visita la
            sucursal más cercana.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
