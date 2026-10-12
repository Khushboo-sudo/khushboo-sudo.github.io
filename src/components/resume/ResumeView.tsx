"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Download, MapPin, Phone, Mail, X } from "lucide-react";

interface ResumeViewProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function ResumeView({ isModal = false, onClose }: ResumeViewProps) {
  const [activeFont, setActiveFont] = useState<"Inter" | "Plus Jakarta Sans" | "Outfit">("Inter");

  useEffect(() => {
    if (!isModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isModal, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const fontStyle = {
    fontFamily: `'${activeFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  };

  const content = (
    <div className="w-full max-w-[860px] mx-auto my-auto relative z-10">
      {/* Top Action Toolbar (Hidden during Print) */}
      <div className="mb-4 bg-[#0d0a14]/90 border border-amber-500/20 backdrop-blur-xl rounded-2xl p-3 sm:px-5 shadow-2xl flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-3">
          {isModal ? (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Close View
            </button>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
            </Link>
          )}

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span className="bg-emerald-500/15 text-emerald-300 font-bold px-2 py-0.5 rounded-full text-[11px] border border-emerald-500/30">
              ATS-Standard
            </span>
            <span>1-Page Professional</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Font Selector */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="font-medium hidden sm:inline">Font:</span>
            {(["Inter", "Plus Jakarta Sans", "Outfit"] as const).map((font) => (
              <button
                key={font}
                onClick={() => setActiveFont(font)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  activeFont === font
                    ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)] font-bold"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                }`}
              >
                {font === "Plus Jakarta Sans" ? "Jakarta" : font}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Khushboo_Kumari_Resume.pdf`}
              download="Khushboo_Kumari_Resume.pdf"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-white/10 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save
            </button>

            {isModal && onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10 ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main ATS Resume Document */}
      <main
        style={fontStyle}
        className="resume-sheet bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-white/10 text-[11.5px] leading-[1.45] text-[#1e293b]"
      >
        {/* Header Section */}
        <header className="border-b-2 border-[#0f172a] pb-2 mb-2.5 flex justify-between items-end flex-wrap gap-3">
          <div>
            <h1 className="text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-none">
              KHUSHBOO KUMARI
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[13.5px] font-bold text-[#1d4ed8]">
                Full-Stack Developer
              </span>
              <span className="bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] text-[10.5px] font-bold px-1.5 py-0.5 rounded">
                3+ Years Experience
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 text-[11px] text-[#64748b] items-end sm:items-end">
            <span className="inline-flex items-center gap-1 text-[#1e293b]">
              <MapPin className="w-3 h-3 text-[#1d4ed8] shrink-0" />
              Noida, India
            </span>
            <a
              href="tel:+918168648574"
              className="inline-flex items-center gap-1 text-[#1e293b] hover:text-[#1d4ed8] hover:underline"
            >
              <Phone className="w-3 h-3 text-[#1d4ed8] shrink-0" />
              +91 81686 48574
            </a>
            <a
              href="mailto:khushboosoni6746@gmail.com"
              className="inline-flex items-center gap-1 text-[#1e293b] hover:text-[#1d4ed8] hover:underline"
            >
              <Mail className="w-3 h-3 text-[#1d4ed8] shrink-0" />
              khushboosoni6746@gmail.com
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-2.5">
          <h2 className="text-[12px] font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-slate-200 pb-0.5 mb-1.5">
            Professional Summary
          </h2>
          <p className="text-[11px] text-[#334155] leading-[1.45] text-justify">
            Full-Stack Developer with <strong className="font-bold text-[#0f172a]">3+ years of experience</strong> building responsive and scalable web applications using <strong className="font-bold text-[#0f172a]">React.js, Next.js, Node.js, and Express.js</strong>. Skilled in REST API integration, reusable component architectures, authentication, admin dashboards, and performance optimisation. Experienced in developing user-friendly applications following modern web practices.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-2.5">
          <h2 className="text-[12px] font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-slate-200 pb-0.5 mb-1.5">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-1 text-[11px]">
            {/* Frontend & Core */}
            <div className="flex items-baseline gap-2">
              <span className="w-[135px] shrink-0 font-bold text-[#0f172a]">
                Frontend &amp; Core:
              </span>
              <div className="flex-1 flex flex-wrap gap-1 items-center">
                <span className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] font-semibold text-[10.5px] px-1.5 py-0.2 rounded">
                  React.js
                </span>
                <span className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] font-semibold text-[10.5px] px-1.5 py-0.2 rounded">
                  Next.js
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  JavaScript (ES6+)
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  HTML5
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  CSS3
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Bootstrap
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Tailwind CSS
                </span>
                <span className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] font-semibold text-[10.5px] px-1.5 py-0.2 rounded">
                  Redux Toolkit
                </span>
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="flex items-baseline gap-2">
              <span className="w-[135px] shrink-0 font-bold text-[#0f172a]">
                Backend &amp; APIs:
              </span>
              <div className="flex-1 flex flex-wrap gap-1 items-center">
                <span className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] font-semibold text-[10.5px] px-1.5 py-0.2 rounded">
                  Node.js
                </span>
                <span className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] font-semibold text-[10.5px] px-1.5 py-0.2 rounded">
                  Express.js
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  REST APIs
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Firebase Authentication
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Google Maps API
                </span>
              </div>
            </div>

            {/* Tools & Practices */}
            <div className="flex items-baseline gap-2">
              <span className="w-[135px] shrink-0 font-bold text-[#0f172a]">
                Tools &amp; Practices:
              </span>
              <div className="flex-1 flex flex-wrap gap-1 items-center">
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Git
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  GitHub
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Figma
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Performance Optimisation
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Cross-Browser Compatibility
                </span>
                <span className="bg-[#f8fafc] border border-slate-200 text-[#334155] font-medium text-[10.5px] px-1.5 py-0.2 rounded">
                  Manual Testing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-2.5">
          <h2 className="text-[12px] font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-slate-200 pb-0.5 mb-1.5">
            Work Experience
          </h2>

          {/* Spods Technologies */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-[13px] font-bold text-[#0f172a]">Spods Technologies</span>
                <span className="text-[12px] font-semibold text-[#1d4ed8]">• Full Stack Developer</span>
              </div>
              <span className="text-[11px] font-semibold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-1.5 py-0.2 rounded">
                May 2025 – Present
              </span>
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Develop scalable, responsive web applications using <strong className="font-semibold text-[#0f172a]">React.js</strong> and <strong className="font-semibold text-[#0f172a]">Next.js</strong>.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Integrated <strong className="font-semibold text-[#0f172a]">REST APIs</strong> and dynamic frontend features, improving data interaction and user engagement.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Optimised frontend performance, ensuring high responsiveness across mobile and desktop devices.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Engineered reusable UI components for scalable, maintainable architecture.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built user-facing portals and admin dashboards, enhancing operational management efficiency.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Collaborated with designers and backend developers for seamless agile project delivery.
              </li>
            </ul>
          </div>

          {/* Aiprus Software */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-[13px] font-bold text-[#0f172a]">Aiprus Software Pvt Ltd</span>
                <span className="text-[12px] font-semibold text-[#1d4ed8]">• Full Stack Software Developer</span>
              </div>
              <span className="text-[11px] font-semibold text-[#64748b] bg-[#f8fafc] border border-slate-200 px-1.5 py-0.2 rounded">
                June 2023 – January 2025
              </span>
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Developed and maintained production web applications using <strong className="font-semibold text-[#0f172a]">React.js</strong>.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Integrated third-party APIs to enhance core frontend functionality and user experience.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Implemented pixel-perfect, accessible UI directly from <strong className="font-semibold text-[#0f172a]">Figma</strong> designs.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built reusable components and responsive layouts to streamline ongoing development.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Conducted rigorous testing and debugging to ensure application quality and high reliability.
              </li>
            </ul>
          </div>

          {/* Slog Solutions */}
          <div className="mb-1 break-inside-avoid">
            <div className="flex justify-between items-baseline flex-wrap gap-1 mb-0.5">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-[13px] font-bold text-[#0f172a]">Slog Solutions Pvt Ltd</span>
                <span className="text-[12px] font-semibold text-[#1d4ed8]">• Full Stack Software Developer</span>
              </div>
              <span className="text-[11px] font-semibold text-[#64748b] bg-[#f8fafc] border border-slate-200 px-1.5 py-0.2 rounded">
                March 2022 – May 2023
              </span>
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Created responsive user interfaces with <strong className="font-semibold text-[#0f172a]">HTML5, CSS3, JavaScript</strong>, and <strong className="font-semibold text-[#0f172a]">React.js</strong>.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Optimised frontend performance and verified cross-browser compatibility across all modern browsers.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Designed adaptive layouts for mobile and desktop platforms to improve accessibility.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Maintained high code quality through active debugging and testing practices.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-2.5">
          <h2 className="text-[12px] font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-slate-200 pb-0.5 mb-1.5">
            Key Projects
          </h2>

          {/* Pick A Pro */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                Pick A Pro – On-Demand Marketplace Ecosystem
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              React.js · Next.js · React Native · Redux Toolkit · Firebase Auth &amp; FCM · Google Maps API
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Developed comprehensive marketplace across web portal, cross-platform mobile apps, partner app, and admin dashboard.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Integrated Google Maps Geolocation &amp; Places API for automated proximity dispatch, live provider tracking, and dynamic pricing.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Implemented role-based authentication via Firebase Auth and push notification queues using Firebase Cloud Messaging (FCM).
              </li>
            </ul>
          </div>

          {/* PropertyWorks */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                PropertyWorks – Real Estate Intelligence &amp; Advisory Platform
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              React.js · Next.js · TypeScript · Tailwind CSS · Node.js · REST APIs · SEO
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built end-to-end advisory platform and dedicated Admin Panel for property listings, lead management, and dynamic blog engine.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Engineered backend REST APIs, database schemas, OTP-based secure admin actions, and automated lead capture pipelines.
              </li>
            </ul>
          </div>

          {/* Memory Caravan */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                Memory Caravan – QR-Based Digital Media &amp; Keepsake Platform
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              Next.js · React · TypeScript · Supabase · Cloudflare R2 · Video Streaming · QR Routing
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Designed private video storage and streaming pipeline with Cloudflare R2, short-lived tokens, and HTTP Range streaming.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Engineered QR-based dynamic routing, Supabase database integrations, and fluid mobile-first user interfaces.
              </li>
            </ul>
          </div>

          {/* Grasberg International */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                Grasberg International – Forex Platform &amp; Role-Based CRM
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              Next.js · Tailwind CSS · REST APIs · MetaTrader 5 (MT5) · Role-Based CRM
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built frontend for a forex platform combining an informational website with a role-based CRM using Next.js.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Delivered portal modules for User, Partner, Super Admin, and Sub Admin roles with MetaTrader 5 (MT5) backend API integration.
              </li>
            </ul>
          </div>

          {/* SPODS Technologies */}
          <div className="mb-1 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                SPODS Technologies – Corporate Brand &amp; Services Platform
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              React.js · Next.js · Tailwind CSS · TypeScript · REST APIs
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Architected responsive corporate web platform optimized for fast loading, accessibility, and high SEO rankings.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Integrated REST APIs and dynamic service grids for enterprise client inquiries and operational workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="break-inside-avoid">
          <h2 className="text-[12px] font-extrabold uppercase tracking-widest text-[#0f172a] border-b border-slate-200 pb-0.5 mb-1.5">
            Education
          </h2>
          <div className="flex justify-between items-baseline flex-wrap gap-1 text-[11.5px]">
            <div>
              <span className="text-[13px] font-bold text-[#0f172a]">Maharshi Dayanand University</span>
              <span className="text-[12px] font-semibold text-[#1d4ed8]"> • Graduation</span>
              <span className="text-[11px] text-[#64748b]"> — Rohtak, Haryana</span>
            </div>
            <span className="text-[11px] font-semibold text-[#64748b]">01/2018</span>
          </div>
        </section>
      </main>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#040206]/90 backdrop-blur-2xl p-4 sm:p-6 md:p-8 flex items-start justify-center animate-fadeIn">
        {/* Ambient Cosmic glow in modal background */}
        <div className="fixed top-1/4 left-1/4 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Backdrop click dismiss */}
        <div className="fixed inset-0 -z-10" onClick={onClose} />

        {content}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040206] text-[#f8fafc] py-8 px-4 relative overflow-hidden print:p-0 print:bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="cosmic-mesh" />

      {content}
    </div>
  );
}
