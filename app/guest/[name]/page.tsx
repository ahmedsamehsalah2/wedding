import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InvitationExperience } from "@/components/invitation-experience";
import { buildMetadata } from "@/lib/metadata";
import { getGuestNameFromSlug, getGuestStaticParams } from "@/lib/guest-utils";

type GuestPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export function generateStaticParams() {
  return getGuestStaticParams();
}

export async function generateMetadata({ params }: GuestPageProps): Promise<Metadata> {
  const { name } = await params;
  const guestName = getGuestNameFromSlug(name);

  if (!guestName) {
    return buildMetadata("/guest");
  }

  return buildMetadata(`/guest/${name}`);
}

export default async function GuestPage({ params }: GuestPageProps) {
  const { name } = await params;
  const guestName = getGuestNameFromSlug(name);

  if (!guestName) {
    notFound();
  }

  return <InvitationExperience guestName={guestName} />;
}
