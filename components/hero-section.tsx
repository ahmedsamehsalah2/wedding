"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { GlassInvitationCard } from "@/components/glass-invitation-card";
import { FloatingParticles } from "@/components/floating-particles";
import { RingCTA } from "@/components/ring-cta";
import { weddingConfig } from "@/lib/wedding-config";

type HeroSectionProps = {
  guestName?: string;
  ringActivated: boolean;
  onRingActivate: () => void;
};

function revealTransition(delay: number) {
  return {
    duration: 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  };
}

export function HeroSection({
  guestName,
  ringActivated,
  onRingActivate
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={weddingConfig.heroImage}
          alt="Ahmed and Soad engagement portrait"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-[center_18%] grayscale brightness-[0.8] contrast-[1.01] saturate-[0.8] [filter:grayscale(1)_contrast(1.01)_brightness(0.8)_saturate(0.8)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,240,231,0.08),transparent_24%),radial-gradient(circle_at_center,transparent_38%,rgba(18,9,11,0.28)_72%,rgba(18,9,11,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,9,11,0.12),rgba(18,9,11,0.4)_48%,rgba(18,9,11,0.72))]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(183,112,82,0.08),transparent_36%,rgba(255,255,255,0.03)_56%,rgba(92,38,59,0.18)_100%)] mix-blend-screen" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/10 to-transparent blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/22 to-transparent blur-2xl" />
        <div className="absolute inset-0 backdrop-blur-[0.6px] [mask-image:radial-gradient(circle_at_center,transparent_64%,black_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,transparent_64%,black_100%)]" />
      </div>

      <div className="film-grain absolute inset-0">
        <FloatingParticles burst={false} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition(0.45)}
            className="font-display text-5xl text-shimmer sm:text-7xl md:text-8xl"
          >
            {weddingConfig.couple.groom}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition(1.25)}
            className="my-8"
          >
            <RingCTA activated={ringActivated} onActivate={onRingActivate} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition(0.8)}
            className="font-display text-5xl text-shimmer sm:text-7xl md:text-8xl"
          >
            {weddingConfig.couple.bride}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition(1.05)}
            className="mt-8 text-sm uppercase tracking-[0.5em] text-champagne/82 sm:text-base"
          >
            {weddingConfig.date.display}
          </motion.p>

          <div id="invitation-card" className="mt-10 w-full">
            <GlassInvitationCard visible guestName={guestName} />
          </div>
        </div>
      </div>
    </section>
  );
}
