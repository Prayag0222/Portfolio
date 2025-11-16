import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prayag • Full-Stack Developer & Web Designer",
  description: "Freelancer Web Developer building modern websites, landing pages, one-page business sites, and fast React/Next.js UIs. Available for projects.",
  keywords: [
    "web developer",
    "freelancer",
    "next.js developer",
    "react developer",
    "landing page developer",
    "ev showroom website",
    "website for shop",
    "portfolio developer",
    "India freelancer",
    "Nasrullaganj web dev",
  ],
  authors: [{ name: "Prayag" }],
  creator: "Prayag",
  publisher: "Prayag",
  metadataBase: new URL("https://your-domain.com"), // your deployed portfolio link
  openGraph: {
    title: "Prayag • Web Developer & Designer",
    description: "I build fast, modern websites using React, Next.js & Tailwind.",
    url: "https://portfolio-qg12.vercel.app/",
    siteName: "Prayag's Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag • Web Developer",
    description: "Freelancer Web Developer building modern websites.",
    images: ["https://your-domain.com/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
