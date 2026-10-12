"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComponentType } from "react";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ImageCarouselProps {
  images: string[];
  alt: string;
  fallback?: ComponentType<{ className?: string }>;
  aspectClass?: string;
}

export default function ImageCarousel({
  images,
  alt,
  fallback: FallbackIcon,
  aspectClass = "aspect-video",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const validImages = images.filter((_, i) => !imgErrors[i]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [validImages.length]);

  const currentIndex = Math.min(index, Math.max(0, validImages.length - 1));
  const prev = () =>
    setIndex((i) => (i - 1 + validImages.length) % validImages.length);
  const next = () => setIndex((i) => (i + 1) % validImages.length);

  const handleError = (i: number) => {
    setImgErrors((prev) => ({ ...prev, [i]: true }));
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-br from-[#1f2229] to-[#0b0c0e]",
        aspectClass
      )}
    >
      {validImages.length > 0 ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={validImages[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                fill
                className="object-cover"
                onError={() => handleError(currentIndex)}
              />
            </motion.div>
          </AnimatePresence>

          {validImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:text-[#fd0200]"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {validImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-colors",
                      i === currentIndex
                        ? "w-4 bg-[#fd0200]"
                        : "w-1.5 bg-white/50"
                    )}
                    aria-label={`Ver imagen ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : FallbackIcon ? (
        <FallbackIcon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-[#fd0200]/50" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm text-white/40">Sin imagen</span>
        </div>
      )}
    </div>
  );
}
