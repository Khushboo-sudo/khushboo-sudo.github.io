"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Download, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ResumeView() {
  const [activeFont, setActiveFont] = useState<"Inter" | "Plus Jakarta Sans" | "Outfit">("Inter");

  const handlePrint = () => {
    window.print();
  };

  const fontStyle = {
    fontFamily: `'${activeFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#1e293b] py-6 px-4 print:p-0 print:bg-white">
      {/* Top Action Toolbar (Hidden during Print) */}
      <div className="max-w-[840px] mx-auto mb-4 bg-white border border-slate-200 rounded-xl p-3 px-4 shadow-sm flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full text-[11px] border border-emerald-200">
              ATS-Standard
            </span>
            <span>1-Page Format</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Font Selector */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="font-medium">Font:</span>
            {(["Inter", "Plus Jakarta Sans", "Outfit"] as const).map((font) => (
              <button
                key={font}
                onClick={() => setActiveFont(font)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  activeFont === font
                    ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
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
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-md shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-md shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <main
        style={fontStyle}
        className="resume-sheet max-w-[840px] mx-auto bg-white p-8 sm:p-10 border border-slate-200 rounded-lg shadow-sm print:p-0 print:border-none print:shadow-none print:max-w-none text-[11.5px] leading-[1.45] text-[#1e293b]"
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

          {/* Pick a Pro */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                Pick a Pro – Professional Home Services Platform
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              React.js · Next.js · Redux Toolkit · Firebase Authentication · Google Maps API
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Developed service marketplace ecosystem including customer web portal and full admin dashboard.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built responsive flows for service booking, provider onboarding, authentication, and operations.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Implemented <strong className="font-semibold text-[#0f172a]">Firebase Authentication</strong> for role access and <strong className="font-semibold text-[#0f172a]">Google Maps API</strong> for location bookings.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Added Firebase push notifications, live form validation, lazy loading, and analytics dashboards.
              </li>
            </ul>
          </div>

          {/* Grasberg International */}
          <div className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                Grasberg International – Forex CRM
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              Next.js · Tailwind CSS · REST APIs · MetaTrader 5 (MT5)
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Built frontend for a forex platform combining an informational website with a role-based CRM using <strong className="font-semibold text-[#0f172a]">Next.js</strong>.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Delivered SEO-friendly website pages and modules for User, Partner, Super Admin, and Sub Admin roles.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Integrated REST APIs and worked with <strong className="font-semibold text-[#0f172a]">MetaTrader 5 (MT5)</strong> backend APIs for trading workflows.
              </li>
            </ul>
          </div>

          {/* NOBIY */}
          <div className="mb-1 break-inside-avoid">
            <div className="flex justify-between items-baseline mb-0.5">
              <span className="text-[13px] font-bold text-[#0f172a]">
                NOBIY – E-Commerce Clothing Platform
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#0369a1] bg-[#f0f9ff] border border-[#bae6fd] px-1.5 py-0.5 rounded inline-block mb-1">
              React · Redux Toolkit · Tailwind CSS · Figma
            </div>
            <ul className="list-none pl-0 flex flex-col gap-0.5">
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Developed e-commerce platform with dynamic homepage, category filters, cart, and authentication.
              </li>
              <li className="text-[11px] text-[#334155] pl-3.5 relative leading-[1.42] before:content-['•'] before:absolute before:left-0.5 before:text-[#1d4ed8]">
                Designed UI prototypes in <strong className="font-semibold text-[#0f172a]">Figma</strong> and conducted manual testing for usability and quality.
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
}
