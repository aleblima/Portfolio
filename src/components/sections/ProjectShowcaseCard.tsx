"use client";

import { motion } from "motion/react";
import { ArrowButton } from "@/components/ui/ArrowButton";

interface ProjectShowcaseCardProps {
  title: string;
  color: string;
  icon: string;
  href?: string;
  tall?: boolean;
  status?: string;
}

export function ProjectShowcaseCard({
  title,
  color,
  icon,
  href,
  tall = false,
  status,
}: ProjectShowcaseCardProps) {
  return (
    <div
      className={`bento-card ${tall ? "bento-card--tall" : "bento-card--medium"}`}
      style={{ background: color, cursor: href ? "pointer" : "default" }}
    >
      <div
        className="bento-card__content"
        style={{ justifyContent: "space-between" }}
      >
        {/* Project visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: tall ? 80 : 56,
          }}
        >
          {status && (
            <span
              style={{
                position: "absolute",
                top: 16,
                background: "#facc15",
                color: "#111111", 
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                fontSize: 10,
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                zIndex: 10,
              }}
            >
              {status}
            </span>
          )}
          {icon}
        </motion.div>

        {/* Card footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </span>
          {href && <ArrowButton href={href} light />}
        </div>
      </div>
    </div>
  );
}
