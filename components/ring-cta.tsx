"use client";

import { motion } from "motion/react";

import { AnimatedRing } from "@/components/animated-ring";
import { FloatingParticles } from "@/components/floating-particles";

type RingCTAProps = {
  activated: boolean;
  onActivate: () => void;
};

export function RingCTA({ activated, onActivate }: RingCTAProps) {
  return (
    <motion.button
      type="button"
      onClick={onActivate}
      aria-label="Touch the wedding ring to reveal the invitation"
      className="group relative flex flex-col items-center gap-5 rounded-full p-4 text-center"
      whileTap={{ scale: 0.96 }}
    >
      <div className="relative">
        <FloatingParticles burst={activated} />
        <AnimatedRing activated={activated} />
      </div>
      <motion.span
        className="text-sm font-semibold uppercase tracking-[0.38em] text-champagne/85 sm:text-base"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        Touch the Ring
      </motion.span>
      <span className="absolute inset-0 rounded-full border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}
