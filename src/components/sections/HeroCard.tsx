"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/data";

export function HeroCard() {
  return (
    <div className="bento-card bento-card--hero" id="hero">
      <div className="bento-card__content" style={{ justifyContent: "space-between" }}>
        {/* Top section: Avatar + Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--color-card-pink), var(--color-card-yellow))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            👨‍💻
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-text-secondary)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ecdc4",
                display: "inline-block",
              }}
            />
            Disponível para projetos
          </motion.div>
        </div>

        {/* Name and bio */}
        <div style={{ marginTop: "auto", paddingTop: "var(--space-md)" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
            }}
          >
            {"Sou "}
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
              }}
            >
              {siteConfig.shortName}
            </span>
            , {siteConfig.bio.toLowerCase()}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
