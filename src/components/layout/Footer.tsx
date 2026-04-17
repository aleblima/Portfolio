"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "var(--space-xl) var(--space-lg) var(--space-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-muted)",
        }}
      >
        © {currentYear} {siteConfig.name}. Feito com ♥
      </p>

      <div
        style={{
          display: "flex",
          gap: "var(--space-md)",
          alignItems: "center",
        }}
      >
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: "var(--color-text-muted)",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-text-muted)")
          }
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: "var(--color-text-muted)",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-text-muted)")
          }
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
}
