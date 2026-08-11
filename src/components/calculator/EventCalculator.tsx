"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Beef,
  Calendar,
  Carrot,
  Check,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileDown,
  Flame,
  Leaf,
  Lock,
  MapPin,
  MessageCircle,
  RefreshCcw,
  Shield,
  Unlock,
  Users,
  X,
  ZoomIn,
} from "lucide-react";

import { calculateQuote, type QuoteBreakdown } from "@/lib/calculator";
import { sendQuoteToWhatsApp } from "@/lib/whatsapp";
import rateConfigData from "@/data/rates.json";
import type { MenuModality, MenuOption, RateConfig } from "@/types/calculator";
import OwnerPDF, { type OwnerPDFRef } from "./OwnerPDF";

const rateConfig = rateConfigData as RateConfig;

type LucideIcon = React.ComponentType<{ className?: string }>;

const VENEZUELA_LOCATIONS: Record<string, string[]> = {
  Amazonas: ["Puerto Ayacucho", "Otra"],
  Anzoátegui: ["Barcelona", "Puerto La Cruz", "Otra"],
  Apure: ["San Fernando de Apure", "Otra"],
  Aragua: ["Maracay", "Otra"],
  Barinas: ["Barinas", "Otra"],
  Bolívar: ["Ciudad Bolívar", "Puerto Ordaz", "Otra"],
  Carabobo: ["Valencia", "Otra"],
  Cojedes: ["San Carlos", "Otra"],
  "Delta Amacuro": ["Tucupita", "Otra"],
  "Distrito Capital": ["Caracas", "Otra"],
  Falcón: ["Coro", "Otra"],
  Guárico: ["San Juan de los Morros", "Otra"],
  "La Guaira": ["La Guaira", "Maiquetía", "Otra"],
  Lara: ["Barquisimeto", "Otra"],
  Mérida: ["Mérida", "El Vigía", "Otra"],
  Miranda: ["Caracas", "Los Teques", "Otra"],
  Monagas: ["Maturín", "Otra"],
  "Nueva Esparta": ["Porlamar", "Otra"],
  Portuguesa: ["Guanare", "Otra"],
  Sucre: ["Cumaná", "Otra"],
  Táchira: ["San Cristóbal", "Cúcuta", "Rubio", "Otra"],
  Trujillo: ["Valera", "Trujillo", "Otra"],
  Yaracuy: ["San Felipe", "Otra"],
  Zulia: ["Maracaibo", "Otra"],
};

const MODALITY_ICONS: Record<string, LucideIcon> = {
  self_service: Users,
  doble_tanda: Clock,
  rodizio: RefreshCcw,
};

const RECIPE_ICONS: Record<string, LucideIcon> = {
  lomo_cerdo: Beef,
  puntas_ahumadas: Flame,
  costillas_bbq: Beef,
  costillas_ajillo: Beef,
  carne_vara: Flame,
  beef_wellington: Beef,
  pork_belly: Beef,
  picanha: Beef,
  churrasco_solomo: Beef,
  pollo_vara: ChefHat,
  pechuga_grill: ChefHat,
};

const STEP_TITLES = [
  "Datos del evento",
  "Modalidad",
  "Recetas",
  "Contornos",
  "Ensaladas",
];

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString("es-VE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/* ---------- Sub-componentes ---------- */

function NumberSlider({
  value,
  min,
  max,
  step,
  onChange,
  label,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  label: string;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-white/80">{label}</label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-2 w-full flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-[#fd0200]"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const next = Number(e.target.value);
            if (!Number.isNaN(next)) onChange(Math.max(min, Math.min(max, next)));
          }}
          className="w-24 rounded-lg border border-white/10 bg-[#16181d] px-3 py-2 text-center text-white outline-none transition-colors focus:border-[#fd0200]"
        />
      </div>
    </div>
  );
}

function StepIndicator({ currentStep, total = 5 }: { currentStep: number; total?: number }) {
  return (
    <div className="mb-10 flex items-center justify-between">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex flex-1 flex-col items-center gap-2">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
              step < currentStep && "border-[#fd0200] bg-[#fd0200] text-white",
              step === currentStep && "border-[#fd0200] bg-[#16181d] text-[#fd0200]",
              step > currentStep && "border-white/10 bg-[#16181d] text-white/40"
            )}
          >
            {step < currentStep ? <Check className="h-5 w-5" /> : step}
          </div>
          <span
            className={cn(
              "hidden text-xs font-medium sm:block",
              step === currentStep ? "text-white" : "text-white/40"
            )}
          >
            {STEP_TITLES[step - 1]}
          </span>
        </div>
      ))}
    </div>
  );
}

function ModalityCard({
  modality,
  selected,
  onClick,
}: {
  modality: MenuModality;
  selected: boolean;
  onClick: () => void;
}) {
  const Icon = MODALITY_ICONS[modality.id] || Users;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] p-6 text-left transition-colors",
        selected ? "border-[#fd0200]" : "border-white/10 hover:border-white/30"
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fd0200]/10 text-[#fd0200]">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-white">{modality.name}</h3>
      <p className="mt-2 text-sm text-white/60">{modality.description}</p>
      <p className="mt-4 text-xs font-medium text-[#fd0200]">
        Requiere{" "}
        {modality.minRecipes === modality.maxRecipes
          ? `${modality.minRecipes} recetas`
          : `de ${modality.minRecipes} a ${modality.maxRecipes} recetas`}
      </p>
    </motion.button>
  );
}

function RecipeCard({
  recipe,
  selected,
  onToggle,
  onView,
}: {
  recipe: MenuOption;
  selected: boolean;
  onToggle: () => void;
  onView: () => void;
}) {
  const Icon = RECIPE_ICONS[recipe.id] || ChefHat;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e]",
        selected ? "border-[#fd0200]" : "border-white/10"
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]">
        <Icon className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/50" />
        <button
          type="button"
          onClick={onView}
          className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
          aria-label="Ampliar"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-white">{recipe.name}</h4>
        {recipe.description && (
          <p className="mt-1 line-clamp-2 text-sm text-white/60">
            {recipe.description}
          </p>
        )}
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "mt-4 w-full rounded-lg py-2 text-sm font-medium transition-colors",
            selected
              ? "bg-[#fd0200] text-white hover:bg-red-600"
              : "border border-white/20 text-white hover:border-[#fd0200] hover:text-[#fd0200]"
          )}
        >
          {selected ? "Seleccionado" : "Seleccionar"}
        </button>
      </div>
    </motion.div>
  );
}

function OptionCard({
  option,
  selected,
  onClick,
  icon: Icon,
}: {
  option: MenuOption;
  selected: boolean;
  onClick: () => void;
  icon: LucideIcon;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center gap-4 rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] p-4 text-left transition-colors",
        selected ? "border-[#fd0200]" : "border-white/10 hover:border-white/30"
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fd0200]/10 text-[#fd0200]">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white">{option.name}</h4>
      </div>
      {selected && <Check className="h-5 w-5 text-[#fd0200]" />}
    </motion.button>
  );
}

function ValidationBanner({
  valid,
  children,
}: {
  valid: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border p-4 text-sm",
        valid
          ? "border-green-500/30 bg-green-500/10 text-green-400"
          : "border-[#fd0200]/30 bg-[#fd0200]/10 text-[#fd0200]"
      )}
    >
      {valid ? <Check className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
      {children}
    </div>
  );
}

function FloatingBar({
  quote,
  adjustedTotal,
  onWhatsApp,
  onPDF,
  onToggleOwner,
  ready,
  isOwner,
  ownerMargin,
  onMarginChange,
}: {
  quote: QuoteBreakdown;
  adjustedTotal: number;
  onWhatsApp: () => void;
  onPDF: () => void;
  onToggleOwner: () => void;
  ready: boolean;
  isOwner: boolean;
  ownerMargin: number;
  onMarginChange: (value: number) => void;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0b0c0e]/95 px-4 py-4 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xs text-white/50">Carnes</p>
            <p className="text-lg font-semibold text-white">{formatCurrency(quote.baseCost)}</p>
          </div>
          <div>
            <p className="text-xs text-white/50">Traslado</p>
            <p className="text-lg font-semibold text-white">
              {formatCurrency(quote.travelCost)}
              {quote.isTravelDoubled && (
                <span className="ml-1 text-xs text-[#fd0200]">x2</span>
              )}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/50">Hospedaje</p>
            <p className="text-lg font-semibold text-white">
              {formatCurrency(quote.lodgingCost)}
              {quote.grillMastersCount > 0 && (
                <span className="ml-1 text-xs text-white/50">
                  ({quote.grillMastersCount} parrilleros)
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#fd0200]">TOTAL</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(adjustedTotal)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          {isOwner && (
            <div className="flex w-full flex-col items-end gap-2 sm:flex-row sm:items-center">
              <span className="text-xs text-white/50">Ajuste admin (%)</span>
              <input
                type="number"
                min={-50}
                max={50}
                step={1}
                value={ownerMargin}
                onChange={(e) => onMarginChange(Number(e.target.value))}
                disabled={!ready}
                className={cn(
                  "w-24 rounded-lg border px-2 py-1 text-right text-sm outline-none",
                  ready
                    ? "border-white/10 bg-[#16181d] text-white focus:border-[#fd0200]"
                    : "cursor-not-allowed border-white/5 bg-white/5 text-white/30"
                )}
              />
              <button
                type="button"
                onClick={onPDF}
                disabled={!ready}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  ready
                    ? "bg-white text-black hover:bg-white/90"
                    : "cursor-not-allowed bg-white/10 text-white/40"
                )}
              >
                <FileDown className="h-4 w-4" />
                PDF oficial
              </button>
            </div>
          )}

          <p className="max-w-sm text-right text-xs text-white/40">
            Nota: El precio de hospedaje y logística está sujeto a ajustes en la
            negociación final.
            {isOwner && ownerMargin !== 0 && (
              <span className="ml-1 text-[#fd0200]">
                Ajuste aplicado: {ownerMargin > 0 ? "+" : ""}
                {ownerMargin}%.
              </span>
            )}
          </p>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onToggleOwner}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
                isOwner
                  ? "border-[#fd0200] bg-[#fd0200]/10 text-[#fd0200]"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              )}
              aria-label={isOwner ? "Cerrar modo administrador" : "Acceso administrador"}
            >
              {isOwner ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={onWhatsApp}
              disabled={!ready}
              className={cn(
                "flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors",
                ready
                  ? "bg-[#fd0200] text-white hover:bg-red-600"
                  : "cursor-not-allowed bg-white/10 text-white/40"
              )}
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Componente principal ---------- */

const OWNER_PIN = "1973";
const OWNER_STORAGE_KEY = "alto-linaje-owner";

function useClientOnly() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function getStoredOwner() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(OWNER_STORAGE_KEY) === "true";
}

function subscribeToOwner(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === OWNER_STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

function setStoredOwner(value: boolean) {
  if (typeof window === "undefined") return;
  const str = value ? "true" : "false";
  if (localStorage.getItem(OWNER_STORAGE_KEY) === str) return;
  localStorage.setItem(OWNER_STORAGE_KEY, str);
  window.dispatchEvent(
    new StorageEvent("storage", { key: OWNER_STORAGE_KEY, newValue: str })
  );
}

function useStoredOwner() {
  return useSyncExternalStore(
    subscribeToOwner,
    getStoredOwner,
    () => false
  );
}

export default function EventCalculator() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);

  const [pax, setPax] = useState(50);
  const [selectedState, setSelectedState] = useState("Táchira");
  const [selectedCity, setSelectedCity] = useState("San Cristóbal");
  const [distanceKm, setDistanceKm] = useState(0);
  const [eventDate, setEventDate] = useState("");

  const [selectedModalityId, setSelectedModalityId] = useState<string | null>(null);
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);
  const [selectedSideIds, setSelectedSideIds] = useState<string[]>([]);
  const [selectedSaladIds, setSelectedSaladIds] = useState<string[]>([]);

  const [modalRecipe, setModalRecipe] = useState<MenuOption | null>(null);

  const urlAdmin =
    searchParams?.get("admin") === "true" ||
    searchParams?.get("mode") === "owner";

  const isClient = useClientOnly();
  const storedOwner = useStoredOwner();

  const [forceLogout, setForceLogout] = useState(false);
  const [ownerMargin, setOwnerMargin] = useState(0);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  const pdfRef = useRef<OwnerPDFRef>(null);

  const [ownerPhone] = useState("584000000000");

  const isOwner = isClient && (storedOwner || urlAdmin) && !forceLogout;

  useEffect(() => {
    setStoredOwner(isOwner);
  }, [isOwner]);

  const currentCities = VENEZUELA_LOCATIONS[selectedState] || ["Otra"];

  const quote = useMemo(
    () =>
      calculateQuote({
        pax: Math.max(0, pax),
        state: selectedState,
        city: selectedCity,
        distanceKm: Math.max(0, distanceKm),
      }),
    [pax, selectedState, selectedCity, distanceKm]
  );

  const adjustedTotal = useMemo(
    () => quote.totalEstimate * (1 + ownerMargin / 100),
    [quote.totalEstimate, ownerMargin]
  );

  const selectedModality = useMemo(
    () => rateConfig.menuOptions.modalities.find((m) => m.id === selectedModalityId),
    [selectedModalityId]
  );

  const recipeCount = selectedRecipeIds.length;
  const recipeValid = selectedModality
    ? recipeCount >= selectedModality.minRecipes &&
      recipeCount <= selectedModality.maxRecipes
    : false;

  const sidesValid = selectedSideIds.length >= 1 && selectedSideIds.length <= 3;
  const saladsValid = selectedSaladIds.length <= 2;
  const step1Valid = pax >= 1 && selectedState.length > 0 && selectedCity.length > 0 && eventDate.length > 0;

  const canGoNext = () => {
    if (step === 1) return step1Valid;
    if (step === 2) return !!selectedModality;
    if (step === 3) return recipeValid;
    if (step === 4) return sidesValid;
    return true;
  };

  const allValid =
    step1Valid && !!selectedModality && recipeValid && sidesValid;

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const cities = VENEZUELA_LOCATIONS[newState] || ["Otra"];
    setSelectedCity(cities[0]);
  };

  const toggleRecipe = (id: string) => {
    setSelectedRecipeIds((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const toggleSide = (id: string) => {
    setSelectedSideIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleSalad = (id: string) => {
    setSelectedSaladIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getMenuNames = () => ({
    recipes: selectedRecipeIds
      .map((id) => rateConfig.menuOptions.recipes.find((r) => r.id === id)?.name)
      .filter(Boolean) as string[],
    sides: selectedSideIds
      .map((id) => rateConfig.menuOptions.sides.find((s) => s.id === id)?.name)
      .filter(Boolean) as string[],
    salads: selectedSaladIds
      .map((id) => rateConfig.menuOptions.salads.find((s) => s.id === id)?.name)
      .filter(Boolean) as string[],
  });

  const handleWhatsApp = () => {
    if (!allValid || !quote || !selectedModality) return;
    const { recipes, sides, salads } = getMenuNames();

    sendQuoteToWhatsApp({
      phone: ownerPhone,
      eventDate,
      city: selectedCity,
      state: selectedState,
      pax,
      modality: selectedModality.name,
      recipes,
      sides,
      salads,
      baseCost: quote.baseCost,
      travelCost: quote.travelCost,
      lodgingCost: quote.lodgingCost,
      total: adjustedTotal,
      isTravelDoubled: quote.isTravelDoubled,
      grillMastersCount: quote.grillMastersCount,
      ownerMargin: isOwner ? ownerMargin : undefined,
    });
  };

  const handlePinSubmit = () => {
    if (pin === OWNER_PIN) {
      setStoredOwner(true);
      setForceLogout(false);
      setPin("");
      setPinError(false);
      setShowPinModal(false);
    } else {
      setPinError(true);
      setPin("");
    }
  };

  const handleLogoutOwner = () => {
    setStoredOwner(false);
    setForceLogout(true);
    setOwnerMargin(0);
  };

  const stepContent = () => {
    switch (step) {
      case 1:
        return (
          <section className="space-y-8" key="step-1">
            <NumberSlider
              label="Cantidad de personas"
              value={pax}
              min={10}
              max={400}
              step={5}
              onChange={setPax}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Estado
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <select
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-white/10 bg-[#16181d] py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#fd0200]"
                  >
                    {Object.keys(VENEZUELA_LOCATIONS).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Ciudad
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-white/10 bg-[#16181d] py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#fd0200]"
                  >
                    {currentCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Distancia aproximada (km)
                </label>
                <input
                  type="number"
                  min={0}
                  step={10}
                  value={distanceKm}
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    if (!Number.isNaN(next)) setDistanceKm(Math.max(0, next));
                  }}
                  className="w-full rounded-lg border border-white/10 bg-[#16181d] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
                />
                <p className="text-xs text-white/40">
                  Usada para ciudades sin tarifa fija de traslado.
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Fecha del evento
                </label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#16181d] py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#fd0200]"
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case 2:
        return (
          <section className="grid gap-6 md:grid-cols-3" key="step-2">
            {rateConfig.menuOptions.modalities.map((modality) => (
              <ModalityCard
                key={modality.id}
                modality={modality}
                selected={selectedModalityId === modality.id}
                onClick={() => setSelectedModalityId(modality.id)}
              />
            ))}
          </section>
        );

      case 3:
        return (
          <section className="space-y-6" key="step-3">
            {selectedModality && (
              <ValidationBanner valid={recipeValid}>
                {recipeValid
                  ? `Has seleccionado ${recipeCount} de ${selectedModality.maxRecipes} recetas.`
                  : `Selecciona ${
                      selectedModality.minRecipes === selectedModality.maxRecipes
                        ? selectedModality.minRecipes
                        : `de ${selectedModality.minRecipes} a ${selectedModality.maxRecipes}`
                    } recetas para la modalidad ${selectedModality.name}.`}
              </ValidationBanner>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rateConfig.menuOptions.recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  selected={selectedRecipeIds.includes(recipe.id)}
                  onToggle={() => toggleRecipe(recipe.id)}
                  onView={() => setModalRecipe(recipe)}
                />
              ))}
            </div>
          </section>
        );

      case 4:
        return (
          <section className="space-y-6" key="step-4">
            <ValidationBanner valid={sidesValid}>
              {sidesValid
                ? `Has seleccionado ${selectedSideIds.length} contornos.`
                : "Selecciona de 1 a 3 contornos."}
            </ValidationBanner>

            <div className="grid gap-4 md:grid-cols-3">
              {rateConfig.menuOptions.sides.map((side) => (
                <OptionCard
                  key={side.id}
                  option={side}
                  selected={selectedSideIds.includes(side.id)}
                  onClick={() => toggleSide(side.id)}
                  icon={Carrot}
                />
              ))}
            </div>
          </section>
        );

      case 5:
        return (
          <section className="space-y-6" key="step-5">
            <ValidationBanner valid={saladsValid}>
              {saladsValid
                ? `Has seleccionado ${selectedSaladIds.length} ensaladas (máx. 2).`
                : "Puedes seleccionar hasta 2 ensaladas."}
            </ValidationBanner>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rateConfig.menuOptions.salads.map((salad) => (
                <OptionCard
                  key={salad.id}
                  option={salad}
                  selected={selectedSaladIds.includes(salad.id)}
                  onClick={() => toggleSalad(salad.id)}
                  icon={Leaf}
                />
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] px-4 py-12 font-sans text-white pb-40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Cotizador de eventos
            </h1>
            {isOwner && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#fd0200]/30 bg-[#fd0200]/10 px-3 py-1 text-xs font-semibold text-[#fd0200]">
                <Shield className="h-3.5 w-3.5" />
                Modo Administrador
              </span>
            )}
          </div>
          <p className="mt-2 text-white/60">
            Arma tu experiencia Alto Linaje paso a paso
          </p>
        </header>

        <StepIndicator currentStep={step} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-10"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {STEP_TITLES[step - 1]}
              </h2>
              <span className="text-sm text-white/40">
                Paso {step} de 5
              </span>
            </div>

            {stepContent()}

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                  step === 1
                    ? "invisible"
                    : "border border-white/10 text-white hover:border-white/30"
                )}
              >
                <ChevronLeft className="h-4 w-4" />
                Atrás
              </button>

              <button
                type="button"
                onClick={() => step < 5 && setStep((s) => s + 1)}
                disabled={!canGoNext()}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                  canGoNext()
                    ? "bg-[#fd0200] text-white hover:bg-red-600"
                    : "cursor-not-allowed bg-white/10 text-white/40"
                )}
              >
                {step === 5 ? "Finalizar" : "Siguiente"}
                {step < 5 && <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {quote && (
          <FloatingBar
            quote={quote}
            adjustedTotal={adjustedTotal}
            onWhatsApp={handleWhatsApp}
            onPDF={() => pdfRef.current?.download()}
            onToggleOwner={() =>
              isOwner ? handleLogoutOwner() : setShowPinModal(true)
            }
            ready={allValid}
            isOwner={isOwner}
            ownerMargin={ownerMargin}
            onMarginChange={setOwnerMargin}
          />
        )}
      </div>

      <AnimatePresence>
        {modalRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setModalRecipe(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#16181d]"
            >
              <button
                type="button"
                onClick={() => setModalRecipe(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]">
                {(() => {
                  const Icon = RECIPE_ICONS[modalRecipe.id] || ChefHat;
                  return <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/50" />;
                })()}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">
                  {modalRecipe.name}
                </h3>
                {modalRecipe.description && (
                  <p className="mt-3 text-white/70">{modalRecipe.description}</p>
                )}

                <button
                  type="button"
                  onClick={() => {
                    toggleRecipe(modalRecipe.id);
                  }}
                  className={cn(
                    "mt-6 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors",
                    selectedRecipeIds.includes(modalRecipe.id)
                      ? "border border-white/20 text-white hover:border-[#fd0200] hover:text-[#fd0200]"
                      : "bg-[#fd0200] text-white hover:bg-red-600"
                  )}
                >
                  {selectedRecipeIds.includes(modalRecipe.id)
                    ? "Quitar de la selección"
                    : "Agregar a la selección"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPinModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowPinModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#16181d] p-8"
            >
              <button
                type="button"
                onClick={() => setShowPinModal(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <Lock className="mx-auto h-10 w-10 text-[#fd0200]" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Acceso de administrador
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Ingresa el PIN de 4 dígitos.
                </p>
              </div>

              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setPin(value);
                  setPinError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
                className="mt-6 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-center text-2xl tracking-[0.5em] text-white outline-none transition-colors focus:border-[#fd0200]"
                placeholder="••••"
              />

              {pinError && (
                <p className="mt-3 text-center text-sm text-[#fd0200]">
                  PIN incorrecto. Inténtalo de nuevo.
                </p>
              )}

              <button
                type="button"
                onClick={handlePinSubmit}
                className="mt-6 w-full rounded-full bg-[#fd0200] py-3 font-semibold text-white transition-colors hover:bg-red-600"
              >
                Confirmar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isClient && quote && (
        <OwnerPDF
          ref={pdfRef}
          eventDate={eventDate}
          pax={pax}
          state={selectedState}
          city={selectedCity}
          distanceKm={distanceKm}
          assignedBranch={quote.assignedBranch}
          modalityName={selectedModality?.name ?? ""}
          recipes={selectedRecipeIds
            .map((id) => rateConfig.menuOptions.recipes.find((r) => r.id === id)?.name)
            .filter(Boolean) as string[]}
          sides={selectedSideIds
            .map((id) => rateConfig.menuOptions.sides.find((s) => s.id === id)?.name)
            .filter(Boolean) as string[]}
          salads={selectedSaladIds
            .map((id) => rateConfig.menuOptions.salads.find((s) => s.id === id)?.name)
            .filter(Boolean) as string[]}
          baseCost={quote.baseCost}
          travelCost={quote.travelCost}
          lodgingCost={quote.lodgingCost}
          total={quote.totalEstimate}
          ownerMargin={ownerMargin}
          isTravelDoubled={quote.isTravelDoubled}
          grillMastersCount={quote.grillMastersCount}
        />
      )}
    </div>
  );
}
