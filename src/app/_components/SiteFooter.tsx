import Link from "next/link";
import { knowledge } from "../_data/knowledge";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {knowledge.businessName}
        </p>
        <nav className="flex flex-wrap gap-5">
          <Link href="/work" className="hover:text-black">
            Work
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
          {knowledge.instagram && (
            <a
              href={`https://instagram.com/${knowledge.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Instagram
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
