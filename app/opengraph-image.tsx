import { ImageResponse } from "next/og";

import { renderInvitationOgImage } from "@/lib/og-image";
import { weddingConfig } from "@/lib/wedding-config";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    await renderInvitationOgImage({
      eyebrow: "Wedding Invitation",
      title: `${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}`,
      subtitle: "Join us to celebrate our wedding day."
    }),
    size
  );
}
