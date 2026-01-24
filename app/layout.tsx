import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plustJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bliskr - Find Meaningful Connections & Date Confidently",
  description:
    "Bliskr is the modern dating app designed to help you find genuine connections. Discover compatible matches based on your interests, lifestyle, and preferences. Join thousands of singles ready for meaningful relationships.",
  keywords: [
    "dating app",
    "online dating",
    "find love",
    "meaningful connections",
    "singles",
    "relationships",
    "match making",
    "dating platform",
  ],
  openGraph: {
    title: "Bliskr - Find Meaningful Connections & Date Confidently",
    description:
      "Discover compatible matches based on your interests, lifestyle, and preferences. Join Bliskr today!",
    type: "website",
    siteName: "Bliskr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bliskr - Find Meaningful Connections",
    description:
      "The modern dating app for genuine connections. Join thousands of singles ready for meaningful relationships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plustJakartaSans.variable} `}>
      <body className={`font-plus-jakarta-sans`}>{children}</body>
    </html>
  );
}
