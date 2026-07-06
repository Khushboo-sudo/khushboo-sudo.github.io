import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khushboo Kumari | Royal Portfolio | Senior Frontend Engineer",
  description: "Senior Frontend Developer with 3+ years of experience specializing in React, Next.js, Redux, and Tailwind CSS. Crafting modern, high-performance, and visually stunning web interfaces.",
  keywords: "Khushboo Kumari, Frontend Developer, React Developer, Next.js Developer, Web Designer, Portfolio, Software Engineer, Noida",
  authors: [{ name: "Khushboo Kumari" }],
  creator: "Khushboo Kumari",
  openGraph: {
    title: "Khushboo Kumari | Frontend Developer Portfolio",
    description: "Stunning, high-performance, animated web platforms built with React.js and Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushboo Kumari | Frontend Developer Portfolio",
    description: "Stunning, high-performance, animated web platforms built with React.js and Next.js.",
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
      className={`${syne.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#040206] text-[#f8fafc] antialiased min-h-screen selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
