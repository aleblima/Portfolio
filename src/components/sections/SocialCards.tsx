"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

export function GithubCard() {
  return (
    <motion.a
      href="https://github.com/aleblima"
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card bento-card--small"
      style={{
        background: "var(--color-card-green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="bento-card__content"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Github size={48} strokeWidth={1.5} color="#fff" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export function LinkedinCard() {
  return (
    <motion.a
      href="https://www.linkedin.com/in/alejandro-lima"
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card bento-card--small"
      style={{
        background: "var(--color-card-blue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="bento-card__content"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ rotate: 10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Linkedin size={48} strokeWidth={1.5} color="#fff" />
        </motion.div>
      </div>
    </motion.a>
  );
}
