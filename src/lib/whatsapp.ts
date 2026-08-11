export interface WhatsAppQuoteParams {
  phone?: string;
  eventDate: string;
  city: string;
  state: string;
  pax: number;
  modality: string;
  recipes: string[];
  sides: string[];
  salads: string[];
  baseCost: number;
  travelCost: number;
  lodgingCost: number;
  total: number;
  isTravelDoubled?: boolean;
  grillMastersCount?: number;
  ownerMargin?: number;
}

const DEFAULT_PHONE = "584000000000";

export function formatCurrency(value: number) {
  return `$${value.toLocaleString("es-VE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function buildWhatsAppMessage(params: WhatsAppQuoteParams): string {
  const {
    eventDate,
    city,
    state,
    pax,
    modality,
    recipes,
    sides,
    salads,
    baseCost,
    travelCost,
    lodgingCost,
    total,
    isTravelDoubled,
    grillMastersCount,
    ownerMargin,
  } = params;

  const hasOwnerAdjustment = typeof ownerMargin === "number" && ownerMargin !== 0;
  const adjustment = hasOwnerAdjustment
    ? `• Ajuste administrativo: ${ownerMargin > 0 ? "+" : ""}${ownerMargin}%\n`
    : "";

  const travelNote = isTravelDoubled ? " (logística pesada x2)" : "";
  const lodgingNote =
    (grillMastersCount ?? 0) > 0 ? ` (${grillMastersCount} parrilleros)` : "";

  return [
    "🥩 *COTIZACIÓN DE EVENTO - ALTO LINAJE*",
    "---------------------------------------",
    "",
    "👤 *Datos del Evento:*",
    `• Fecha: ${eventDate || "Por definir"}`,
    `• Ubicación: ${city}, ${state}`,
    `• Invitados: ${pax} personas`,
    "",
    "🍽️ *Menú Seleccionado:*",
    `• Modalidad: ${modality || "-"}`,
    `• Recetas: ${recipes.join(", ") || "-"}`,
    `• Contornos: ${sides.join(", ") || "-"}`,
    `• Ensaladas: ${salads.join(", ") || "-"}`,
    "",
    "💰 *Desglose de Cotización:*",
    `• Servicio de Carnes: ${formatCurrency(baseCost)}`,
    `• Logística/Traslado: ${formatCurrency(travelCost)}${travelNote}`,
    `• Hospedaje${lodgingNote}: ${formatCurrency(lodgingCost)}`,
    hasOwnerAdjustment ? adjustment : "",
    `• *TOTAL ESTIMADO: ${formatCurrency(total)} USD*`,
    "",
    "📌 *Nota:* Cotización sujeta a confirmación y disponibilidad de fecha.",
  ].join("\n");
}

export function sendQuoteToWhatsApp(params: WhatsAppQuoteParams) {
  const phone = params.phone?.replace(/\D/g, "") || DEFAULT_PHONE;
  const message = buildWhatsAppMessage(params);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
