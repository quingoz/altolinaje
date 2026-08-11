import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://altolinaje.com"),
  title: {
    default: "Alto Linaje | Parrilla de Alto Nivel para Eventos",
    template: "%s | Alto Linaje",
  },
  description:
    "Carnes ahumadas, en vara y servicio gourmet en sitio. Cotiza tu evento con Alto Linaje y sorprende a tus invitados.",
  keywords: [
    "parrilla",
    "eventos",
    "carnes ahumadas",
    "carne en vara",
    "catering",
    "Venezuela",
    "Alto Linaje",
  ],
  authors: [{ name: "Alto Linaje" }],
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "Alto Linaje",
    title: "Alto Linaje | Parrilla de Alto Nivel para Eventos",
    description:
      "Carnes ahumadas, en vara y servicio gourmet en sitio. Cotiza tu evento con Alto Linaje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alto Linaje | Parrilla de Alto Nivel para Eventos",
    description:
      "Carnes ahumadas, en vara y servicio gourmet en sitio. Cotiza tu evento con Alto Linaje.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c0e] text-white">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
