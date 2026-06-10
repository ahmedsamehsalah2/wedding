"use client";

import { motion } from "motion/react";

type AnimatedRingProps = {
  activated: boolean;
};

export function AnimatedRing({ activated }: AnimatedRingProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative flex h-36 w-36 items-center justify-center [perspective:1200px] sm:h-40 sm:w-40"
      animate={{
        y: [0, -12, 0],
        scale: activated ? 1.18 : 1,
        rotate: activated ? 10 : 0
      }}
      transition={{
        y: {
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        },
        rotate: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
    >
      <motion.div
        className="absolute inset-4 rounded-full bg-rosegold-300/25 blur-3xl"
        animate={{
          opacity: activated ? [0.38, 0.72, 0.42] : [0.22, 0.48, 0.24]
        }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
      />

      <div className="relative h-28 w-28 -rotate-[14deg] [transform-style:preserve-3d] sm:h-32 sm:w-32">
        <div className="absolute inset-0 rounded-full border border-rosegold-100/35 bg-[conic-gradient(from_210deg_at_50%_50%,#7a432d_0deg,#f8e8df_38deg,#d79a79_72deg,#a86547_118deg,#f4ddd0_168deg,#7a432d_230deg,#e3ad8d_300deg,#f8e8df_360deg)] shadow-[0_24px_50px_rgba(0,0,0,0.35),0_0_35px_rgba(201,139,109,0.28)]" />
        <div className="absolute inset-[6px] rounded-full border border-white/20 bg-[conic-gradient(from_220deg_at_50%_50%,rgba(255,255,255,0.18),rgba(255,255,255,0.03),rgba(255,255,255,0.2),rgba(255,255,255,0.04),rgba(255,255,255,0.18))]" />
        <div className="absolute inset-[13px] rounded-full border border-rosegold-100/20 bg-[radial-gradient(circle_at_38%_26%,rgba(255,255,255,0.75),transparent_32%),conic-gradient(from_180deg_at_50%_50%,#8c5238,#1f1015_90deg,#261016_210deg,#9f6245_360deg)] shadow-inner" />
        <div className="absolute left-1/2 top-0 h-12 w-10 -translate-x-1/2 -translate-y-2 rounded-t-[1.3rem] rounded-b-[0.7rem] bg-[linear-gradient(180deg,#f5e9e3_0%,#d8ab90_35%,#8f5c41_100%)] shadow-[0_10px_24px_rgba(0,0,0,0.32)]" />
        <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border border-rosegold-100/40 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(245,233,227,0.52)_45%,rgba(143,92,65,0.6)_100%)] shadow-[0_0_16px_rgba(246,221,209,0.65)]" />
        <div className="absolute left-1/2 top-[-6px] h-10 w-10 -translate-x-1/2 rotate-45 rounded-[0.9rem] border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,224,216,0.85)_35%,rgba(174,192,214,0.72)_65%,rgba(255,255,255,0.95))] shadow-[0_0_35px_rgba(255,255,255,0.38),0_10px_30px_rgba(0,0,0,0.28)]" />
        <div className="absolute left-1/2 top-[3px] h-6 w-6 -translate-x-1/2 rotate-45 rounded-[0.45rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(214,233,255,0.86)_45%,rgba(255,255,255,0.92))]" />
        <motion.div
          className="absolute left-1/2 top-[-11px] h-14 w-2 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.95),rgba(255,255,255,0))] blur-[1px]"
          animate={{ opacity: [0.15, 0.9, 0.15], scaleY: [0.8, 1.15, 0.8] }}
          transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-5 top-2 h-2.5 w-2.5 rounded-full bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.85)]"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.4, 0.9] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-5 top-7 h-1.5 w-1.5 rounded-full bg-rosegold-100/90 shadow-[0_0_12px_rgba(246,221,209,0.9)]"
          animate={{ opacity: [0.12, 0.8, 0.12], scale: [0.7, 1.3, 0.7] }}
          transition={{ duration: 1.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.35 }}
        />
      </div>
    </motion.div>
  );
}
