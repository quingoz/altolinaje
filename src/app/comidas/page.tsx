import type { Metadata } from "next";
import { ClientMenuPage } from "./ClientMenuPage";

export const metadata: Metadata = {
  title: "Comidas",
  description:
    "Explora el menú completo de Alto Linaje: cortes premium ahumados, recetas en vara, contornos y ensaladas para tu evento.",
};

export default function ComidasPage() {
  return <ClientMenuPage />;
}
