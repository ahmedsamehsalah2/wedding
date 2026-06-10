"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { weddingConfig } from "@/lib/wedding-config";

export function ShareSection() {
  const [feedback, setFeedback] = useState<string>("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: weddingConfig.share.title,
        text: weddingConfig.share.text,
        url
      });
      return;
    }

    await navigator.clipboard.writeText(url);
    setFeedback("Link copied");
    window.setTimeout(() => setFeedback(""), 2400);
  }

  return (
    <section id="share" className="px-4 pb-24 pt-8 sm:px-6 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="glass-panel rounded-[2rem] px-6 py-10 sm:px-10">
          <p className="text-xs uppercase tracking-[0.55em] text-rosegold-100/78">Share</p>
          <h2 className="mt-5 font-display text-3xl text-champagne sm:text-5xl">
            Share Invitation
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-champagne/78 sm:text-base">
            Send this invitation to loved ones with the native share sheet where supported, or
            copy the link instantly.
          </p>
          <button
            type="button"
            onClick={() => {
              void handleShare();
            }}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-rosegold-400/18 px-7 py-4 text-sm uppercase tracking-[0.32em] text-champagne transition-transform duration-300 hover:-translate-y-1"
          >
            {canNativeShare ? "Share Invitation" : "Copy Link"}
          </button>
          <p className="mt-4 min-h-6 text-xs uppercase tracking-[0.3em] text-champagne/60">
            {feedback}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
