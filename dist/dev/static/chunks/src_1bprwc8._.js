(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/calculator/EventCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/beef.mjs [app-client] (ecmascript) <export default as Beef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$carrot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carrot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/carrot.mjs [app-client] (ecmascript) <export default as Carrot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.mjs [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.mjs [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.mjs [app-client] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calculator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/rates.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$OwnerPDF$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calculator/OwnerPDF.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const rateConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const VENEZUELA_LOCATIONS = {
    Amazonas: [
        "Puerto Ayacucho",
        "Otra"
    ],
    Anzoátegui: [
        "Barcelona",
        "Puerto La Cruz",
        "El Tigre",
        "Otra"
    ],
    Apure: [
        "San Fernando de Apure",
        "Otra"
    ],
    Aragua: [
        "Maracay",
        "Otra"
    ],
    Barinas: [
        "Barinas",
        "Santa Bárbara de Barinas",
        "Barinitas",
        "Otra"
    ],
    Bolívar: [
        "Ciudad Bolívar",
        "Puerto Ordaz",
        "Otra"
    ],
    Carabobo: [
        "Valencia",
        "Otra"
    ],
    Cojedes: [
        "San Carlos",
        "Otra"
    ],
    "Delta Amacuro": [
        "Tucupita",
        "Otra"
    ],
    "Distrito Capital": [
        "Caracas",
        "Otra"
    ],
    Falcón: [
        "Coro",
        "Otra"
    ],
    Guárico: [
        "San Juan de los Morros",
        "Calabozo",
        "Otra"
    ],
    "La Guaira": [
        "La Guaira",
        "Maiquetía",
        "Otra"
    ],
    Lara: [
        "Barquisimeto",
        "Carora",
        "El Tocuyo",
        "Otra"
    ],
    Mérida: [
        "Mérida",
        "El Vigía",
        "Otra"
    ],
    Miranda: [
        "Caracas",
        "Los Teques",
        "Higuerote",
        "Otra"
    ],
    Monagas: [
        "Maturín",
        "Otra"
    ],
    "Nueva Esparta": [
        "Porlamar",
        "Margarita",
        "Otra"
    ],
    Portuguesa: [
        "Guanare",
        "Acarigua",
        "Araure",
        "Otra"
    ],
    Sucre: [
        "Cumaná",
        "Otra"
    ],
    Táchira: [
        "San Cristóbal",
        "Cúcuta",
        "Rubio",
        "La Grita",
        "Pregonero",
        "San Antonio del Táchira",
        "Otra"
    ],
    Trujillo: [
        "Valera",
        "Trujillo",
        "Otra"
    ],
    Yaracuy: [
        "San Felipe",
        "Otra"
    ],
    Zulia: [
        "Maracaibo",
        "Otra"
    ]
};
const RECIPE_ICONS = {
    lomo_cerdo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    puntas_ahumadas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
    costillas_bbq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    costillas_ajillo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    carne_vara: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
    beef_wellington: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    pork_belly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    picanha: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    churrasco_solomo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beef$3e$__["Beef"],
    pollo_vara: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"],
    pechuga_grill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"]
};
const MAX_SIDES = 3;
const MAX_SALADS = 2;
const STEP_TITLES = [
    "Datos del evento",
    "Modalidad",
    "Recetas",
    "Contornos",
    "Ensaladas",
    "Resumen"
];
const TOTAL_STEPS = STEP_TITLES.length;
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function formatCurrency(value) {
    return `$${value.toLocaleString("es-VE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
function formatEventDate(value) {
    if (!value) return "";
    const parts = value.split("/");
    if (parts.length !== 3) return value;
    const [day, month, year] = parts;
    if (!day || !month || !year) return value;
    return `${day} - ${month} - ${year}`;
}
function parseEventDateToISO(value) {
    if (!value) return "";
    const [day, month, year] = value.split("/");
    if (!day || !month || !year || year.length !== 4) return "";
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}
/* ---------- Sub-componentes ---------- */ function NumberSlider({ value, min, max, step, onChange, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-white/80",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (e)=>onChange(Number(e.target.value)),
                        className: "h-2 w-full flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-[#fd0200]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (e)=>{
                            const next = Number(e.target.value);
                            if (!Number.isNaN(next)) onChange(Math.max(min, Math.min(max, next)));
                        },
                        className: "w-24 rounded-lg border border-white/10 bg-[#16181d] px-3 py-2 text-center text-white outline-none transition-colors focus:border-[#fd0200]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c = NumberSlider;
function StepIndicator({ currentStep, total = 5 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-10 flex items-center justify-between",
        children: Array.from({
            length: total
        }, (_, i)=>i + 1).map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cn("flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors", step < currentStep && "border-[#fd0200] bg-[#fd0200] text-white", step === currentStep && "border-[#fd0200] bg-[#16181d] text-[#fd0200]", step > currentStep && "border-white/10 bg-[#16181d] text-white/40"),
                        children: step < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 191,
                            columnNumber: 35
                        }, this) : step
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: cn("hidden text-xs font-medium sm:block", step === currentStep ? "text-white" : "text-white/40"),
                        children: STEP_TITLES[step - 1]
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, step, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_c1 = StepIndicator;
function ImageCarousel({ images, name, recipeId }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imgErrors, setImgErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const Icon = RECIPE_ICONS[recipeId] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"];
    const validImages = images.filter((_, i)=>!imgErrors[i]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCarousel.useEffect": ()=>{
            if (validImages.length <= 1) return;
            const interval = setInterval({
                "ImageCarousel.useEffect.interval": ()=>{
                    setIndex({
                        "ImageCarousel.useEffect.interval": (prev)=>(prev + 1) % validImages.length
                    }["ImageCarousel.useEffect.interval"]);
                }
            }["ImageCarousel.useEffect.interval"], 4000);
            return ({
                "ImageCarousel.useEffect": ()=>clearInterval(interval)
            })["ImageCarousel.useEffect"];
        }
    }["ImageCarousel.useEffect"], [
        validImages.length
    ]);
    const currentIndex = Math.min(index, Math.max(0, validImages.length - 1));
    const prev = ()=>setIndex((i)=>(i - 1 + validImages.length) % validImages.length);
    const next = ()=>setIndex((i)=>(i + 1) % validImages.length);
    const handleImageError = (originalIndex)=>{
        setImgErrors((prev)=>({
                ...prev,
                [originalIndex]: true
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]",
        children: validImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: validImages[currentIndex],
                            alt: `${name} - ${currentIndex + 1}`,
                            fill: true,
                            className: "object-cover",
                            onError: ()=>handleImageError(currentIndex)
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 253,
                            columnNumber: 15
                        }, this)
                    }, currentIndex, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 244,
                    columnNumber: 11
                }, this),
                validImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: prev,
                            className: "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]",
                            "aria-label": "Imagen anterior",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 271,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: next,
                            className: "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]",
                            "aria-label": "Imagen siguiente",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 279,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 273,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5",
                            children: validImages.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIndex(i),
                                    className: cn("h-1.5 rounded-full transition-colors", i === currentIndex ? "w-4 bg-[#fd0200]" : "w-1.5 bg-white/50"),
                                    "aria-label": `Ver imagen ${i + 1}`
                                }, i, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 284,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 282,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 264,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
            lineNumber: 243,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/50"
        }, void 0, false, {
            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
            lineNumber: 300,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_s(ImageCarousel, "OmndIe7IFQSL2cFc7ses8zkKn7s=");
_c2 = ImageCarousel;
function ModalityCard({ modality, selected, disabled, onClick }) {
    _s1();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        onClick: onClick,
        disabled: disabled,
        whileHover: disabled ? undefined : {
            scale: 1.02
        },
        whileTap: disabled ? undefined : {
            scale: 0.98
        },
        className: cn("relative flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] text-left transition-colors", selected ? "border-[#fd0200]" : "border-white/10", disabled ? "cursor-not-allowed opacity-50" : "hover:border-white/30"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-56 w-full overflow-hidden sm:h-64",
                children: modality.image && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: modality.image,
                    alt: modality.name,
                    fill: true,
                    className: "object-cover",
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "h-16 w-16 text-[#fd0200]/30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 345,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 344,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white",
                        children: modality.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 flex-1 text-sm text-white/60",
                        children: modality.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xs font-medium text-[#fd0200]",
                        children: [
                            typeof modality.minPax === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: [
                                    "Mínimo ",
                                    modality.minPax,
                                    " personas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            typeof modality.recommendedMinPax === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: [
                                    "Recomendada a partir de ",
                                    modality.recommendedMinPax,
                                    " personas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Requiere mínimo ",
                                    modality.minPax,
                                    " personas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Requiere",
                                    " ",
                                    modality.minRecipes === modality.maxRecipes ? `${modality.minRecipes} recetas` : `de ${modality.minRecipes} a ${modality.maxRecipes} recetas`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
_s1(ModalityCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c3 = ModalityCard;
function RecipeCard({ recipe, selected, disabled, onToggle, onView }) {
    _s2();
    const Icon = RECIPE_ICONS[recipe.id] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"];
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const firstImage = recipe.images?.[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: disabled ? undefined : {
            y: -4
        },
        className: cn("group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] transition-opacity", selected ? "border-[#fd0200]" : "border-white/10", disabled && !selected && "opacity-40 grayscale"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]",
                children: [
                    firstImage && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: firstImage,
                        alt: recipe.name,
                        fill: true,
                        className: "object-cover",
                        onError: ()=>setImgError(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onView,
                        className: "absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]",
                        "aria-label": "Ampliar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-white",
                        children: recipe.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    recipe.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 line-clamp-2 text-sm text-white/60",
                        children: recipe.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggle,
                        disabled: disabled && !selected,
                        className: cn("mt-4 w-full rounded-lg py-2 text-sm font-medium transition-colors", selected ? "bg-[#fd0200] text-white hover:bg-red-600" : disabled ? "cursor-not-allowed border border-white/10 text-white/30" : "border border-white/20 text-white hover:border-[#fd0200] hover:text-[#fd0200]"),
                        children: selected ? "Seleccionado" : disabled ? "Límite alcanzado" : "Seleccionar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s2(RecipeCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c4 = RecipeCard;
function OptionCard({ option, selected, disabled, onClick, icon: Icon }) {
    _s3();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const firstImage = option.images?.[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        onClick: onClick,
        disabled: disabled && !selected,
        whileHover: disabled && !selected ? undefined : {
            scale: 1.02
        },
        whileTap: disabled && !selected ? undefined : {
            scale: 0.98
        },
        className: cn("relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] text-left transition-colors", selected ? "border-[#fd0200]" : "border-white/10 hover:border-white/30", disabled && !selected && "cursor-not-allowed opacity-40 hover:border-white/10"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]",
                children: firstImage && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: firstImage,
                    alt: option.name,
                    fill: true,
                    className: "object-cover",
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 482,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/30"
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-white",
                        children: option.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    option.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 line-clamp-2 text-sm text-white/60",
                        children: option.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cn("rounded-lg px-3 py-1.5 text-xs font-medium", selected ? "bg-[#fd0200] text-white" : "border border-white/10 text-white/50"),
                                children: selected ? "Seleccionado" : "Seleccionar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-5 w-5 text-[#fd0200]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 511,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s3(OptionCard, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c5 = OptionCard;
function ValidationBanner({ valid, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("flex items-center gap-3 rounded-xl border p-4 text-sm", valid ? "border-green-500/30 bg-green-500/10 text-green-400" : "border-[#fd0200]/30 bg-[#fd0200]/10 text-[#fd0200]"),
        children: [
            valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 534,
                columnNumber: 16
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 534,
                columnNumber: 48
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 526,
        columnNumber: 5
    }, this);
}
_c6 = ValidationBanner;
function SummaryCard({ title, onEdit, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-gradient-to-br from-[#16181d] to-[#0b0c0e] p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onEdit,
                        className: "text-xs font-medium text-[#fd0200] hover:underline",
                        children: "Editar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
_c7 = SummaryCard;
function SummaryRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-3 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/50",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-white",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 568,
        columnNumber: 5
    }, this);
}
_c8 = SummaryRow;
function FloatingBar({ quote, adjustedTotal, onWhatsApp, onPDF, onToggleOwner, ready, isOwner, ownerMargin, onMarginChange }) {
    _s4();
    const [detailsOpen, setDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ownerControls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-end gap-2 sm:flex-row sm:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-white/50",
                        children: "Ajuste admin (%)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 602,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: -50,
                        max: 50,
                        step: 1,
                        value: ownerMargin,
                        onChange: (e)=>onMarginChange(Number(e.target.value)),
                        disabled: !ready,
                        className: cn("w-24 rounded-lg border px-2 py-1 text-right text-sm outline-none", ready ? "border-white/10 bg-[#16181d] text-white focus:border-[#fd0200]" : "cursor-not-allowed border-white/5 bg-white/5 text-white/30")
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onPDF,
                        disabled: !ready,
                        className: cn("flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors", ready ? "bg-white text-black hover:bg-white/90" : "cursor-not-allowed bg-white/10 text-white/40"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this),
                            "PDF oficial"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 618,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 601,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-sm rounded-lg border border-[#fd0200]/30 bg-[#fd0200]/10 p-3 text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-[#fd0200]",
                    children: [
                        "Nota: El precio de hospedaje y logística está sujeto a ajustes en la negociación final.",
                        isOwner && ownerMargin !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-1",
                            children: [
                                "Ajuste aplicado: ",
                                ownerMargin > 0 ? "+" : "",
                                ownerMargin,
                                "%."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 640,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 636,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 599,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 0.2,
            duration: 0.4
        },
        className: "sticky bottom-0 z-50 border-t border-white/10 bg-[#0b0c0e]/95 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-3 lg:py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDetailsOpen((o)=>!o),
                                    className: "flex items-center gap-2 text-left",
                                    "aria-expanded": detailsOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-wide text-[#fd0200]",
                                                    children: quote.isTravelPending ? "Total parcial" : "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-white",
                                                    children: formatCurrency(adjustedTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 667,
                                            columnNumber: 15
                                        }, this),
                                        detailsOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-5 w-5 text-[#fd0200]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 674,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-5 w-5 text-[#fd0200]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 661,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onToggleOwner,
                                            className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors", isOwner ? "border-[#fd0200] bg-[#fd0200]/10 text-[#fd0200]" : "border-white/10 text-white/50"),
                                            "aria-label": isOwner ? "Cerrar modo administrador" : "Acceso administrador",
                                            children: isOwner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 692,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 692,
                                                columnNumber: 61
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onWhatsApp,
                                            disabled: !ready,
                                            className: cn("flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors", ready ? "bg-[#fd0200] text-white hover:bg-red-600" : "cursor-not-allowed bg-white/10 text-white/40"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 17
                                                }, this),
                                                "Cotizar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 680,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: detailsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-white/50",
                                                        children: "Servicio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: formatCurrency(quote.baseCost)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 722,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-white/50",
                                                        children: "Traslado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: [
                                                            quote.isTravelPending ? "Por confirmar" : formatCurrency(quote.travelCost),
                                                            quote.isTravelDoubled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 text-xs text-[#fd0200]",
                                                                children: "x2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-white/50",
                                                        children: "Hospedaje"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: formatCurrency(quote.lodgingCost)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 735,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 721,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-col items-end gap-3",
                                        children: ownerControls
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 714,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 712,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50",
                                            children: "Servicio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-white",
                                            children: formatCurrency(quote.baseCost)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 753,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 751,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50",
                                            children: "Traslado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-white",
                                            children: [
                                                quote.isTravelPending ? "Por confirmar" : formatCurrency(quote.travelCost),
                                                quote.isTravelDoubled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1 text-xs text-[#fd0200]",
                                                    children: "x2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50",
                                            children: "Hospedaje"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 765,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-white",
                                            children: [
                                                formatCurrency(quote.lodgingCost),
                                                quote.grillMastersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1 text-xs text-white/50",
                                                    children: [
                                                        "(",
                                                        quote.grillMastersCount,
                                                        " parrilleros)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 766,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#fd0200]",
                                            children: quote.isTravelPending ? "TOTAL PARCIAL" : "TOTAL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 776,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-white",
                                            children: formatCurrency(adjustedTotal)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 775,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 750,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 lg:items-end",
                            children: [
                                ownerControls,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onToggleOwner,
                                            className: cn("flex h-10 w-10 items-center justify-center rounded-full border transition-colors", isOwner ? "border-[#fd0200] bg-[#fd0200]/10 text-[#fd0200]" : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"),
                                            "aria-label": isOwner ? "Cerrar modo administrador" : "Acceso administrador",
                                            children: isOwner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 798,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 798,
                                                columnNumber: 61
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 787,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onWhatsApp,
                                            disabled: !ready,
                                            className: cn("flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors", ready ? "bg-[#fd0200] text-white hover:bg-red-600" : "cursor-not-allowed bg-white/10 text-white/40"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 17
                                                }, this),
                                                "Cotizar por WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 801,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 786,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 783,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 749,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
            lineNumber: 657,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 651,
        columnNumber: 5
    }, this);
}
_s4(FloatingBar, "VpbL7/O5mO3fKG2ZDl6p4+yDocM=");
_c9 = FloatingBar;
/* ---------- Componente principal ---------- */ const OWNER_PIN = "1973";
const OWNER_STORAGE_KEY = "alto-linaje-owner";
function useClientOnly() {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useClientOnly.useSyncExternalStore": ()=>({
                "useClientOnly.useSyncExternalStore": ()=>{}
            })["useClientOnly.useSyncExternalStore"]
    }["useClientOnly.useSyncExternalStore"], {
        "useClientOnly.useSyncExternalStore": ()=>true
    }["useClientOnly.useSyncExternalStore"], {
        "useClientOnly.useSyncExternalStore": ()=>false
    }["useClientOnly.useSyncExternalStore"]);
}
_s5(useClientOnly, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function getStoredOwner() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(OWNER_STORAGE_KEY) === "true";
}
function subscribeToOwner(callback) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const onStorage = (e)=>{
        if (e.key === OWNER_STORAGE_KEY) callback();
    };
    window.addEventListener("storage", onStorage);
    return ()=>window.removeEventListener("storage", onStorage);
}
function setStoredOwner(value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const str = value ? "true" : "false";
    if (localStorage.getItem(OWNER_STORAGE_KEY) === str) return;
    localStorage.setItem(OWNER_STORAGE_KEY, str);
    window.dispatchEvent(new StorageEvent("storage", {
        key: OWNER_STORAGE_KEY,
        newValue: str
    }));
}
function useStoredOwner() {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToOwner, getStoredOwner, {
        "useStoredOwner.useSyncExternalStore": ()=>false
    }["useStoredOwner.useSyncExternalStore"]);
}
_s6(useStoredOwner, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function EventCalculator() {
    _s7();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pax, setPax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Táchira");
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("San Cristóbal");
    const [serviceType, setServiceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("full");
    const [eventDate, setEventDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedModalityId, setSelectedModalityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRecipeIds, setSelectedRecipeIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSideIds, setSelectedSideIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSaladIds, setSelectedSaladIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modalRecipe, setModalRecipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const nextButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stepCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventCalculator.useEffect": ()=>{
            stepCardRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }["EventCalculator.useEffect"], [
        step
    ]);
    const urlAdmin = searchParams?.get("admin") === "true" || searchParams?.get("mode") === "owner";
    const isClient = useClientOnly();
    const storedOwner = useStoredOwner();
    const [forceLogout, setForceLogout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ownerMargin, setOwnerMargin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPinModal, setShowPinModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pinError, setPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pdfRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ownerPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("584147046714");
    const isOwner = isClient && (storedOwner || urlAdmin) && !forceLogout;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventCalculator.useEffect": ()=>{
            setStoredOwner(isOwner);
        }
    }["EventCalculator.useEffect"], [
        isOwner
    ]);
    const currentCities = VENEZUELA_LOCATIONS[selectedState] || [
        "Otra"
    ];
    const quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventCalculator.useMemo[quote]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateQuote"])({
                pax: Math.max(0, pax),
                state: selectedState,
                city: selectedCity,
                serviceType
            })
    }["EventCalculator.useMemo[quote]"], [
        pax,
        selectedState,
        selectedCity,
        serviceType
    ]);
    const adjustedTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventCalculator.useMemo[adjustedTotal]": ()=>quote.totalEstimate * (1 + ownerMargin / 100)
    }["EventCalculator.useMemo[adjustedTotal]"], [
        quote.totalEstimate,
        ownerMargin
    ]);
    const selectedModality = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventCalculator.useMemo[selectedModality]": ()=>rateConfig.menuOptions.modalities.find({
                "EventCalculator.useMemo[selectedModality]": (m)=>m.id === selectedModalityId
            }["EventCalculator.useMemo[selectedModality]"])
    }["EventCalculator.useMemo[selectedModality]"], [
        selectedModalityId
    ]);
    const modalityAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventCalculator.useMemo[modalityAllowed]": ()=>{
            if (!selectedModality) return true;
            if (typeof selectedModality.minPax === "number") {
                return pax >= selectedModality.minPax;
            }
            return true;
        }
    }["EventCalculator.useMemo[modalityAllowed]"], [
        selectedModality,
        pax
    ]);
    const recipeCount = selectedRecipeIds.length;
    const skipMenuSelection = selectedModality?.skipMenu ?? false;
    const recipeValid = selectedModality ? skipMenuSelection || recipeCount >= selectedModality.minRecipes && recipeCount <= selectedModality.maxRecipes : false;
    const sidesValid = skipMenuSelection || selectedSideIds.length >= 1 && selectedSideIds.length <= MAX_SIDES;
    const saladsValid = skipMenuSelection || selectedSaladIds.length <= MAX_SALADS;
    const isoEventDate = parseEventDateToISO(eventDate);
    const step1Valid = pax >= 1 && selectedState.length > 0 && selectedCity.length > 0 && eventDate.length === 10;
    const canGoNext = ()=>{
        if (step === 1) return step1Valid;
        if (step === 2) return !!selectedModality && modalityAllowed;
        if (step === 3) return skipMenuSelection || recipeValid && modalityAllowed;
        if (step === 4) return skipMenuSelection || sidesValid;
        if (step === 5) return skipMenuSelection || saladsValid;
        return true;
    };
    const allValid = step1Valid && !!selectedModality && modalityAllowed && recipeValid && sidesValid;
    const handleStateChange = (newState)=>{
        setSelectedState(newState);
        const cities = VENEZUELA_LOCATIONS[newState] || [
            "Otra"
        ];
        setSelectedCity(cities[0]);
        if (selectedModality && typeof selectedModality.minPax === "number" && pax < selectedModality.minPax) {
            setSelectedModalityId(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventCalculator.useEffect": ()=>{
            if (selectedModality && typeof selectedModality.minPax === "number" && pax < selectedModality.minPax) {
                setSelectedModalityId(null);
            }
        }
    }["EventCalculator.useEffect"], [
        pax,
        selectedModality
    ]);
    const scrollToNextButton = ()=>{
        requestAnimationFrame(()=>{
            nextButtonRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    };
    const toggleRecipe = (id)=>{
        setSelectedRecipeIds((prev)=>{
            if (prev.includes(id)) return prev.filter((r)=>r !== id);
            if (selectedModality && prev.length >= selectedModality.maxRecipes) return prev;
            const next = [
                ...prev,
                id
            ];
            if (selectedModality && next.length >= selectedModality.maxRecipes) scrollToNextButton();
            return next;
        });
    };
    const toggleSide = (id)=>{
        setSelectedSideIds((prev)=>{
            if (prev.includes(id)) return prev.filter((s)=>s !== id);
            if (prev.length >= MAX_SIDES) return prev;
            const next = [
                ...prev,
                id
            ];
            if (next.length >= MAX_SIDES) scrollToNextButton();
            return next;
        });
    };
    const toggleSalad = (id)=>{
        setSelectedSaladIds((prev)=>{
            if (prev.includes(id)) return prev.filter((s)=>s !== id);
            if (prev.length >= MAX_SALADS) return prev;
            const next = [
                ...prev,
                id
            ];
            if (next.length >= MAX_SALADS) scrollToNextButton();
            return next;
        });
    };
    const getMenuNames = ()=>({
            recipes: selectedRecipeIds.map((id)=>rateConfig.menuOptions.recipes.find((r)=>r.id === id)?.name).filter(Boolean),
            sides: selectedSideIds.map((id)=>rateConfig.menuOptions.sides.find((s)=>s.id === id)?.name).filter(Boolean),
            salads: selectedSaladIds.map((id)=>rateConfig.menuOptions.salads.find((s)=>s.id === id)?.name).filter(Boolean)
        });
    const handleWhatsApp = async ()=>{
        if (!allValid || !quote || !selectedModality) return;
        const openedWindow = window.open("", "_blank");
        const { recipes, sides, salads } = getMenuNames();
        const quoteData = {
            eventDate: isoEventDate,
            city: selectedCity,
            state: selectedState,
            pax,
            serviceType,
            modality: selectedModality.name,
            recipes: skipMenuSelection ? [
                "A definir en negociación"
            ] : recipes,
            sides: skipMenuSelection ? [
                "A definir en negociación"
            ] : sides,
            salads: skipMenuSelection ? [
                "A definir en negociación"
            ] : salads,
            baseCost: quote.baseCost,
            travelCost: quote.travelCost,
            isTravelPending: quote.isTravelPending,
            lodgingCost: quote.lodgingCost,
            total: adjustedTotal,
            isTravelDoubled: quote.isTravelDoubled,
            grillMastersCount: quote.grillMastersCount,
            ownerMargin: isOwner ? ownerMargin : undefined
        };
        try {
            const response = await fetch("/api/save-quote.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(quoteData)
            });
            const result = await response.json();
            if (!response.ok || !result.success || !result.id) {
                throw new Error(result.message || "No se pudo guardar la cotización.");
            }
            const quoteUrl = `${window.location.origin}/cotizacion/?id=${result.id}`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendQuoteToWhatsApp"])({
                phone: ownerPhone,
                ...quoteData,
                quoteUrl
            }, openedWindow);
        } catch (error) {
            openedWindow?.close();
            window.alert(error instanceof Error ? error.message : "No se pudo guardar la cotización. Intenta nuevamente.");
        }
    };
    const handlePinSubmit = ()=>{
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
    const handleLogoutOwner = ()=>{
        setStoredOwner(false);
        setForceLogout(true);
        setOwnerMargin(0);
    };
    const stepContent = ()=>{
        switch(step){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/80",
                                            children: "Cantidad de personas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            value: pax,
                                            onChange: (e)=>{
                                                const raw = e.target.value;
                                                if (raw === "") {
                                                    setPax(0);
                                                    return;
                                                }
                                                const normalized = raw.replace(/^0+/, "") || "1";
                                                e.target.value = normalized;
                                                const next = Number(normalized);
                                                if (!Number.isNaN(next)) setPax(next);
                                            },
                                            onBlur: ()=>{
                                                if (pax < 1) setPax(1);
                                            },
                                            className: "w-full rounded-lg border border-white/10 bg-[#16181d] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 17
                                        }, this),
                                        pax < 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#fd0200]",
                                            children: "La cantidad mínima es 1 persona."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/80",
                                            children: "Tipo de servicio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: serviceType,
                                            onChange: (e)=>setServiceType(e.target.value),
                                            className: "w-full appearance-none rounded-lg border border-white/10 bg-[#16181d] px-4 py-3 text-white outline-none transition-colors focus:border-[#fd0200]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "full",
                                                    children: "Servicio completo (con ingredientes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "labor_only",
                                                    children: "Solo mano de obra (sin ingredientes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/80",
                                            children: "Estado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedState,
                                                    onChange: (e)=>handleStateChange(e.target.value),
                                                    className: "w-full appearance-none rounded-lg border border-white/10 bg-[#16181d] py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#fd0200]",
                                                    children: Object.keys(VENEZUELA_LOCATIONS).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                            lineNumber: 1183,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/80",
                                            children: "Ciudad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedCity,
                                                    onChange: (e)=>setSelectedCity(e.target.value),
                                                    className: "w-full appearance-none rounded-lg border border-white/10 bg-[#16181d] py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#fd0200]",
                                                    children: currentCities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c,
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                            lineNumber: 1203,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1191,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-white/80",
                                    children: "Fecha del evento"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            inputMode: "numeric",
                                            value: eventDate,
                                            placeholder: "--/--/----",
                                            onChange: (e)=>{
                                                const raw = e.target.value.replace(/\D/g, "");
                                                let formatted = "";
                                                if (raw.length >= 1) formatted += raw.slice(0, 2);
                                                if (raw.length >= 3) formatted += "/" + raw.slice(2, 4);
                                                if (raw.length >= 5) formatted += "/" + raw.slice(4, 8);
                                                setEventDate(formatted);
                                            },
                                            maxLength: 10,
                                            className: "w-full rounded-lg border border-white/10 bg-[#16181d] py-3 pl-4 pr-12 text-white outline-none transition-colors focus:border-[#fd0200]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>datePickerRef.current?.showPicker(),
                                            className: "absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/5 hover:text-[#fd0200]",
                                            "aria-label": "Abrir calendario",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: datePickerRef,
                                            type: "date",
                                            value: isoEventDate,
                                            onChange: (e)=>{
                                                const [year, month, day] = e.target.value.split("-");
                                                setEventDate(e.target.value ? `${day}/${month}/${year}` : "");
                                            },
                                            className: "pointer-events-none absolute bottom-0 right-0 h-0 w-0 opacity-0",
                                            tabIndex: -1,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1216,
                                    columnNumber: 15
                                }, this),
                                quote.isTravelPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-amber-400",
                                    children: "El costo de traslado para esta ciudad será confirmado durante la negociación."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1255,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1212,
                            columnNumber: 13
                        }, this)
                    ]
                }, "step-1", true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1122,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: rateConfig.menuOptions.modalities.map((modality)=>{
                        const disabled = typeof modality.minPax === "number" && pax < modality.minPax;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalityCard, {
                            modality: modality,
                            selected: selectedModalityId === modality.id,
                            disabled: disabled,
                            onClick: ()=>!disabled && setSelectedModalityId(modality.id)
                        }, modality.id, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1270,
                            columnNumber: 17
                        }, this);
                    })
                }, "step-2", false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1265,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-6",
                    children: [
                        selectedModality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                            valid: recipeValid,
                            children: recipeValid ? `Has seleccionado ${recipeCount} de ${selectedModality.maxRecipes} recetas.` : `Selecciona ${selectedModality.minRecipes === selectedModality.maxRecipes ? selectedModality.minRecipes : `de ${selectedModality.minRecipes} a ${selectedModality.maxRecipes}`} recetas para la modalidad ${selectedModality.name}.${selectedModality.id === "self_service" ? " (Se recomiendan 3 recetas)" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1286,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: rateConfig.menuOptions.recipes.map((recipe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecipeCard, {
                                    recipe: recipe,
                                    selected: selectedRecipeIds.includes(recipe.id),
                                    disabled: !!selectedModality && recipeCount >= selectedModality.maxRecipes,
                                    onToggle: ()=>toggleRecipe(recipe.id),
                                    onView: ()=>setModalRecipe(recipe)
                                }, recipe.id, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1303,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1301,
                            columnNumber: 13
                        }, this)
                    ]
                }, "step-3", true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1284,
                    columnNumber: 11
                }, this);
            case 4:
                if (skipMenuSelection) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                            valid: true,
                            children: [
                                "Has seleccionado la modalidad ",
                                selectedModality?.name,
                                ". Las proteínas y acompañamientos se cuadran al momento de la negociación."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1322,
                            columnNumber: 15
                        }, this)
                    }, "step-4", false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1321,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                            valid: sidesValid,
                            children: sidesValid ? `Has seleccionado ${selectedSideIds.length} contornos.` : "Selecciona de 1 a 3 contornos."
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1330,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-3",
                            children: rateConfig.menuOptions.sides.map((side)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                                    option: side,
                                    selected: selectedSideIds.includes(side.id),
                                    disabled: selectedSideIds.length >= MAX_SIDES,
                                    onClick: ()=>toggleSide(side.id),
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$carrot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carrot$3e$__["Carrot"]
                                }, side.id, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1338,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1336,
                            columnNumber: 13
                        }, this)
                    ]
                }, "step-4", true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1329,
                    columnNumber: 11
                }, this);
            case 5:
                if (skipMenuSelection) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                            valid: true,
                            children: [
                                "Has seleccionado la modalidad ",
                                selectedModality?.name,
                                ". Las proteínas y acompañamientos se cuadran al momento de la negociación."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1355,
                            columnNumber: 15
                        }, this)
                    }, "step-5", false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1354,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                            valid: saladsValid,
                            children: saladsValid ? `Has seleccionado ${selectedSaladIds.length} ensaladas (máx. 2).` : "Puedes seleccionar hasta 2 ensaladas."
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1363,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                            children: rateConfig.menuOptions.salads.map((salad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                                    option: salad,
                                    selected: selectedSaladIds.includes(salad.id),
                                    disabled: selectedSaladIds.length >= MAX_SALADS,
                                    onClick: ()=>toggleSalad(salad.id),
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"]
                                }, salad.id, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1371,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1369,
                            columnNumber: 13
                        }, this)
                    ]
                }, "step-5", true, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1362,
                    columnNumber: 11
                }, this);
            case 6:
                {
                    const menuNames = getMenuNames();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationBanner, {
                                valid: allValid,
                                children: allValid ? "Todo listo. Revisa el resumen antes de enviar tu cotización." : "Hay pasos incompletos. Vuelve atrás para completarlos."
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1388,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                        title: "Datos del evento",
                                        onEdit: ()=>setStep(1),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                                label: "Personas",
                                                value: `${pax} pax`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1396,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                                label: "Ubicación",
                                                value: `${selectedCity}, ${selectedState}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                                label: "Servicio",
                                                value: serviceType === "labor_only" ? "Solo mano de obra" : "Servicio completo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                                label: "Fecha",
                                                value: formatEventDate(eventDate) || "Sin definir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1402,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1395,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                        title: "Modalidad",
                                        onEdit: ()=>setStep(2),
                                        children: selectedModality ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                                    label: "Servicio",
                                                    value: selectedModality.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "pt-1 text-sm text-white/60",
                                                    children: selectedModality.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1407,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/40",
                                            children: "Sin modalidad seleccionada."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1414,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 15
                                    }, this),
                                    !skipMenuSelection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                        title: "Recetas",
                                        onEdit: ()=>setStep(3),
                                        children: menuNames.recipes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 text-sm text-white/70",
                                            children: menuNames.recipes.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "• ",
                                                        name
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1423,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1421,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/40",
                                            children: "Sin recetas seleccionadas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1427,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1419,
                                        columnNumber: 17
                                    }, this),
                                    !skipMenuSelection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                        title: "Contornos y ensaladas",
                                        onEdit: ()=>setStep(4),
                                        children: menuNames.sides.length > 0 || menuNames.salads.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 text-sm text-white/70",
                                            children: [
                                                ...menuNames.sides,
                                                ...menuNames.salads
                                            ].map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "• ",
                                                        name
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1437,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/40",
                                            children: "Sin contornos ni ensaladas seleccionados."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1433,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1394,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-[#0b0c0e] p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50",
                                                    children: "Servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: formatCurrency(quote.baseCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50",
                                                    children: "Traslado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1454,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: quote.isTravelPending ? "Por confirmar" : formatCurrency(quote.travelCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1455,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50",
                                                    children: "Hospedaje"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1458,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: [
                                                        formatCurrency(quote.lodgingCost),
                                                        quote.grillMastersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-xs text-white/50",
                                                            children: [
                                                                "(",
                                                                quote.grillMastersCount,
                                                                " parrilleros)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                            lineNumber: 1462,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1459,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#fd0200]",
                                                    children: quote.isTravelPending ? "TOTAL PARCIAL" : "TOTAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: formatCurrency(adjustedTotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1470,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1466,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1448,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1447,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-[#16181d] p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-white",
                                                    children: "Tipo de servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50",
                                                    children: "Puedes cambiarlo antes de enviar la cotización."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: serviceType,
                                            onChange: (e)=>setServiceType(e.target.value),
                                            className: "w-full appearance-none rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-2.5 text-white outline-none transition-colors focus:border-[#fd0200] sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "full",
                                                    children: "Servicio completo (con ingredientes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1486,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "labor_only",
                                                    children: "Solo mano de obra (sin ingredientes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1481,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1476,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1475,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleWhatsApp,
                                        disabled: !allValid,
                                        className: cn("flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors", allValid ? "bg-[#fd0200] text-white hover:bg-red-600" : "cursor-not-allowed bg-white/10 text-white/40"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 17
                                            }, this),
                                            "Enviar cotización por WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1493,
                                        columnNumber: 15
                                    }, this),
                                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>pdfRef.current?.download(),
                                        disabled: !allValid,
                                        className: cn("flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors", allValid ? "bg-white text-black hover:bg-white/90" : "cursor-not-allowed bg-white/10 text-white/40"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1520,
                                                columnNumber: 19
                                            }, this),
                                            "Descargar PDF oficial"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1509,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1492,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "step-6", true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1387,
                        columnNumber: 11
                    }, this);
                }
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0b0c0e] px-4 py-12 pb-24 font-sans text-white lg:pb-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-semibold tracking-tight sm:text-4xl",
                                        children: "Cotizador de eventos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 13
                                    }, this),
                                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 rounded-full border border-[#fd0200]/30 bg-[#fd0200]/10 px-3 py-1 text-xs font-semibold text-[#fd0200]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                lineNumber: 1544,
                                                columnNumber: 17
                                            }, this),
                                            "Modo Administrador"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1538,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-white/60",
                                children: "Arma tu experiencia Alto Linaje paso a paso"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1549,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                        currentStep: step,
                        total: TOTAL_STEPS
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1554,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: stepCardRef,
                            initial: {
                                x: 20,
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: -20,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.25
                            },
                            className: "scroll-mt-28 rounded-3xl border border-white/10 bg-[#16181d] p-6 sm:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-white",
                                            children: STEP_TITLES[step - 1]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/40",
                                            children: [
                                                "Paso ",
                                                step,
                                                " de ",
                                                TOTAL_STEPS
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1570,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1566,
                                    columnNumber: 13
                                }, this),
                                stepContent(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex items-center justify-between border-t border-white/10 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep((s)=>Math.max(1, s - 1)),
                                            disabled: step === 1,
                                            className: cn("flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors", step === 1 ? "invisible" : "border border-white/10 text-white hover:border-white/30"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1589,
                                                    columnNumber: 17
                                                }, this),
                                                "Atrás"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1578,
                                            columnNumber: 15
                                        }, this),
                                        step < TOTAL_STEPS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            ref: nextButtonRef,
                                            type: "button",
                                            onClick: ()=>setStep((s)=>{
                                                    if (s === 2 && skipMenuSelection) return TOTAL_STEPS;
                                                    return Math.min(TOTAL_STEPS, s + 1);
                                                }),
                                            disabled: !canGoNext(),
                                            className: cn("flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors", canGoNext() ? "bg-[#fd0200] text-white hover:bg-red-600" : "cursor-not-allowed bg-white/10 text-white/40"),
                                            children: [
                                                step === TOTAL_STEPS - 1 ? "Ver resumen" : "Siguiente",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                                    lineNumber: 1612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                            lineNumber: 1594,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1577,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, step, true, {
                            fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                            lineNumber: 1557,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1556,
                        columnNumber: 9
                    }, this),
                    quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingBar, {
                        quote: quote,
                        adjustedTotal: adjustedTotal,
                        onWhatsApp: handleWhatsApp,
                        onPDF: ()=>pdfRef.current?.download(),
                        onToggleOwner: ()=>isOwner ? handleLogoutOwner() : setShowPinModal(true),
                        ready: allValid,
                        isOwner: isOwner,
                        ownerMargin: ownerMargin,
                        onMarginChange: setOwnerMargin
                    }, void 0, false, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1620,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 1536,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: modalRecipe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4",
                    onClick: ()=>setModalRecipe(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        transition: {
                            duration: 0.2
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#16181d]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setModalRecipe(null),
                                className: "absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1658,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1653,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageCarousel, {
                                images: modalRecipe.images || [],
                                name: modalRecipe.name,
                                recipeId: modalRecipe.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1661,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold text-white",
                                        children: modalRecipe.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1668,
                                        columnNumber: 17
                                    }, this),
                                    modalRecipe.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-white/70",
                                        children: modalRecipe.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1672,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            toggleRecipe(modalRecipe.id);
                                        },
                                        className: cn("mt-6 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors", selectedRecipeIds.includes(modalRecipe.id) ? "border border-white/20 text-white hover:border-[#fd0200] hover:text-[#fd0200]" : "bg-[#fd0200] text-white hover:bg-red-600"),
                                        children: selectedRecipeIds.includes(modalRecipe.id) ? "Quitar de la selección" : "Agregar a la selección"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1675,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1667,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1645,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1638,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPinModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4",
                    onClick: ()=>setShowPinModal(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        transition: {
                            duration: 0.2
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#16181d] p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowPinModal(false),
                                className: "absolute right-4 top-4 rounded-full p-2 text-white/50 transition-colors hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                    lineNumber: 1719,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1714,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "mx-auto h-10 w-10 text-[#fd0200]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1723,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-4 text-xl font-semibold text-white",
                                        children: "Acceso de administrador"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1724,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-white/60",
                                        children: "Ingresa el PIN de 4 dígitos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                        lineNumber: 1727,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1722,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                inputMode: "numeric",
                                maxLength: 4,
                                value: pin,
                                onChange: (e)=>{
                                    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                                    setPin(value);
                                    setPinError(false);
                                },
                                onKeyDown: (e)=>e.key === "Enter" && handlePinSubmit(),
                                className: "mt-6 w-full rounded-lg border border-white/10 bg-[#0b0c0e] px-4 py-3 text-center text-2xl tracking-[0.5em] text-white outline-none transition-colors focus:border-[#fd0200]",
                                placeholder: "••••"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1732,
                                columnNumber: 15
                            }, this),
                            pinError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-center text-sm text-[#fd0200]",
                                children: "PIN incorrecto. Inténtalo de nuevo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1748,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handlePinSubmit,
                                className: "mt-6 w-full rounded-full bg-[#fd0200] py-3 font-semibold text-white transition-colors hover:bg-red-600",
                                children: "Confirmar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                                lineNumber: 1753,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                        lineNumber: 1706,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                    lineNumber: 1699,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 1697,
                columnNumber: 7
            }, this),
            isClient && quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calculator$2f$OwnerPDF$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: pdfRef,
                eventDate: isoEventDate,
                pax: pax,
                state: selectedState,
                city: selectedCity,
                serviceType: serviceType,
                skipMenu: skipMenuSelection,
                assignedBranch: quote.assignedBranch,
                modalityName: selectedModality?.name ?? "",
                recipes: selectedRecipeIds.map((id)=>rateConfig.menuOptions.recipes.find((r)=>r.id === id)?.name).filter(Boolean),
                sides: selectedSideIds.map((id)=>rateConfig.menuOptions.sides.find((s)=>s.id === id)?.name).filter(Boolean),
                salads: selectedSaladIds.map((id)=>rateConfig.menuOptions.salads.find((s)=>s.id === id)?.name).filter(Boolean),
                baseCost: quote.baseCost,
                travelCost: quote.travelCost,
                isTravelPending: quote.isTravelPending,
                lodgingCost: quote.lodgingCost,
                total: quote.totalEstimate,
                ownerMargin: ownerMargin,
                isTravelDoubled: quote.isTravelDoubled,
                grillMastersCount: quote.grillMastersCount
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/EventCalculator.tsx",
                lineNumber: 1766,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/EventCalculator.tsx",
        lineNumber: 1535,
        columnNumber: 5
    }, this);
}
_s7(EventCalculator, "j7oEkDuU5L/TWF10s7xz1mN4v0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        useClientOnly,
        useStoredOwner
    ];
});
_c10 = EventCalculator;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "NumberSlider");
__turbopack_context__.k.register(_c1, "StepIndicator");
__turbopack_context__.k.register(_c2, "ImageCarousel");
__turbopack_context__.k.register(_c3, "ModalityCard");
__turbopack_context__.k.register(_c4, "RecipeCard");
__turbopack_context__.k.register(_c5, "OptionCard");
__turbopack_context__.k.register(_c6, "ValidationBanner");
__turbopack_context__.k.register(_c7, "SummaryCard");
__turbopack_context__.k.register(_c8, "SummaryRow");
__turbopack_context__.k.register(_c9, "FloatingBar");
__turbopack_context__.k.register(_c10, "EventCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/calculator/OwnerPDF.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatCurrency(value) {
    return `$${value.toLocaleString("es-VE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
const today = new Date().toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
function generateQuoteCode() {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const suffix = Math.floor(1000 + Math.random() * 9000);
    return `AL-${date}-${suffix}`;
}
const OwnerPDF = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function OwnerPDF(props, ref) {
    _s();
    const templateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [quoteCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(generateQuoteCode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "OwnerPDF.OwnerPDF.useImperativeHandle": ()=>({
                download: ({
                    "OwnerPDF.OwnerPDF.useImperativeHandle": async ()=>{
                        if (!templateRef.current) return;
                        const el = templateRef.current;
                        const originalPosition = el.style.position;
                        const originalLeft = el.style.left;
                        const originalTop = el.style.top;
                        const originalZIndex = el.style.zIndex;
                        const originalTransform = el.style.transform;
                        el.style.position = "absolute";
                        el.style.left = "0";
                        el.style.top = "0";
                        el.style.zIndex = "-1";
                        el.style.transform = "none";
                        try {
                            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(el, {
                                scale: 2,
                                useCORS: true,
                                logging: false,
                                onclone: {
                                    "OwnerPDF.OwnerPDF.useImperativeHandle": (doc)=>{
                                        const cloned = doc.getElementById("owner-pdf-template");
                                        if (cloned) {
                                            cloned.style.position = "static";
                                            cloned.style.left = "0";
                                            cloned.style.top = "0";
                                            cloned.style.transform = "none";
                                            cloned.style.zIndex = "1";
                                        }
                                    }
                                }["OwnerPDF.OwnerPDF.useImperativeHandle"]
                            });
                            const imgData = canvas.toDataURL("image/jpeg", 1.0);
                            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]("p", "pt", "a4");
                            const pageWidth = pdf.internal.pageSize.getWidth();
                            const imgHeight = canvas.height * pageWidth / canvas.width;
                            pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeight);
                            pdf.save(`alto-linaje-cotizacion-${quoteCode}.pdf`);
                        } finally{
                            el.style.position = originalPosition;
                            el.style.left = originalLeft;
                            el.style.top = originalTop;
                            el.style.zIndex = originalZIndex;
                            el.style.transform = originalTransform;
                        }
                    }
                })["OwnerPDF.OwnerPDF.useImperativeHandle"]
            })
    }["OwnerPDF.OwnerPDF.useImperativeHandle"]);
    const hasMargin = props.ownerMargin !== 0;
    const marginAmount = props.total * (props.ownerMargin / 100);
    const adjustedTotal = props.total + marginAmount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: templateRef,
        id: "owner-pdf-template",
        className: "fixed left-[-9999px] top-0 w-[210mm] bg-[#ffffff] p-[15mm] text-[11pt] text-[#000000]",
        style: {
            zIndex: -1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between rounded-t-2xl bg-[#0b0c0e] p-4 border-b-2 border-[#fd0200]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png?v=2",
                                alt: "Alto Linaje",
                                width: 220,
                                height: 70,
                                unoptimized: true,
                                priority: true,
                                className: "h-10 w-auto object-contain sm:h-14 md:h-16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[18pt] font-bold leading-none text-[#ffffff]",
                                        children: "Alto Linaje"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8pt] text-[#9ca3af]",
                                        children: "Experiencias de parrilla de alto nivel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[8pt] text-[#d1d5db]",
                                children: "Cotización oficial"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13pt] font-bold text-[#fd0200]",
                                children: quoteCode
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[8pt] text-[#9ca3af]",
                                children: today
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mt-6 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]",
                                children: "Datos del evento"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb] bg-[#f9fafb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Fecha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: props.eventDate || "Por definir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Ubicación"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: [
                                                        props.city,
                                                        ", ",
                                                        props.state
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Invitados"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: [
                                                        props.pax,
                                                        " personas"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb] bg-[#f9fafb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Tipo de servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: props.serviceType === "labor_only" ? "Solo mano de obra" : "Servicio completo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-[#f9fafb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Sucursal asignada"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: props.assignedBranch
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]",
                                children: "Menú seleccionado"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb] bg-[#f9fafb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Modalidad"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: props.modalityName || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        !props.skipMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-[#e5e7eb]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                            children: "Recetas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2",
                                                            children: props.recipes.join(", ") || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-[#e5e7eb] bg-[#f9fafb]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                            children: "Contornos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2",
                                                            children: props.sides.join(", ") || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                            children: "Ensaladas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2",
                                                            children: props.salads.join(", ") || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        props.skipMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Menú"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2",
                                                    children: "Proteínas y acompañamientos a definir en la negociación."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]",
                                children: "Resumen de cotización"
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: "Servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right font-mono",
                                                    children: formatCurrency(props.baseCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: [
                                                        "Logística / traslado",
                                                        props.isTravelDoubled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-[8pt] text-[#fd0200]",
                                                            children: "(x2 logística pesada)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right font-mono",
                                                    children: props.isTravelPending ? "Por confirmar" : formatCurrency(props.travelCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: [
                                                        "Hospedaje de parrilleros",
                                                        props.grillMastersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-[8pt] text-[#6b7280]",
                                                            children: [
                                                                "(",
                                                                props.grillMastersCount,
                                                                " parrilleros)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-2 text-right font-mono",
                                                    children: formatCurrency(props.lodgingCost)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        hasMargin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[#e5e7eb] bg-[#f9fafb]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]",
                                                    children: [
                                                        "Ajuste administrativo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `ml-1 text-[8pt] ${props.ownerMargin > 0 ? "text-[#16a34a]" : "text-[#fd0200]"}`,
                                                            children: [
                                                                "(",
                                                                props.ownerMargin > 0 ? "+" : "",
                                                                props.ownerMargin,
                                                                "%)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `p-2 text-right font-mono ${props.ownerMargin > 0 ? "text-[#16a34a]" : "text-[#fd0200]"}`,
                                                    children: formatCurrency(marginAmount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-[#000000] text-[#ffffff]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-2/3 border-r border-[#374151] p-3 font-bold uppercase",
                                                    children: props.isTravelPending ? "Total parcial" : "Total estimado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3 text-right font-mono font-bold",
                                                    children: [
                                                        formatCurrency(hasMargin ? adjustedTotal : props.total),
                                                        " USD"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-10 border-t border-[#d1d5db] pt-4 text-[8pt] text-[#4b5563]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-[#000000]",
                                    children: "Notas comerciales:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-1 list-disc space-y-1 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Cotización sujeta a confirmación y disponibilidad de fecha."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: props.isTravelPending ? "El traslado está por confirmar y no está incluido en el total parcial." : "Precio de hospedaje y logística sujeto a ajustes en la negociación final."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Reserva con el 50% del total para confirmar la fecha."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                            lineNumber: 326,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-40 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto h-16 w-16 rounded-full border-2 border-[#fd0200] bg-[#f9fafb] p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center rounded-full bg-[#fd0200] text-[7pt] font-bold text-[#ffffff]",
                                        children: "AL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 font-semibold text-[#000000]",
                                    children: "Sello de validación"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[7pt] text-[#6b7280]",
                                    children: "Alto Linaje"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                    lineNumber: 325,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/calculator/OwnerPDF.tsx",
        lineNumber: 117,
        columnNumber: 7
    }, this);
}, "+U/r+ofkjob8kBz7ZJb609uPd44=")), "+U/r+ofkjob8kBz7ZJb609uPd44=");
_c1 = OwnerPDF;
const __TURBOPACK__default__export__ = OwnerPDF;
var _c, _c1;
__turbopack_context__.k.register(_c, "OwnerPDF$forwardRef");
__turbopack_context__.k.register(_c1, "OwnerPDF");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/rates.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "baseRates": {
        "regionalPricePerPerson": 25,
        "nationalPricePerPerson": 35,
        "laborOnlyRegionalPricePerPerson": 10,
        "laborOnlyNationalPricePerPerson": 15,
        "regionalStates": [
            "Táchira",
            "Mérida",
            "Trujillo"
        ]
    },
    "branches": {
        "san_cristobal": {
            "name": "Sucursal San Cristóbal",
            "coveredStates": [
                "Táchira",
                "Mérida",
                "Trujillo",
                "Barinas",
                "Zulia"
            ]
        },
        "caracas": {
            "name": "Sucursal Caracas",
            "coveredStates": [
                "DEFAULT"
            ]
        }
    },
    "travel": {
        "heavyLogisticsPaxThreshold": 180,
        "heavyLogisticsMultiplier": 2,
        "cityRates": {
            "Táchira": {
                "San Cristóbal": 50,
                "Rubio": 60,
                "La Grita": 150,
                "Pregonero": 150,
                "San Antonio del Táchira": 120
            },
            "Monagas": {
                "Maturín": 500
            },
            "Anzoátegui": {
                "Barcelona": 360,
                "Puerto La Cruz": 380,
                "El Tigre": 500
            },
            "Lara": {
                "Carora": 500,
                "Barquisimeto": 400,
                "El Tocuyo": 460
            },
            "Barinas": {
                "Barinas": 350,
                "Santa Bárbara de Barinas": 200,
                "Barinitas": 380
            },
            "Zulia": {
                "Maracaibo": 480
            },
            "Guárico": {
                "San Juan de los Morros": 200,
                "Calabozo": 300
            },
            "Bolívar": {
                "Ciudad Bolívar": 650,
                "Puerto Ordaz": 600
            },
            "Miranda": {
                "Higuerote": 180
            },
            "Nueva Esparta": {
                "Margarita": 500
            },
            "Falcón": {
                "Coro": 550
            },
            "Portuguesa": {
                "Acarigua": 380,
                "Araure": 380,
                "Guanare": 440
            },
            "Yaracuy": {
                "San Felipe": 340
            }
        }
    },
    "lodging": {
        "costPerParrillero": 40,
        "paxPerParrillero": 20,
        "baseParrilleros": 1,
        "minParrilleros": 2,
        "citiesRequiringLodging": [
            "Mérida",
            "Trujillo",
            "Valencia",
            "Barquisimeto",
            "Maracaibo",
            "Barinas",
            "La Grita",
            "Pregonero",
            "Maturín",
            "Barcelona",
            "Puerto La Cruz",
            "El Tigre",
            "Carora",
            "Santa Bárbara de Barinas",
            "Calabozo",
            "Ciudad Bolívar",
            "Puerto Ordaz",
            "Margarita",
            "Coro",
            "Acarigua",
            "Araure",
            "Guanare",
            "San Felipe",
            "Barinitas",
            "El Tocuyo"
        ]
    },
    "menuOptions": {
        "modalities": [
            {
                "id": "self_service",
                "name": "Self-Service",
                "minRecipes": 2,
                "maxRecipes": 3,
                "description": "Nuestro equipo desplegara cada estacion de comida en los Chef and Dish. El servicio finaliza al momento que se agota la comida.",
                "image": "/images/mode-self-services.jpg"
            },
            {
                "id": "doble_tanda",
                "name": "Doble Tanda",
                "minRecipes": 4,
                "maxRecipes": 4,
                "description": "800 gr de proteína por persona + 200 gr de contornos + ensaladas. Servidas en las Cajas Alto Linaje en dos oportunidades, con una diferencia de 2 a 3 horas. La capacidad de cada caja es de 8 a 10 personas.",
                "image": "/images/mode-doble-tanda.jpg"
            },
            {
                "id": "rodizio",
                "name": "Rodizio",
                "minRecipes": 4,
                "maxRecipes": 4,
                "description": "Los comensales dispondrán de una mesa de contornos y ensaladas para servirse al gusto, mientras los chefs pasan directamente por las mesas ofreciendo una rotación constante de cortes durante 3 horas de servicio de rodizio.",
                "image": "/images/mode-rodizio.jpg"
            },
            {
                "id": "plato_a_plato",
                "name": "Plato a Plato",
                "minRecipes": 2,
                "maxRecipes": 2,
                "recommendedMinPax": 150,
                "description": "Consiste en servicio plato a plato por persona, entregado por el personal o mesoneros directo a la mesa de los comensales.",
                "image": "/images/POR-PLATO-1.jpg"
            },
            {
                "id": "pincheras",
                "name": "Pincheras",
                "minRecipes": 0,
                "maxRecipes": 0,
                "skipMenu": true,
                "description": "Disfruta de servicio de pinchos por un tiempo limitado de 3 horas continuas. Las proteínas y acompañamientos se definen al momento de la negociación.",
                "image": "/images/PINCHOS.PNG"
            }
        ],
        "recipes": [
            {
                "id": "lomo_cerdo",
                "name": "Lomo de Cerdo",
                "description": "Con chicharron acompañado de salsa de chistorra y pimenton ahumado.",
                "images": [
                    "/images/recetas/LOMO-DE-CERDO-1.jpg",
                    "/images/recetas/LOMO-DE-CERDO-2.jpg"
                ]
            },
            {
                "id": "puntas_ahumadas",
                "name": "Puntas Traseras Ahumadas",
                "description": "Acompañada de salsa blanca de queso azul.",
                "images": [
                    "/images/recetas/PUNTAS-TRASERAS-AHUMADAS.jpg",
                    "/images/recetas/PUNTAS-AHUMADAS-2.jpg"
                ]
            },
            {
                "id": "costillas_bbq",
                "name": "Costillas de Cerdo BBQ",
                "description": "Ahumadas en salsa BBQ.",
                "images": [
                    "/images/recetas/COSTILLAS-BBQ-1.png",
                    "/images/recetas/COSTILLAS-BBQ-2.jpg"
                ]
            },
            {
                "id": "carne_vara",
                "name": "Tradicional Carne en Vara",
                "description": "Acompañada de guasacaca.",
                "images": [
                    "/images/recetas/CARNE-EN-VARA.jpg",
                    "/images/recetas/CARNE-EN-VARA-2.PNG"
                ]
            },
            {
                "id": "beef_wellington",
                "name": "Beef Wellington",
                "description": "Lomito sellado a la parrilla envuelto en masa de hojaldre con mousse de champiñones y tocineta.",
                "images": [
                    "/images/recetas/BEEF-WELLINTONG.jpg",
                    "/images/recetas/BEEF-WELLINTONG-2.PNG"
                ]
            },
            {
                "id": "pork_belly",
                "name": "Pork Belly",
                "description": "Con salsa de whisky.",
                "images": [
                    "/images/recetas/PORK-BELLY.jpg",
                    "/images/recetas/PORK-BELLY-2.jpg",
                    "/images/recetas/PORK-BELLY-3.jpg"
                ]
            },
            {
                "id": "picanha",
                "name": "Picanha Tradicional",
                "description": "Con chimichurri.",
                "images": [
                    "/images/recetas/PICANHA-TRADICIONAL.jpg",
                    "/images/recetas/PICANHA-1.jpg",
                    "/images/recetas/PICANHA-2.jpg"
                ]
            },
            {
                "id": "churrasco_solomo",
                "name": "Churrasco de Solomo / Punta Grill",
                "description": "Con salsa de vegetales tatemados.",
                "images": [
                    "/images/recetas/CHURRASCO-PUNTA-1.jpg"
                ]
            },
            {
                "id": "pollo_vara",
                "name": "Pollo en Vara",
                "description": "Con guasacaca.",
                "images": [
                    "/images/recetas/POLLO-EN-VARA-1.jpg"
                ]
            },
            {
                "id": "pechuga_grill",
                "name": "Churrasco o Pechuga de Pollo al Grill",
                "description": "Con salsa tatemada"
            }
        ],
        "sides": [
            {
                "id": "yuca",
                "name": "Yuca cocida",
                "images": [
                    "/images/recetas/YUCA-1.jpg"
                ]
            },
            {
                "id": "papitas",
                "name": "Papitas amarillas colombianas",
                "images": [
                    "/images/recetas/PAPAS-AMARILLAS.PNG"
                ]
            },
            {
                "id": "mazorcas",
                "name": "Mazorcas a la parrilla",
                "images": [
                    "/images/recetas/MAZORCAS-1.PNG"
                ]
            }
        ],
        "salads": [
            {
                "id": "pimentones",
                "name": "Pimentones ahumados rellenos",
                "description": "Pimentones ahumados y rellenos de queso mozarella con topping de chorizo ahumado"
            },
            {
                "id": "capressa",
                "name": "Ensalada Capressa tradicional",
                "description": "Rodajas de tomate con queso mozarella y topping de pesto de albahaca",
                "images": [
                    "/images/recetas/ENSALADA-CAPRESSA-1.JPG"
                ]
            },
            {
                "id": "cesar",
                "name": "Ensalada César",
                "description": "A base de lechuga romana, picatostes (croûtons) y queso parmesano, acompañado de un aderezo cremoso elaborado tradicionalmente con aceite de oliva, huevo, jugo de limón, ajo, salsa Worcestershire (salsa inglesa) y anchoas",
                "images": [
                    "/images/recetas/CESAR-1.jpg"
                ]
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/calculator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateQuote",
    ()=>calculateQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/rates.json.[json].cjs [app-client] (ecmascript)");
;
const rateConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$rates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const DEFAULT_DISCLAIMER = "Los precios presentados son un estimado preliminar y pueden variar según disponibilidad, temporada y requerimientos específicos del evento.";
function getAssignedBranchName(state) {
    const branches = Object.values(rateConfig.branches);
    const matchedBranch = branches.find((branch)=>branch.coveredStates.includes(state) && !branch.coveredStates.includes("DEFAULT"));
    const defaultBranch = branches.find((branch)=>branch.coveredStates.includes("DEFAULT"));
    return matchedBranch?.name ?? defaultBranch?.name ?? "Sucursal Caracas";
}
function calculateQuote(params) {
    const { pax, state, city, serviceType = "full" } = params;
    // Costo base del servicio
    const isRegionalState = rateConfig.baseRates.regionalStates.includes(state);
    const pricePerPerson = serviceType === "labor_only" ? isRegionalState ? rateConfig.baseRates.laborOnlyRegionalPricePerPerson : rateConfig.baseRates.laborOnlyNationalPricePerPerson : isRegionalState ? rateConfig.baseRates.regionalPricePerPerson : rateConfig.baseRates.nationalPricePerPerson;
    const baseCost = pricePerPerson * pax;
    // Asignación de sucursal
    const assignedBranch = getAssignedBranchName(state);
    // Costo de traslado: tarifa fija por estado + ciudad; si no existe, queda por confirmar
    const stateCityRate = rateConfig.travel.cityRates[state]?.[city];
    const isTravelPending = typeof stateCityRate !== "number";
    const isTravelDoubled = !isTravelPending && pax >= rateConfig.travel.heavyLogisticsPaxThreshold;
    const travelCost = isTravelPending ? 0 : isTravelDoubled ? stateCityRate * rateConfig.travel.heavyLogisticsMultiplier : stateCityRate;
    // Costo de hospedaje
    const requiresLodging = rateConfig.lodging.citiesRequiringLodging.includes(city);
    const grillMastersCount = requiresLodging && pax > 0 ? Math.max(rateConfig.lodging.minParrilleros, rateConfig.lodging.baseParrilleros + Math.ceil(pax / rateConfig.lodging.paxPerParrillero)) : 0;
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
        disclaimer: DEFAULT_DISCLAIMER
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "sendQuoteToWhatsApp",
    ()=>sendQuoteToWhatsApp
]);
const DEFAULT_PHONE = "584147046714";
function formatCurrency(value) {
    return `$${value.toLocaleString("es-VE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
function buildWhatsAppMessage(params) {
    const { eventDate, city, state, pax, serviceType, modality, recipes, sides, salads, baseCost, travelCost, isTravelPending, lodgingCost, total, isTravelDoubled, grillMastersCount, ownerMargin, quoteUrl } = params;
    const hasOwnerAdjustment = typeof ownerMargin === "number" && ownerMargin !== 0;
    const adjustment = hasOwnerAdjustment ? `• Ajuste administrativo: ${ownerMargin > 0 ? "+" : ""}${ownerMargin}%\n` : "";
    const travelNote = isTravelDoubled ? " (logística pesada x2)" : "";
    const lodgingNote = (grillMastersCount ?? 0) > 0 ? ` (${grillMastersCount} parrilleros)` : "";
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
        isTravelPending ? "*Nota:* El traslado está por confirmar y no está incluido en el total parcial. Cotización sujeta a confirmación y disponibilidad de fecha." : "*Nota:* Cotización sujeta a confirmación y disponibilidad de fecha.",
        quoteUrl ? "" : null,
        quoteUrl ? "*Ver cotización guardada:*" : null,
        quoteUrl || null
    ].filter((line)=>line !== null).join("\n");
}
function sendQuoteToWhatsApp(params, openedWindow) {
    const phone = params.phone?.replace(/\D/g, "") || DEFAULT_PHONE;
    const message = buildWhatsAppMessage(params);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    if (openedWindow) {
        openedWindow.location.href = url;
    } else if ("TURBOPACK compile-time truthy", 1) {
        window.open(url, "_blank", "noopener,noreferrer");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1bprwc8._.js.map