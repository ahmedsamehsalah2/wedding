import type { Metadata } from "next";

import { weddingConfig } from "@/lib/wedding-config";

const siteUrl = "https://example.vercel.app";

export function buildMetadata(pathname = "/"): Metadata {
  const title = `${weddingConfig.couple.groom} & ${weddingConfig.couple.bride} | Wedding Invitation`;
  const description =
    "A luxury interactive wedding invitation experience for Ahmed & Soad.";
  const url = new URL(pathname, siteUrl).toString();

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
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
