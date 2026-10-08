import rateConfigData from "@/data/rates.json";
import type { RateConfig } from "@/types/calculator";

const rateConfig = rateConfigData as RateConfig;

const DEFAULT_DISCLAIMER =
  "Los precios presentados son un estimado preliminar y pueden variar según disponibilidad, temporada y requerimientos específicos del evento.";

/** Parámetros mínimos necesarios para calcular una cotización. */
export interface CalculateQuoteParams {
  /** Número de invitados (pax). */
  pax: number;
  /** Estado donde se realizará el evento. */
  state: string;
  /** Ciudad donde se realizará el evento. */
  city: string;
}

/** Desglose del cálculo de una cotización. */
export interface QuoteBreakdown {
  /** Costo base de carnes (precio por persona * pax). */
  baseCost: number;
  /** Costo de traslado, considerando tarifa por ciudad y logística pesada. */
  travelCost: number;
  /** Costo de hospedaje de parrilleros, si aplica. */
  lodgingCost: number;
  /** Total estimado de la cotización. */
  totalEstimate: number;
  /** Nombre de la sucursal asignada. */
  assignedBranch: string;
  /** Indica si el traslado está pendiente de confirmación por no tener tarifa fija. */
  isTravelPending: boolean;
  /** Indica si el costo de traslado se duplicó por logística pesada. */
  isTravelDoubled: boolean;
  /** Cantidad de parrilleros requeridos (0 si no aplica hospedaje). */
  grillMastersCount: number;
  /** Aviso legal sobre la naturaleza del estimado. */
  disclaimer: string;
}

function getAssignedBranchName(state: string): string {
  const branches = Object.values(rateConfig.branches);

  const matchedBranch = branches.find(
    (branch) =>
      branch.coveredStates.includes(state) &&
      !branch.coveredStates.includes("DEFAULT")
  );

  const defaultBranch = branches.find((branch) =>
    branch.coveredStates.includes("DEFAULT")
  );

  return matchedBranch?.name ?? defaultBranch?.name ?? "Sucursal Caracas";
}

/**
 * Calcula el desglose de una cotización para un evento de Alto Linaje.
 *
 * La lógica sigue estrictamente las tarifas definidas en `src/data/rates.json`:
 * - Costo base de carnes según el estado (regional o nacional).
 * - Asignación de sucursal según cobertura del estado.
 * - Costo de traslado: tarifa fija por ciudad; queda pendiente si no está configurada.
 * - Costo de hospedaje: parrilleros (1 por cada 40 invitados) en ciudades que lo requieren.
 */
export function calculateQuote(
  params: CalculateQuoteParams
): QuoteBreakdown {
  const { pax, state, city } = params;

  // Costo base de carnes
  const isRegionalState = rateConfig.baseRates.regionalStates.includes(state);
  const pricePerPerson = isRegionalState
    ? rateConfig.baseRates.regionalPricePerPerson
    : rateConfig.baseRates.nationalPricePerPerson;
  const baseCost = pricePerPerson * pax;

  // Asignación de sucursal
  const assignedBranch = getAssignedBranchName(state);

  // Costo de traslado: tarifa fija por estado + ciudad; si no existe, queda por confirmar
  const stateCityRate = rateConfig.travel.cityRates[state]?.[city];
  const isTravelPending = typeof stateCityRate !== "number";
  const isTravelDoubled =
    !isTravelPending && pax >= rateConfig.travel.heavyLogisticsPaxThreshold;
  const travelCost = isTravelPending
    ? 0
    : isTravelDoubled
      ? stateCityRate * rateConfig.travel.heavyLogisticsMultiplier
      : stateCityRate;

  // Costo de hospedaje
  const requiresLodging =
    rateConfig.lodging.citiesRequiringLodging.includes(city);
  const grillMastersCount = requiresLodging
    ? Math.ceil(pax / rateConfig.lodging.paxPerParrillero)
    : 0;
  const lodgingCost = grillMastersCount * rateConfig.lodging.costPerParrillero;

  // Total estimado
  const totalEstimate = baseCost + travelCost + lodgingCost;

  return {
    baseCost,
    travelCost,
    lodgingCost,
    totalEstimate,
    assignedBranch,
    isTravelPending,
    isTravelDoubled,
    grillMastersCount,
    disclaimer: DEFAULT_DISCLAIMER,
  };
}
