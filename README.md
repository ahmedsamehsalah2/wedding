# Ahmed & Soad Wedding Invitation

Luxury wedding invitation microsite built with Next.js 15, TypeScript, TailwindCSS, and Motion for React.

## Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- Motion for React
- Vercel deployment

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace the Hero Photo

Place the processed hero images at:

`public/images/engagement-hero-desktop.jpg`

`public/images/engagement-hero-mobile.jpg`

This project now uses separate hero crops for desktop and mobile automatically.

The UI is already styled to apply:

- cinematic monochrome treatment
- warm contrast
- soft vignette
- subtle edge blur impression
- film grain overlay
- rose-gold floating particles

Update `heroImage` in `lib/wedding-config.ts` if you want to use different file names.

## Edit Invitation Content

Update `lib/wedding-config.ts` to change:

- couple names
- wedding date and time
- venue name
- venue address
- Google Maps link
- share title/text
- guest names

## Guest Personalization

Public route:

- `/`

Personalized route pattern:

- `/guest/[name]`

Examples generated from the default config:

- `/guest/omar`
- `/guest/mahmoud`
- `/guest/mohamed`

Guest slugs are generated automatically from display names by `slugifyGuestName()` in `lib/guest-utils.ts`.

Unknown guest slugs return the custom 404 page.

## Project Structure

```text
app/
  guest/[name]/page.tsx
  layout.tsx
  not-found.tsx
  page.tsx
components/
  invitation-experience.tsx
  hero-section.tsx
  glass-invitation-card.tsx
  countdown-section.tsx
  details-section.tsx
  share-section.tsx
lib/
  wedding-config.ts
  guest-utils.ts
  metadata.ts
```

## Build and Verify

```bash
npm run build
```

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`
5. Output setting: leave default for App Router deployment.
6. Add the real production domain in `lib/metadata.ts` by replacing `https://example.vercel.app`.
7. Redeploy after adding the final engagement photo and venue details.

## Notes

- The invitation is mobile-first and optimized for Vercel-hosted Next.js deployment.
- No database, RSVP flow, or admin panel is included.
- The site is designed as a single premium storytelling experience, not an event management app.
