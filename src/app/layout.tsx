import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'WrapNRollBurrito | Best Handcrafted Burritos in Caledon East',
  description: 'Fresh, local, and delicious. Visit us at 15958 Airport Rd for the best wraps and burritos in town.',
  openGraph: {
    title: 'WrapNRollBurrito - Taste the Roll',
    description: 'Handcrafted burritos and fresh wraps served daily.',
    images: [
      {
        url: '/image/hero-burritos.png', // This will be the preview image
        width: 1200,
        height: 630,
        alt: 'WrapNRollBurrito Food Preview',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
