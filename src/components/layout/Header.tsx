"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/comidas", label: "Comidas" },
  { href: "/eventos", label: "Eventos" },
  { href: "/faqs", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
];

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogoClick = (e?: React.MouseEvent) => {
    const next = logoClicks + 1;
    setLogoClicks(next);

    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => setLogoClicks(0), 600);

    if (next >= 3) {
      setLogoClicks(0);
      if (clickTimer.current) clearTimeout(clickTimer.current);
      e?.preventDefault();
      router.push("/?admin=true");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 transition-all duration-300",
          "bg-[#0b0c0e]/60 backdrop-blur-xl",
          scrolled && "bg-[#0b0c0e]/80 shadow-2xl shadow-black/30"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center"
            aria-label="Alto Linaje - Inicio"
          >
            <Image
              src="/images/logo.png?v=2"
              alt="Alto Linaje"
              width={220}
              height={70}
              priority
              className="h-10 w-auto object-contain sm:h-14 md:h-16"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active ? "text-white" : "text-white/70 hover:text-white"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#fd0200]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#cotizador"
              className="rounded-full bg-[#fd0200] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
            >
              Cotizar Evento
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center"
                  aria-label="Alto Linaje - Inicio"
                >
                  <Image
                    src="/images/logo.png?v=2"
                    alt="Alto Linaje"
                    width={220}
                    height={70}
                    priority
                    className="h-10 w-auto object-contain sm:h-14 md:h-16"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-white"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-12 flex flex-1 flex-col items-center gap-6" aria-label="Menú móvil">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-2xl font-medium transition-colors",
                        (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                          ? "text-[#fd0200]"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <Link
                    href="/#cotizador"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex rounded-full bg-[#fd0200] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-600"
                  >
                    Cotizar Evento
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
