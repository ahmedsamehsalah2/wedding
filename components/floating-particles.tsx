"use client";

import { motion } from "motion/react";

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 13) % 76)}%`,
  delay: index * 0.12,
  duration: 4.6 + (index % 4)
}));

type FloatingParticlesProps = {
  burst?: boolean;
};

export function FloatingParticles({ burst = false }: FloatingParticlesProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-rosegold-200/80 shadow-[0_0_18px_rgba(246,221,209,0.65)]"
          style={{ left: particle.left, top: particle.top }}
          animate={
            burst
              ? {
                  x: [0, (particle.id % 2 === 0 ? 1 : -1) * (90 + particle.id * 4)],
                  y: [0, -50 - particle.id * 10],
                  opacity: [0.2, 1, 0],
                  scale: [1, 1.6, 0.6]
                }
              : {
                  y: [0, -16, 0],
                  opacity: [0.18, 0.72, 0.18],
                  scale: [0.9, 1.15, 0.9]
                }
          }
          transition={{
            duration: burst ? 1.2 : particle.duration,
            delay: burst ? particle.delay / 2 : particle.delay,
            repeat: burst ? 0 : Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
