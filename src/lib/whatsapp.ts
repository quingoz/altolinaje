export type ServiceType = "full" | "labor_only";

export interface WhatsAppQuoteParams {
  phone?: string;
  eventDate: string;
  city: string;
  state: string;
  pax: number;
  serviceType?: ServiceType;
  modality: string;
  recipes: string[];
  sides: string[];
  salads: string[];
  baseCost: number;
  travelCost: number;
  isTravelPending?: boolean;
  lodgingCost: number;
  total: number;
  isTravelDoubled?: boolean;
  grillMastersCount?: number;
  ownerMargin?: number;
  quoteUrl?: string;
}

const DEFAULT_PHONE = "584147046714";

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
    serviceType,
    modality,
    recipes,
    sides,
    salads,
    baseCost,
    travelCost,
    isTravelPending,
    lodgingCost,
    total,
    isTravelDoubled,
    grillMastersCount,
    ownerMargin,
    quoteUrl,
  } = params;

  const hasOwnerAdjustment = typeof ownerMargin === "number" && ownerMargin !== 0;
  const adjustment = hasOwnerAdjustment
    ? `• Ajuste administrativo: ${ownerMargin > 0 ? "+" : ""}${ownerMargin}%\n`
    : "";

  const travelNote = isTravelDoubled ? " (logística pesada x2)" : "";
  const lodgingNote =
    (grillMastersCount ?? 0) > 0 ? ` (${grillMastersCount} parrilleros)` : "";

  return [
    "*COTIZACIÓN DE EVENTO - ALTO LINAJE*",
    "---------------------------------------",
    "",
    "*Datos del Evento:*",
    `• Fecha: ${eventDate || "Por definir"}`,
    `• Ubicación: ${city}, ${state}`,
    `• Invitados: ${pax} personas`,
    `• Tipo de servicio: ${serviceType === "labor_only" ? "Solo mano de obra" : "Servicio completo"}`,
    "",
    "*Menú Seleccionado:*",
    `• Modalidad: ${modality || "-"}`,
    `• Recetas: ${recipes.join(", ") || "-"}`,
    `• Contornos: ${sides.join(", ") || "-"}`,
    `• Ensaladas: ${salads.join(", ") || "-"}`,
    "",
    "*Desglose de Cotización:*",
    `• Servicio: ${formatCurrency(baseCost)}`,
    `• Logística/Traslado: ${isTravelPending ? "Por confirmar" : `${formatCurrency(travelCost)}${travelNote}`}`,
    `• Hospedaje${lodgingNote}: ${formatCurrency(lodgingCost)}`,
    hasOwnerAdjustment ? adjustment : "",
    `• *${isTravelPending ? "TOTAL PARCIAL" : "TOTAL ESTIMADO"}: ${formatCurrency(total)} USD*`,
    "",
    isTravelPending
      ? "*Nota:* El traslado está por confirmar y no está incluido en el total parcial. Cotización sujeta a confirmación y disponibilidad de fecha."
      : "*Nota:* Cotización sujeta a confirmación y disponibilidad de fecha.",
    quoteUrl ? "" : null,
    quoteUrl ? "*Ver cotización guardada:*" : null,
    quoteUrl || null,
  ].filter((line): line is string => line !== null).join("\n");
}

export function sendQuoteToWhatsApp(params: WhatsAppQuoteParams, openedWindow?: Window | null) {
  const phone = params.phone?.replace(/\D/g, "") || DEFAULT_PHONE;
  const message = buildWhatsAppMessage(params);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (openedWindow) {
    openedWindow.location.href = url;
  } else if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
