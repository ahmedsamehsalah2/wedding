import { weddingConfig } from "@/lib/wedding-config";

export function slugifyGuestName(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildGuestMap() {
  return new Map(
    weddingConfig.guests.map((guest) => [slugifyGuestName(guest.name), guest.name] as const)
  );
}

export function getGuestNameFromSlug(slug: string) {
  return buildGuestMap().get(slug);
}

export function getGuestStaticParams() {
  return weddingConfig.guests.map((guest) => ({
    name: slugifyGuestName(guest.name)
  }));
}
