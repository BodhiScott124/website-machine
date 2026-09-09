import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import { knowledge } from "./_data/knowledge";

const geist = Geist({
  subsets: ["latin"],
});

// knowledge.siteUrl should become bodhiscottphotography.com once that's
// connected in Vercel.
const description = `${knowledge.name} — ${knowledge.specialty.toLowerCase()}, based in ${knowledge.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(knowledge.siteUrl),
  title: knowledge.businessName,
  description,
  openGraph: {
    title: knowledge.businessName,
    description,
    siteName: knowledge.businessName,
    url: "/",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: knowledge.businessName,
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.className} h-full`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
