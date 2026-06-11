import type { Metadata } from "next";

import { weddingConfig } from "@/lib/wedding-config";

const siteUrl = "https://wedding-lilac-pi-46.vercel.app";

export function buildMetadata(pathname = "/", guestName?: string): Metadata {
  const title = guestName
    ? `${guestName} | ${weddingConfig.couple.groom} & ${weddingConfig.couple.bride} Wedding Invitation`
    : `${weddingConfig.couple.groom} & ${weddingConfig.couple.bride} | Wedding Invitation`;
  const description =
    guestName
      ? `Wedding invitation for ${guestName} to celebrate ${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}.`
      : `Wedding invitation for ${weddingConfig.couple.groom} & ${weddingConfig.couple.bride}.`;
  const url = new URL(pathname, siteUrl).toString();
  const imageUrl = guestName
    ? new URL(`/guest/${pathname.split("/").at(-1)}/opengraph-image`, siteUrl).toString()
    : new URL("/opengraph-image", siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: title,
    alternates: {
      canonical: pathname
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
