import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bodhi Scott Photography",
  description:
    "Bodhi Scott is a landscape and night-sky photographer based in Hawaii. Portrait sessions on request.",
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
