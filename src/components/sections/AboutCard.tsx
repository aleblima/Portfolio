"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function AboutCard() {
  return (
    <div className="bento-card bento-card--wide" id="about">
      <div className="bento-card__content" style={{ justifyContent: "space-between" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
              fontWeight: 700,
              marginBottom: 16,
              color: "var(--color-text-primary)",
              lineHeight: 1.3,
            }}
          >
            De código a interfaces que conectam
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              maxWidth: 520,
            }}
          >
            Sou um desenvolvedor apaixonado por criar soluções que unem código
            limpo e design intuitivo. Com experiência em Java, Angular e React,
            busco sempre entregar projetos que fazem a diferença — do backend
            robusto à interface que encanta.
          </motion.p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "var(--space-md)",
          }}
        >
          <motion.a
            href="https://github.com/aleblima"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--color-text-primary)",
              borderBottom: "1.5px solid var(--color-text-primary)",
              paddingBottom: 2,
            }}
          >
            <ArrowUpRight size={14} />
            Saiba mais
          </motion.a>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 13,
              color: "var(--color-text-muted)",
            }}
          >
            {new Date().getFullYear()}
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export function SkillsCard() {
  return (
    <div className="bento-card bento-card--small" style={{ background: "var(--color-surface)" }}>
      <div
        className="bento-card__content"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            width: 64,
            height: 64,
            borderRadius: "var(--radius-md)",
            background: "var(--color-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
          }}
        >
          ☕
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            fontSize: 12,
            color: "var(--color-text-muted)",
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Java Lover
        </motion.p>
      </div>
    </div>
  );
}
