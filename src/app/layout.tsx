import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradise Removals | Gold Coast Furniture Removalists - Your Sunny Start",
  description:
    "Gold Coast's trusted furniture removalists. Professional, affordable, and stress-free removals across Arundel, Southport, Helensvale, Coomera, Labrador & Parkwood. Get a free quote today!",
  keywords:
    "furniture removals gold coast, removalists gold coast, moving company gold coast, paradise removals, arundel movers, southport removalists, helensvale removals, coomera movers",
  openGraph: {
    title: "Paradise Removals | Gold Coast Furniture Removalists",
    description:
      "Professional, affordable, and stress-free furniture removals across the Gold Coast. Your Sunny Start to a new home.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${outfit.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
