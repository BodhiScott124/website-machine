import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bodhi Scott Photography",
  description:
    "Get in touch with Bodhi Scott about prints, bookings and portrait sessions.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-4 max-w-xl text-black/75">
          For prints, bookings and portrait sessions, send me an email and tell
          me a bit about what you have in mind. I read everything and reply as
          soon as I can.
        </p>
        <a
          href="mailto:bscotthawaii@gmail.com"
          className="mt-8 inline-block text-xl font-medium underline underline-offset-4 hover:opacity-70"
        >
          bscotthawaii@gmail.com
        </a>
      </div>
    </main>
  );
}
