/**
 * Tipos utilizados por la calculadora de cotizaciones de Alto Linaje.
 */

/** Parámetros de entrada que el usuario define para generar una cotización. */
export interface QuoteParams {
  /** Número de personas (pax) a atender en el evento. */
  pax: number;
  /** Estado (entidad federal) donde se realizará el evento. */
  state: string;
  /** Ciudad donde se realizará el evento. */
  city: string;
  /** Distancia en kilómetros desde la sucursal hasta el evento. */
  distanceKm: number;
  /** Identificador de la modalidad de servicio elegida (self_service, doble_tanda, rodizio). */
  modalityId: string;
  /** Identificadores de las recetas (cortes) seleccionadas. */
  recipeIds: string[];
  /** Identificadores de los acompañantes/guarniciones seleccionados. */
  sideIds: string[];
  /** Identificadores de las ensaladas seleccionadas. */
  saladIds: string[];
}

/** Resultado del cálculo de una cotización. */
export interface QuoteResult {
  /** Sucursal asignada para atender el evento (id del branch). */
  branchId: string;
  /** Nombre visible de la sucursal asignada. */
  branchName: string;
  /** Precio base por persona aplicado (regional o nacional). */
  pricePerPerson: number;
  /** Subtotal correspondiente al menú (pricePerPerson * pax). */
  menuSubtotal: number;
  /** Costo de traslado calculado. */
  travelCost: number;
  /** Costo de hospedaje calculado (si aplica). */
  lodgingCost: number;
  /** Número de parrilleros requeridos para el evento. */
  parrillerosRequired: number;
  /** Indica si el evento requiere logística pesada (por exceder el umbral de pax). */
  isHeavyLogistics: boolean;
  /** Indica si el evento requiere hospedaje según la ciudad. */
  requiresLodging: boolean;
  /** Total final de la cotización. */
  total: number;
}

/** Estados cubiertos por una sucursal. */
export interface BranchConfig {
  name: string;
  coveredStates: string[];
}

/** Modalidad de servicio del menú (self-service, doble tanda, rodizio, etc.). */
export interface MenuModality {
  id: string;
  name: string;
  minRecipes: number;
  maxRecipes: number;
  description: string;
}

/** Opción de menú genérica (receta, acompañante o ensalada). */
export interface MenuOption {
  id: string;
  name: string;
  description?: string;
}

/** Estructura completa del archivo de configuración de tarifas (rates.json). */
export interface RateConfig {
  baseRates: {
    regionalPricePerPerson: number;
    nationalPricePerPerson: number;
    regionalStates: string[];
  };
  branches: Record<string, BranchConfig>;
  travel: {
    costPerKm: number;
    heavyLogisticsPaxThreshold: number;
    heavyLogisticsMultiplier: number;
    customCityRates: Record<string, number>;
  };
  lodging: {
    costPerParrillero: number;
    paxPerParrillero: number;
    citiesRequiringLodging: string[];
  };
  menuOptions: {
    modalities: MenuModality[];
    recipes: MenuOption[];
    sides: MenuOption[];
    salads: MenuOption[];
  };
}
