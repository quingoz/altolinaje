"use client";

import Link from "next/link";
import { Camera, Flame, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/comidas", label: "Comidas" },
  { href: "/eventos", label: "Eventos" },
  { href: "/faqs", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
];

const BRANCHES = [
  { name: "Sucursal San Cristóbal", region: "Región Andina" },
  { name: "Sucursal Caracas", region: "Región Central" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3" aria-label="Alto Linaje - Inicio">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black text-[#fd0200]">
              <Flame className="h-5 w-5" />
            </span>
            <span className="text-xl font-semibold tracking-tight text-white">
              Alto <span className="text-[#fd0200]">Linaje</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Experiencias de parrilla de alto linaje. Carnes ahumadas, en vara y
            servicio en sitio para eventos memorables.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-[#fd0200]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Sucursales
          </h3>
          <ul className="mt-4 space-y-4">
            {BRANCHES.map((branch) => (
              <li key={branch.name} className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#fd0200]" />
                <span>
                  <span className="block text-white">{branch.name}</span>
                  {branch.region}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Síguenos
          </h3>
          <a
            href="https://instagram.com/altolinaje"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#fd0200]"
          >
            <Camera className="h-5 w-5" />
            @altolinaje
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Alto Linaje. Todos los derechos reservados.
      </div>
    </footer>
  );
}
