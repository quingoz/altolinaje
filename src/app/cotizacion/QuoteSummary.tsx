"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, Users } from "lucide-react";
import { formatCurrency } from "@/lib/whatsapp";

interface SavedQuote {
  eventDate: string;
  city: string;
  state: string;
  pax: number;
  serviceType: "full" | "labor_only";
  modality: string;
  recipes: string[];
  sides: string[];
  salads: string[];
  baseCost: number;
  travelCost: number;
  isTravelPending: boolean;
  lodgingCost: number;
  total: number;
  isTravelDoubled: boolean;
  grillMastersCount: number;
  createdAt: string;
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
}

function MenuList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-[#fd0200]">{label}</p>
      <p className="mt-1 text-sm text-white/70">{items.join(", ") || "No aplica"}</p>
    </div>
  );
}

export default function QuoteSummary() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [quote, setQuote] = useState<SavedQuote | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id || !/^[a-f0-9]{32}$/.test(id)) {
      setError("El enlace de la cotización no es válido.");
      return;
    }

    fetch(`/api/get-quote.php?id=${encodeURIComponent(id)}`, { cache: "no-store" })
      .then(async (response) => {
        const result = (await response.json()) as {
          success?: boolean;
          quote?: SavedQuote;
          message?: string;
        };
        if (!response.ok || !result.success || !result.quote) {
          throw new Error(result.message || "No se encontró la cotización.");
        }
        setQuote(result.quote);
      })
      .catch((requestError: unknown) => {
        setError(requestError instanceof Error ? requestError.message : "No se encontró la cotización.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-[#fd0200]/30 bg-[#16181d] p-8 text-center">
        <h1 className="text-2xl font-semibold text-white">Cotización no disponible</h1>
        <p className="mt-3 text-white/60">{error}</p>
      </div>
    );
  }

  if (!quote) {
    return <p className="text-center text-white/60">Cargando cotización...</p>;
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#16181d]">
      <div className="border-b border-white/10 p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-[#fd0200]">Alto Linaje</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Resumen de cotización</h1>
        <p className="mt-2 text-sm text-white/50">Cotización guardada el {formatDate(quote.createdAt.slice(0, 10))}</p>
      </div>

      <div className="space-y-8 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <Users className="h-5 w-5 text-[#fd0200]" />
            <div><p className="text-xs text-white/50">Invitados</p><p className="text-white">{quote.pax} personas</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <MapPin className="h-5 w-5 text-[#fd0200]" />
            <div><p className="text-xs text-white/50">Ubicación</p><p className="text-white">{quote.city}, {quote.state}</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
            <Calendar className="h-5 w-5 text-[#fd0200]" />
            <div><p className="text-xs text-white/50">Fecha</p><p className="text-white">{formatDate(quote.eventDate)}</p></div>
          </div>
        </div>

        <div className="grid gap-5 rounded-2xl border border-white/10 p-5 sm:grid-cols-2">
          <MenuList label="Tipo de servicio" items={[quote.serviceType === "labor_only" ? "Solo mano de obra" : "Servicio completo"]} />
          <MenuList label="Modalidad" items={[quote.modality]} />
          <MenuList label="Recetas" items={quote.recipes} />
          <MenuList label="Contornos" items={quote.sides} />
          <MenuList label="Ensaladas" items={quote.salads} />
        </div>

        <div className="space-y-3 rounded-2xl bg-[#0b0c0e] p-5">
          <div className="flex justify-between gap-4 text-white/70"><span>Servicio</span><span>{formatCurrency(quote.baseCost)}</span></div>
          <div className="flex justify-between gap-4 text-white/70"><span>Logística/Traslado</span><span>{quote.isTravelPending ? "Por confirmar" : formatCurrency(quote.travelCost)}</span></div>
          <div className="flex justify-between gap-4 text-white/70"><span>Hospedaje{quote.grillMastersCount > 0 ? ` (${quote.grillMastersCount} parrilleros)` : ""}</span><span>{formatCurrency(quote.lodgingCost)}</span></div>
          <div className="flex justify-between gap-4 border-t border-white/10 pt-4 text-xl font-semibold text-white"><span>{quote.isTravelPending ? "Total parcial" : "Total estimado"}</span><span>{formatCurrency(quote.total)} USD</span></div>
        </div>

        <p className="text-sm text-white/50">Esta es la copia de la cotización guardada al momento de generar el mensaje de WhatsApp. Los montos están sujetos a confirmación y disponibilidad.</p>
      </div>
    </div>
  );
}
