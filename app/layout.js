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

// app/layout.js
export const metadata = {
  title: "Prayag • Web Developer",
  description:
    "I build fast, mobile-first websites & landing pages for small shops and startups. Next.js • Tailwind • Fast delivery.",
  applicationName: "Prayag — Portfolio",
  authors: [{ name: "Prayag" }],
  openGraph: {
    type: "website",
    title: "Prayag • Web Developer",
    description:
      "I build fast, mobile-first websites & landing pages for small shops and startups. Next.js • Tailwind • Fast delivery.",
    url: "https://portfolio-qg12.vercel.app/",
    siteName: "Prayag — Portfolio",
    images: [
      {
        url: "https://portfolio-qg12.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prayag Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag • Web Developer",
    description:
      "I build fast, mobile-first websites & landing pages for small shops and startups.",
    images: ["https://portfolio-qg12.vercel.app/og-image.png"],
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
