"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function ContactCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="bento-card bento-card--full" id="contact">
      <div className="bento-card__content" style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
        <div style={{ flex: 1, paddingRight: "var(--space-lg)" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
              fontWeight: 700,
              marginBottom: 12,
              color: "var(--color-text-primary)",
            }}
          >
            Vamos trabalhar juntos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
              lineHeight: 1.65,
              color: "var(--color-text-secondary)",
              maxWidth: 420,
            }}
          >
            Estou disponível para novos projetos, colaborações e oportunidades.
            Entre em contato e vamos conversar!
          </motion.p>
        </div>

        {/* Email + CTA area */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              marginBottom: "var(--space-md)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              aria-label="Seu email para contato"
              style={{
                width: "100%",
                padding: "12px 20px",
                borderRadius: "var(--radius-full)",
                border: "1.5px solid var(--color-border)",
                fontSize: 14,
                fontFamily: "var(--font-body)",
                background: "transparent",
                color: "var(--color-text-primary)",
                outline: "none",
                transition: "border-color var(--transition-fast)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-card-green)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-border)";
              }}
            />
          </motion.div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <motion.a
              href={`mailto:${siteConfig.email}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: "var(--radius-full)",
                border: "1.5px solid var(--color-text-primary)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <ArrowUpRight size={14} />
              Entrar em contato
            </motion.a>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                whiteSpace: "nowrap",
              }}
            >
              Respondo em até 24h ⚡
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
