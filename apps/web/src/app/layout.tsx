import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

import "./globals.scss";
import { MainContent } from "@/components/MainContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Pusat Pelatihan Kesehatan Profesional - Sertifikasi Dokter & Tenaga Kesehatan',
  description: 'Platform pelatihan dan sertifikasi terpercaya untuk dokter, perawat, dan tenaga kesehatan profesional. Tingkatkan kompetensi dengan kurikulum terkini.',
  keywords: 'pelatihan kesehatan, sertifikasi dokter, kursus perawat, pelatihan tenaga medis, pendidikan kesehatan berkelanjutan',
  authors: [{ name: 'Tim Pelatihan Kesehatan' }],
  openGraph: {
    title: 'Pusat Pelatihan Kesehatan Profesional',
    description: 'Platform pelatihan dan sertifikasi terpercaya untuk tenaga kesehatan profesional.',
    url: 'https://ecommerce-starter-ten.vercel.app/',
    siteName: 'Pusat Pelatihan Kesehatan',
    images: [
      {
        url: '/rspp-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Pusat Pelatihan Kesehatan Profesional',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pusat Pelatihan Kesehatan Profesional',
    description: 'Platform pelatihan dan sertifikasi terpercaya untuk tenaga kesehatan profesional.',
    images: ['/rspp-building.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://ecommerce-starter-ten.vercel.app/',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
          <MainContent>
            {children}
          </MainContent>
        <Footer />
      </body>
    </html>
  );
}
