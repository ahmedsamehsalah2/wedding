/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";

import { weddingConfig } from "@/lib/wedding-config";

async function getHeroDataUrl() {
  const heroPath = path.join(process.cwd(), "public", "images", "engagement-hero.jpg");
  const file = await readFile(heroPath);

  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

type InvitationOgProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export async function renderInvitationOgImage({
  eyebrow,
  title,
  subtitle
}: InvitationOgProps) {
  const heroSrc = await getHeroDataUrl();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#12090b",
        color: "#f6efe8",
        overflow: "hidden",
        fontFamily: "Georgia, serif"
      }}
    >
      <img
        src={heroSrc}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 18%",
          filter: "grayscale(1) brightness(0.72) contrast(1.03)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(circle at 55% 35%, rgba(255,240,231,0.14), transparent 24%), linear-gradient(180deg, rgba(18,9,11,0.16), rgba(18,9,11,0.48) 48%, rgba(18,9,11,0.84))"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 28,
          display: "flex",
          borderRadius: 32,
          border: "1px solid rgba(255,255,255,0.14)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow: "0 24px 80px rgba(0,0,0,0.32)"
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 82px",
          gap: 18
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 9,
            textTransform: "uppercase",
            color: "#f6ddd1",
            opacity: 0.92
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 760,
            fontSize: 86,
            lineHeight: 0.96,
            color: "#f6efe8"
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.3,
            color: "#f3dfd4",
            maxWidth: 760
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#f6ddd1"
          }}
        >
          {weddingConfig.date.display} • {weddingConfig.date.time}
        </div>
      </div>
    </div>
  );
}
