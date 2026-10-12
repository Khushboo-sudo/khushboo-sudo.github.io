"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "glow";
  href?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  download,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-black shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 hover:from-amber-300 hover:to-yellow-400",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 hover:border-amber-500/30",
    outline:
      "bg-transparent border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-white hover:bg-amber-500/5",
    glow:
      "bg-[#0d0a12] border border-amber-500/30 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.12)] hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:border-amber-400/50 hover:text-amber-200",
  };

  if (href) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const resolvedHref =
      href.startsWith("/") && !href.startsWith("//") ? `${basePath}${href}` : href;

    return (
      <a
        href={resolvedHref}
        download={download}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
