"use client";

import html2canvas from "html2canvas";
import Image from "next/image";
import { jsPDF } from "jspdf";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export interface OwnerPDFData {
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

function generateQuoteCode() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `AL-${date}-${suffix}`;
}

const OwnerPDF = forwardRef<OwnerPDFRef, OwnerPDFData>(
  function OwnerPDF(props, ref) {
    const templateRef = useRef<HTMLDivElement>(null);
    const [quoteCode] = useState(generateQuoteCode);

    useImperativeHandle(ref, () => ({
      download: async () => {
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
          const canvas = await html2canvas(el, {
            scale: 2,
            useCORS: true,
            logging: false,
            onclone: (doc: Document) => {
              const cloned = doc.getElementById("owner-pdf-template");
              if (cloned) {
                cloned.style.position = "static";
                cloned.style.left = "0";
                cloned.style.top = "0";
                cloned.style.transform = "none";
                cloned.style.zIndex = "1";
              }
            },
          });

          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF("p", "pt", "a4");

          const pageWidth = pdf.internal.pageSize.getWidth();
          const imgHeight = (canvas.height * pageWidth) / canvas.width;

          pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeight);
          pdf.save(`alto-linaje-cotizacion-${quoteCode}.pdf`);
        } finally {
          el.style.position = originalPosition;
          el.style.left = originalLeft;
          el.style.top = originalTop;
          el.style.zIndex = originalZIndex;
          el.style.transform = originalTransform;
        }
      },
    }));

    const hasMargin = props.ownerMargin !== 0;
    const marginAmount = props.total * (props.ownerMargin / 100);
    const adjustedTotal = props.total + marginAmount;

    return (
      <div
        ref={templateRef}
        id="owner-pdf-template"
        className="fixed left-[-9999px] top-0 w-[210mm] bg-[#ffffff] p-[15mm] text-[11pt] text-[#000000]"
        style={{ zIndex: -1 }}
      >
        <header className="flex items-center justify-between rounded-t-2xl bg-[#0b0c0e] p-4 border-b-2 border-[#fd0200]">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png?v=2"
              alt="Alto Linaje"
              width={220}
              height={70}
              unoptimized
              priority
              className="h-10 w-auto object-contain sm:h-14 md:h-16"
            />
            <div>
              <h1 className="text-[18pt] font-bold leading-none text-[#ffffff]">
                Alto Linaje
              </h1>
              <p className="text-[8pt] text-[#9ca3af]">
                Experiencias de parrilla de alto nivel
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8pt] text-[#d1d5db]">Cotización oficial</p>
            <p className="text-[13pt] font-bold text-[#fd0200]">
              {quoteCode}
            </p>
            <p className="text-[8pt] text-[#9ca3af]">{today}</p>
          </div>
        </header>

        <main className="mt-6 space-y-5">
          <section>
            <h2 className="text-[12pt] font-bold uppercase tracking-wider text-[#fd0200]">
              Datos del evento
            </h2>
            <table className="mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]">
              <tbody>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Fecha
                  </td>
                  <td className="p-2">{props.eventDate || "Por definir"}</td>
                </tr>
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Ubicación
                  </td>
                  <td className="p-2">
                    {props.city}, {props.state}
                  </td>
                </tr>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Distancia estimada
                  </td>
                  <td className="p-2">{props.distanceKm} km</td>
                </tr>
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Invitados
                  </td>
                  <td className="p-2">{props.pax} personas</td>
                </tr>
                <tr className="bg-[#f9fafb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
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
            <table className="mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]">
              <tbody>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Modalidad
                  </td>
                  <td className="p-2">{props.modalityName || "-"}</td>
                </tr>
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Recetas
                  </td>
                  <td className="p-2">{props.recipes.join(", ") || "-"}</td>
                </tr>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Contornos
                  </td>
                  <td className="p-2">{props.sides.join(", ") || "-"}</td>
                </tr>
                <tr>
                  <td className="w-1/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
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
            <table className="mt-2 w-full border-collapse border border-[#d1d5db] text-[10pt]">
              <tbody>
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Servicio de carnes
                  </td>
                  <td className="p-2 text-right font-mono">
                    {formatCurrency(props.baseCost)}
                  </td>
                </tr>
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
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
                <tr className="border-b border-[#e5e7eb]">
                  <td className="w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                    Hospedaje de parrilleros
                    {props.grillMastersCount > 0 && (
                      <span className="ml-1 text-[8pt] text-[#6b7280]">
                        ({props.grillMastersCount} parrilleros)
                      </span>
                    )}
                  </td>
                  <td className="p-2 text-right font-mono">
                    {formatCurrency(props.lodgingCost)}
                  </td>
                </tr>
                {hasMargin && (
                  <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                    <td className="w-2/3 border-r border-[#e5e7eb] p-2 font-semibold text-[#374151]">
                      Ajuste administrativo
                      <span
                        className={`ml-1 text-[8pt] ${
                          props.ownerMargin > 0
                            ? "text-[#16a34a]"
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
                          ? "text-[#16a34a]"
                          : "text-[#fd0200]"
                      }`}
                    >
                      {formatCurrency(marginAmount)}
                    </td>
                  </tr>
                )}
                <tr className="bg-[#000000] text-[#ffffff]">
                  <td className="w-2/3 border-r border-[#374151] p-3 font-bold uppercase">
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

        <footer className="mt-10 border-t border-[#d1d5db] pt-4 text-[8pt] text-[#4b5563]">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <p className="font-semibold text-[#000000]">Notas comerciales:</p>
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
              <div className="mx-auto h-16 w-16 rounded-full border-2 border-[#fd0200] bg-[#f9fafb] p-3">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#fd0200] text-[7pt] font-bold text-[#ffffff]">
                  AL
                </div>
              </div>
              <p className="mt-2 font-semibold text-[#000000]">Sello de validación</p>
              <p className="text-[7pt] text-[#6b7280]">Alto Linaje</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
);

export default OwnerPDF;
