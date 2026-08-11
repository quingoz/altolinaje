"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export interface OwnerPDFData {
  quoteCode: string;
  eventDate: string;
  pax: number;
  state: string;
  city: string;
  distanceKm: number;
  assignedBranch: string;
  modalityName: string;
  recipes: string[];
  sides: string[];
  salads: string[];
  baseCost: number;
  travelCost: number;
  lodgingCost: number;
  total: number;
  ownerMargin: number;
  isTravelDoubled: boolean;
  grillMastersCount: number;
}

export interface OwnerPDFRef {
  download: () => Promise<void>;
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString("es-VE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const today = new Date().toLocaleDateString("es-VE", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const OwnerPDF = forwardRef<OwnerPDFRef, OwnerPDFData>(
  function OwnerPDF(props, ref) {
    const templateRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      download: async () => {
        if (!templateRef.current) return;

        const { default: html2pdf } = await import("html2pdf.js");

        html2pdf()
          .from(templateRef.current)
          .set({
            margin: 0,
            filename: `alto-linaje-cotizacion-${props.quoteCode}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
              scale: 2,
              useCORS: true,
              logging: false,
            },
            jsPDF: {
              unit: "pt",
              format: "a4",
              orientation: "portrait",
            },
          })
          .save();
      },
    }));

    const hasMargin = props.ownerMargin !== 0;
    const marginAmount = props.total * (props.ownerMargin / 100);
    const adjustedTotal = props.total + marginAmount;

    return (
      <div
        ref={templateRef}
        className="fixed left-[-9999px] top-0 w-[210mm] bg-white p-[15mm] text-[11pt] text-black"
        style={{ zIndex: -1 }}
      >
        <header className="flex items-center justify-between border-b-2 border-[#fd0200] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <span className="text-[10pt] font-bold">AL</span>
            </div>
            <div>
              <h1 className="text-[18pt] font-bold leading-none text-black">
                Alto Linaje
              </h1>
              <p className="text-[8pt] text-gray-600">
                Experiencias de parrilla de alto nivel
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8pt] text-gray-500">Cotización oficial</p>
            <p className="text-[13pt] font-bold text-[#fd0200]">
              {props.quoteCode}
            </p>
            <p className="text-[8pt] text-gray-500">{today}</p>
          </div>
        </header>

        <main className="mt-6 space-y-5">
          <section>
            <h2 className="text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]">
              Datos del evento
            </h2>
            <table className="mt-2 w-full border-collapse border border-gray-300 text-[10pt]">
              <tbody>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Fecha
                  </td>
                  <td className="p-2">{props.eventDate || "Por definir"}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Ubicación
                  </td>
                  <td className="p-2">
                    {props.city}, {props.state}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Distancia estimada
                  </td>
                  <td className="p-2">{props.distanceKm} km</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Invitados
                  </td>
                  <td className="p-2">{props.pax} personas</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Sucursal asignada
                  </td>
                  <td className="p-2">{props.assignedBranch}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]">
              Menú seleccionado
            </h2>
            <table className="mt-2 w-full border-collapse border border-gray-300 text-[10pt]">
              <tbody>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Modalidad
                  </td>
                  <td className="p-2">{props.modalityName || "-"}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Recetas
                  </td>
                  <td className="p-2">{props.recipes.join(", ") || "-"}</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Contornos
                  </td>
                  <td className="p-2">{props.sides.join(", ") || "-"}</td>
                </tr>
                <tr>
                  <td className="w-1/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Ensaladas
                  </td>
                  <td className="p-2">{props.salads.join(", ") || "-"}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]">
              Resumen de cotización
            </h2>
            <table className="mt-2 w-full border-collapse border border-gray-300 text-[10pt]">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="w-2/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Servicio de carnes
                  </td>
                  <td className="p-2 text-right font-mono">
                    {formatCurrency(props.baseCost)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="w-2/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Logística / traslado
                    {props.isTravelDoubled && (
                      <span className="ml-1 text-[8pt] text-[#fd0200]">
                        (x2 logística pesada)
                      </span>
                    )}
                  </td>
                  <td className="p-2 text-right font-mono">
                    {formatCurrency(props.travelCost)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="w-2/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                    Hospedaje de parrilleros
                    {props.grillMastersCount > 0 && (
                      <span className="ml-1 text-[8pt] text-gray-500">
                        ({props.grillMastersCount} parrilleros)
                      </span>
                    )}
                  </td>
                  <td className="p-2 text-right font-mono">
                    {formatCurrency(props.lodgingCost)}
                  </td>
                </tr>
                {hasMargin && (
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="w-2/3 border-r border-gray-200 p-2 font-semibold text-gray-700">
                      Ajuste administrativo
                      <span
                        className={`ml-1 text-[8pt] ${
                          props.ownerMargin > 0
                            ? "text-green-600"
                            : "text-[#fd0200]"
                        }`}
                      >
                        ({props.ownerMargin > 0 ? "+" : ""}
                        {props.ownerMargin}%)
                      </span>
                    </td>
                    <td
                      className={`p-2 text-right font-mono ${
                        props.ownerMargin > 0
                          ? "text-green-600"
                          : "text-[#fd0200]"
                      }`}
                    >
                      {formatCurrency(marginAmount)}
                    </td>
                  </tr>
                )}
                <tr className="bg-black text-white">
                  <td className="w-2/3 border-r border-gray-700 p-3 font-bold uppercase">
                    Total estimado
                  </td>
                  <td className="p-3 text-right font-mono font-bold">
                    {formatCurrency(hasMargin ? adjustedTotal : props.total)} USD
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>

        <footer className="mt-10 border-t border-gray-300 pt-4 text-[8pt] text-gray-600">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <p className="font-semibold text-black">Notas comerciales:</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>
                  Cotización sujeta a confirmación y disponibilidad de fecha.
                </li>
                <li>
                  Precio de hospedaje y logística sujeto a ajustes en la
                  negociación final.
                </li>
                <li>
                  Reserva con el 50% del total para confirmar la fecha.
                </li>
              </ul>
            </div>
            <div className="w-40 text-center">
              <div className="mx-auto h-16 w-16 rounded-full border-2 border-[#fd0200] bg-gray-50 p-3">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#fd0200] text-[7pt] font-bold text-white">
                  AL
                </div>
              </div>
              <p className="mt-2 font-semibold text-black">Sello de validación</p>
              <p className="text-[7pt] text-gray-500">Alto Linaje</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
);

export default OwnerPDF;
