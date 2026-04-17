"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ArrowButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  light?: boolean;
}

export function ArrowButton({ href, onClick, className, light }: ArrowButtonProps) {
  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={className}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: light ? "rgba(255,255,255,0.9)" : "var(--color-text-primary)",
        color: light ? "var(--color-text-primary)" : "var(--color-surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        flexShrink: 0,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Abrir link"
    >
      <ArrowUpRight size={18} strokeWidth={2.5} />
    </Comp>
  );
}
