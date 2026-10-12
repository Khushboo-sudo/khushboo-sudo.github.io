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
  title: "Khushboo Kumari | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer with 3+ years of experience in React.js, Next.js, Node.js, and Express.js. Skilled in REST API integration, reusable component architectures, authentication, admin dashboards, and performance optimisation.",
  keywords: "Khushboo Kumari, Full-Stack Developer, Frontend Developer, React Developer, Next.js Developer, Node.js, Express.js, Web Designer, Portfolio, Software Engineer, Noida",
  authors: [{ name: "Khushboo Kumari" }],
  creator: "Khushboo Kumari",
  openGraph: {
    title: "Khushboo Kumari | Full-Stack Developer Portfolio",
    description: "Full-Stack Developer with 3+ years of experience building scalable web applications using React.js, Next.js, Node.js, and Express.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushboo Kumari | Full-Stack Developer Portfolio",
    description: "Full-Stack Developer with 3+ years of experience building scalable web applications using React.js, Next.js, Node.js, and Express.js.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Khushboo Kumari",
              "jobTitle": "Full-Stack Developer",
              "url": "https://khushboo-portfolio.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              },
              "email": "khushboosoni6746@gmail.com",
              "telephone": "+918168648574",
              "sameAs": [
                "https://www.linkedin.com/in/khushboo-kumari-988a71269"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
