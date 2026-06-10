"use client";

import { motion } from "motion/react";

import { weddingConfig } from "@/lib/wedding-config";

function isArabicText(value: string) {
  return /[\u0600-\u06FF]/.test(value);
}

const detailItems = [
  { label: "Wedding Date", value: weddingConfig.date.display },
  { label: "Wedding Time", value: weddingConfig.date.time },
  { label: "Venue Name", value: weddingConfig.venue.name },
  { label: "Venue Address", value: weddingConfig.venue.address }
];

export function DetailsSection() {
  return (
    <section id="details" className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.55em] text-rosegold-100/78">Details</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-3xl leading-tight text-champagne sm:text-5xl">
            The evening we have been waiting for
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {detailItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass-panel relative overflow-hidden rounded-[1.9rem] p-6 sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/6 to-transparent" />
              <p className="relative text-[11px] uppercase tracking-[0.36em] text-champagne/58 sm:text-xs">
                {item.label}
              </p>
              <p
                dir={isArabicText(item.value) ? "rtl" : "ltr"}
                className={[
                  "relative mt-5 whitespace-pre-line text-champagne",
                  isArabicText(item.value)
                    ? "font-body text-right text-xl leading-[1.8] sm:text-2xl"
                    : "font-display text-[2rem] leading-tight text-rosegold-100 sm:text-[2.5rem]"
                ].join(" ")}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={weddingConfig.venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-panel inline-flex items-center justify-center rounded-full px-6 py-4 text-sm uppercase tracking-[0.26em] text-champagne transition-transform duration-300 hover:-translate-y-1"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
