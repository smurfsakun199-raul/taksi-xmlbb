import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import HeaderTolol from "@/app/components/Header";
import FooterTolol from "@/app/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: 'swap',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: 'swap',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Ramah",
  description: 'Gimana biar website terlihat sangat cepat dan estetik ? Lihat contoh desain website kami & temukan referensi serta inspirasi kamu disini,yuk gas!',
  keywords: ["portfolio estetik", "portfolio sederhana", "Apa itu portfolio?", "contoh website yang keren", "10 contoh website tercepat", "Bagaimana mencapai skor 100% pada website?"],
  openGraph: {
    title: 'Web Kebacotan Author Tolol',
    description: 'Gimana biar website terlihat estetik? Lihat contoh desain website kami & temukan referensi serta inspirasi kamu disini,yuk gas!',
    url: 'https://pemalas.vercel.app',
    siteName: 'Lawak bcot',
    locale: 'id_ID',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">
        <SpeedInsights />
        <HeaderTolol />
        {children}
        <script
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        />
        <script
          src="https://files.bpcontent.cloud/2026/05/25/16/20260525160900-2U3KAYHP.js" defer
        />
        <FooterTolol />
        <Analytics />
      </body>
    </html>
  );
}
