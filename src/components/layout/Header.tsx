"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeNav, setActiveNav] = useState("Todos");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <motion.a
        href="/"
        className="gradient-text"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 800,
          fontStyle: "italic",
          letterSpacing: "-0.02em",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {siteConfig.shortName}
      </motion.a>

      {/* Nav Pill */}
      <nav className="nav-pill" role="navigation" aria-label="Navegação principal">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "nav-pill__item",
              activeNav === item.label && "nav-pill__item--active"
            )}
            onClick={() => {
              setActiveNav(item.label);
              if (item.href !== "#") {
                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-current={activeNav === item.label ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Contact */}
      <motion.a
        href="#contact"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--color-text-secondary)",
          transition: "color var(--transition-fast)",
        }}
        whileHover={{ color: "var(--color-text-primary)" }}
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contato
      </motion.a>
    </motion.header>
  );
}
