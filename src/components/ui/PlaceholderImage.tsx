"use client";

import { ImageIcon, type LucideIcon } from "lucide-react";

interface PlaceholderImageProps {
  alt: string;
  className?: string;
  icon?: LucideIcon;
}

export default function PlaceholderImage({
  alt,
  className = "",
  icon: Icon = ImageIcon,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f2229] to-[#0b0c0e] ${className}`}
    >
      <Icon className="h-1/3 w-1/3 text-[#fd0200]/40" />
      <span className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-medium uppercase tracking-widest text-white/30">
        {alt}
      </span>
    </div>
  );
}
