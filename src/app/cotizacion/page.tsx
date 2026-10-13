import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteSummary from "./QuoteSummary";

export const metadata: Metadata = {
  title: "Resumen de cotización",
  description: "Consulta el resumen guardado de una cotización de Alto Linaje.",
  robots: { index: false, follow: false },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-16 sm:px-6 lg:px-8">
      <Suspense fallback={<p className="text-center text-white/60">Cargando cotización...</p>}>
        <QuoteSummary />
      </Suspense>
    </main>
  );
}
