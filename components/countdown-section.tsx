"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { weddingConfig } from "@/lib/wedding-config";

type TimeUnit = {
  label: string;
  value: string;
};

const initialCountdown: TimeUnit[] = [
  { label: "Days", value: "00" },
  { label: "Hours", value: "00" },
  { label: "Minutes", value: "00" },
  { label: "Seconds", value: "00" }
];

function getCountdownParts() {
  const target = new Date(weddingConfig.date.iso).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Minutes", value: String(minutes).padStart(2, "0") },
    { label: "Seconds", value: String(seconds).padStart(2, "0") }
  ];
}

function DigitColumn({ unit }: { unit: TimeUnit }) {
  return (
    <div className="glass-panel min-w-[140px] rounded-[1.75rem] px-5 py-6 text-center sm:min-w-[180px] sm:px-7 sm:py-8">
      <div className="relative h-16 overflow-hidden sm:h-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit.value}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 font-display text-5xl tracking-[0.12em] text-shimmer sm:text-6xl"
          >
            {unit.value}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 text-xs uppercase tracking-[0.45em] text-champagne/72">
        {unit.label}
      </div>
    </div>
  );
}

export function CountdownSection() {
  const [countdown, setCountdown] = useState<TimeUnit[]>(initialCountdown);

  useEffect(() => {
    setCountdown(getCountdownParts());

    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="px-4 py-24 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.55em] text-rosegold-100/78">Countdown</p>
        <h2 className="mt-5 font-display text-3xl text-champagne sm:text-5xl">
          Every second brings us closer
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {countdown.map((unit) => (
            <DigitColumn key={unit.label} unit={unit} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
