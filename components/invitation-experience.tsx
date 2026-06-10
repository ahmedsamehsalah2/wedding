"use client";

import { useEffect, useRef, useState } from "react";

import { CountdownSection } from "@/components/countdown-section";
import { DetailsSection } from "@/components/details-section";
import { HeroSection } from "@/components/hero-section";
import { ShareSection } from "@/components/share-section";

type InvitationExperienceProps = {
  guestName?: string;
};

export function InvitationExperience({ guestName }: InvitationExperienceProps) {
  const [ringActivated, setRingActivated] = useState(false);
  const hasActivatedRef = useRef(false);

  useEffect(() => {
    if (!ringActivated) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const countdown = document.getElementById("countdown");
      countdown?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [ringActivated]);

  function handleRingActivate() {
    if (hasActivatedRef.current) {
      return;
    }

    hasActivatedRef.current = true;
    setRingActivated(true);
  }

  return (
    <main>
      <HeroSection
        guestName={guestName}
        ringActivated={ringActivated}
        onRingActivate={handleRingActivate}
      />
      <CountdownSection />
      <DetailsSection />
      <ShareSection />
    </main>
  );
}
