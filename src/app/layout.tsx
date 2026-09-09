import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bodhi Scott Photography",
  description:
    "Bodhi Scott is a photographer shooting landscapes and portraits. Get in touch about a shoot.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.className} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
