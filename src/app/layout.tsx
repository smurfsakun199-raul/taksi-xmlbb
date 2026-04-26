import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import HeaderTolol from "@/src/app/components/Header";
import FooterTolol from "@/src/app/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    url: 'https://taksi-xmlbb.vercel.app',
    siteName: 'Lawak bcot',
    locale: 'id_ID',
    type: 'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">
        <HeaderTolol />
        {children}
        <SpeedInsights />
        <Analytics />
        <FooterTolol />
      </body>
    </html>
  );
}
