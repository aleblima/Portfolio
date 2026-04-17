"use client";

import { motion } from "motion/react";

export function AvatarCard() {
  return (
    <div
      className="bento-card bento-card--medium"
      style={{ background: "var(--color-card-blue)" }}
    >
      <div
        className="bento-card__content"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            backdropFilter: "blur(10px)",
          }}
        >
          🧑‍💻
        </motion.div>

        {/* Decorative underscore */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 24 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{
            height: 3,
            background: "var(--color-text-primary)",
            borderRadius: 2,
            marginTop: "var(--space-md)",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
