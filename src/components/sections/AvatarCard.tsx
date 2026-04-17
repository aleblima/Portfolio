"use client";

import Image from "next/image";
import { motion } from "motion/react";
import avatarImage from "../../assets/20260317_215508.jpg";

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
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.3)",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
          }}
        >
          <Image
            src={avatarImage}
            alt="Avatar"
            fill
            sizes="124px"
            style={{ objectFit: "cover", objectPosition: "50% 28%" }}
            priority
          />
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
