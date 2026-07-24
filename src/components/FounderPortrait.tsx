"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

export function FounderPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const primaryY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-18, 18]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);

  return (
    <div className="brand-portrait" ref={containerRef}>
      <motion.div className="brand-portrait-primary" style={{ y: primaryY }}>
        <Image
          src="/assets/team/strategic-manager-primary.webp"
          alt="Стратег-менеджер и инициатор проекта"
          fill
          sizes="(min-width: 900px) 32vw, 100vw"
        />
      </motion.div>
      <motion.div className="brand-portrait-secondary" style={{ y: secondaryY }}>
        <Image
          src="/assets/team/strategic-manager-secondary.webp"
          alt=""
          fill
          sizes="180px"
        />
      </motion.div>
      <div className="brand-portrait-label">
        <span>Project initiator / 01</span>
        <strong>{siteConfig.role}</strong>
      </div>
    </div>
  );
}
