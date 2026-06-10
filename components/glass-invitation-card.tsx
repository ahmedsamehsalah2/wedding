"use client";

import { motion } from "motion/react";

import { weddingConfig } from "@/lib/wedding-config";

type GlassInvitationCardProps = {
  visible: boolean;
  guestName?: string;
};

export function GlassInvitationCard({ visible, guestName }: GlassInvitationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.92 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.92 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] px-6 py-8 text-center sm:px-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="pointer-events-none absolute left-8 top-8 h-20 w-20 rounded-full bg-rosegold-300/12 blur-2xl" />
      <div className="pointer-events-none absolute bottom-8 right-10 h-24 w-24 rounded-full bg-burgundy-300/10 blur-2xl" />

      {guestName ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mx-auto mb-7 max-w-md rounded-[1.4rem] border border-white/14 bg-[linear-gradient(180deg,rgba(183,112,82,0.18),rgba(255,255,255,0.06))] px-4 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.2)]"
        >
          <div className="text-[10px] uppercase tracking-[0.42em] text-champagne/68 sm:text-xs">
            A Personal Invitation
          </div>
          <div className="mt-3 font-display text-2xl text-shimmer sm:text-3xl">{guestName}</div>
          <p className="mt-3 text-xs leading-6 text-champagne/78 sm:text-sm">
            A reserved place has been prepared in your honor for this celebration.
          </p>
        </motion.div>
      ) : null}

      <div className="mb-6 text-xs uppercase tracking-[0.45em] text-champagne/70">
        Together with their families
      </div>
      <div className="space-y-3">
        <p className="font-display text-4xl text-shimmer sm:text-6xl">
          {weddingConfig.couple.groom}
        </p>
        <p className="font-display text-2xl text-champagne/80">&amp;</p>
        <p className="font-display text-4xl text-shimmer sm:text-6xl">
          {weddingConfig.couple.bride}
        </p>
      </div>
      <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-champagne/82 sm:text-base">
        {guestName
          ? `Request the pleasure of ${guestName}'s company to celebrate their wedding`
          : "Request the pleasure of your company to celebrate their wedding"}
      </p>
      <div className="mt-8 font-display text-2xl tracking-[0.18em] text-rosegold-100 sm:text-3xl">
        {weddingConfig.date.display}
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.4em] text-champagne/70">
        Scroll to Continue
      </p>
    </motion.div>
  );
}
