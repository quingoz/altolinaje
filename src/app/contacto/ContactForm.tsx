"use client";

import { useState } from "react";
import { MapPin, Camera, Phone, Mail, MessageCircle } from "lucide-react";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const BRANCHES = [
  {
    name: "Sucursal San Cristóbal",
    region: "Táchira, Mérida, Trujillo, Barinas, Zulia",
  },
  {
    name: "Sucursal Caracas",
    region: "Resto del país (Centro, Llano y Oriente)",
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-8"
      >
        <h2 className="text-xl font-semibold text-white">Escríbenos</h2>
        <p className="mt-2 text-sm text-white/60">
          Completa el formulario. El mensaje llegará directamente a nuestro correo.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80">
              Nombre
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">
              Teléfono
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
            />
          </div>

          <button
            type="submit"
            className={cn(
              "w-full rounded-full py-3 font-semibold text-white transition-colors",
              sent
                ? "bg-green-600 hover:bg-green-700"
                : "bg-[#fd0200] hover:bg-red-600"
            )}
          >
            {sent ? "¡Mensaje enviado!" : "Enviar mensaje"}
          </button>
        </div>
      </form>

      <div className="space-y-8">
        <div className="rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Contacto directo</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3 text-white/70">
              <Phone className="h-5 w-5 text-[#fd0200]" />
              <span>+58 414-7046714</span>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="h-5 w-5 text-[#fd0200]" />
              <span>altolinajeve@gmail.com</span>
            </li>
            <li>
              <a
                href="https://instagram.com/altolinajeve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 transition-colors hover:text-[#fd0200]"
              >
                <Camera className="h-5 w-5 text-[#fd0200]" />
                <span>@altolinajeve</span>
              </a>
            </li>
          </ul>

          <a
            href="https://wa.me/584147046714"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#fd0200] py-3 font-semibold text-white transition-colors hover:bg-red-600"
          >
            <MessageCircle className="h-5 w-5" />
            Ir a WhatsApp
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Cobertura</h2>
          <p className="mt-2 text-sm text-white/60">
            Atendemos eventos en las siguientes zonas. No contamos con local físico; todo se coordina a distancia.
          </p>
          <ul className="mt-6 space-y-6">
            {BRANCHES.map((branch) => (
              <li
                key={branch.name}
                className="flex items-start gap-3 text-white/70"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#fd0200]" />
                <span>
                  <span className="block font-medium text-white">
                    {branch.name}
                  </span>
                  {branch.region}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
