import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Galactic Plumbing Services | Western Sydney Plumber",
  description:
    "Fast, reliable and professional plumbing services across Western Sydney. Micah can take your booking while Luke is on-site.",
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
