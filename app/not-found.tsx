import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel max-w-lg rounded-[2rem] px-8 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.55em] text-rosegold-100/78">Not Found</p>
        <h1 className="mt-5 font-display text-4xl text-champagne sm:text-5xl">
          This invitation could not be found
        </h1>
        <p className="mt-5 text-sm leading-7 text-champagne/78 sm:text-base">
          The personalized invitation link is not configured. Please return to the main
          invitation.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.32em] text-champagne"
        >
          Open Main Invitation
        </Link>
      </div>
    </main>
  );
}
