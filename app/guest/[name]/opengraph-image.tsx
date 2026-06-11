import { ImageResponse } from "next/og";

import { getGuestNameFromSlug } from "@/lib/guest-utils";
import { renderInvitationOgImage } from "@/lib/og-image";

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
    await renderInvitationOgImage({
      eyebrow: "Wedding Invitation",
      title: guestName,
      subtitle: "You are invited to celebrate Ahmed & Soad."
    }),
    size
  );
}
