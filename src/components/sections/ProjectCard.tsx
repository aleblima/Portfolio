"use client";

import { motion } from "motion/react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="bento-card bento-card--wide"
      style={{
        background: `linear-gradient(135deg, ${project.color}30, ${project.color}15)`,
        cursor: "pointer",
      }}
      id={index === 0 ? "projects" : undefined}
    >
      <div className="bento-card__content" style={{ justifyContent: "space-between" }}>
        {/* Project visual area — tilted card preview */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-md) 0",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "75%",
              maxWidth: 320,
              aspectRatio: "16/10",
              borderRadius: "var(--radius-md)",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-md)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              transform: "perspective(800px) rotateY(-4deg) rotateX(4deg)",
            }}
          >
            {project.status && (
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
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                }}
              >
                {project.status}
              </span>
            )}
            <span style={{ fontSize: 40, marginBottom: 8 }}>
              {project.icon || (project.tags.includes("Java") ? "☕" : "🌀")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                color: "var(--color-text-primary)",
                textAlign: "center",
              }}
            >
              {project.title}
            </span>
            <div
              style={{
                display: "flex",
                gap: 6,
                marginTop: 10,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 10,
                    padding: "3px 10px",
                    borderRadius: "var(--radius-full)",
                    background: `${project.color}40`,
                    color: "var(--color-text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Card footer */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(0,0,0,0.25)",
                marginBottom: 4,
                fontFamily: "var(--font-mono)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <p
              style={{
                fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.55,
                maxWidth: 300,
              }}
            >
              {project.description.slice(0, 90)}...
            </p>
          </div>
          <ArrowButton
            href={project.liveUrl || project.repoUrl}
            light
          />
        </div>
      </div>
    </div>
  );
}
