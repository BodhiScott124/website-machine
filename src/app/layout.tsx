import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";

const geist = Geist({
  subsets: ["latin"],
});

// TODO: change metadataBase to the real domain once bodhiscottphotography.com
// is connected in Vercel.
const siteUrl = "https://website-machine-eight.vercel.app";
const description =
  "Bodhi Scott is a landscape and night-sky photographer based in Hawaii.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bodhi Scott Photography",
  description,
  openGraph: {
    title: "Bodhi Scott Photography",
    description,
    siteName: "Bodhi Scott Photography",
    url: "/",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhi Scott Photography",
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
