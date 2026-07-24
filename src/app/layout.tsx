import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-mono" });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — инвестиционная платформа`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteConfig.name} — контент как операционная система`,
    description: siteConfig.description,
    type: "website",
    locale: "ru_KZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geist.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
