import { ImageResponse } from "next/og";

import { getGuestNameFromSlug } from "@/lib/guest-utils";
import { weddingConfig } from "@/lib/wedding-config";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type GuestOgProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function GuestOpenGraphImage({ params }: GuestOgProps) {
  const { name } = await params;
  const guestName = getGuestNameFromSlug(name) ?? "Our Guest";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top, rgba(183,112,82,0.24), transparent 28%), linear-gradient(180deg, #12090b 0%, #1a0d11 40%, #12090b 100%)",
          color: "#f6efe8",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(180deg, rgba(183,112,82,0.16), rgba(255,255,255,0.05))",
            boxShadow: "0 24px 80px rgba(0,0,0,0.3)"
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 22,
            padding: "72px 96px",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 10,
              textTransform: "uppercase",
              opacity: 0.8
            }}
          >
            A Personal Invitation
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.05,
              color: "#f6ddd1"
            }}
          >
            {guestName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1,
              background:
                "linear-gradient(120deg, #f6efe8 0%, #f6ddd1 35%, #b77052 50%, #f6efe8 70%)",
              color: "transparent"
            }}
          >
            {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              opacity: 0.92
            }}
          >
            {weddingConfig.date.display} at {weddingConfig.date.time}
          </div>
        </div>
      </div>
    ),
    size
  );
}
