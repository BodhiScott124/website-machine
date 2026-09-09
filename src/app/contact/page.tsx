import type { Metadata } from "next";
import { knowledge } from "../_data/knowledge";

export const metadata: Metadata = {
  title: `Contact — ${knowledge.businessName}`,
  description: `Get in touch with ${knowledge.name}.`,
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-4 max-w-xl text-black/75">
          Send me an email and tell me a bit about what you have in mind. I read
          everything and reply as soon as I can.
        </p>
        <a
          href={`mailto:${knowledge.email}`}
          className="mt-8 inline-block text-xl font-medium underline underline-offset-4 hover:opacity-70"
        >
          {knowledge.email}
        </a>
        {knowledge.instagram && (
          <p className="mt-6 text-black/60">
            Or find me on{" "}
            <a
              href={`https://instagram.com/${knowledge.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              Instagram
            </a>
            .
          </p>
        )}
      </div>
    </main>
  );
}
