"use client";

import React, { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import Image from "next/image";
import GradientText from "../ui/GradientText";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "khushboosoni6746@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#040206] border-t border-amber-500/10 py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-amber-300 to-amber-500 p-[1px]">
              <div className="w-full h-full bg-[#0c0a12] rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Khushboo Logo"
                  width={32}
                  height={32}
                  className="object-cover scale-110"
                />
              </div>
            </div>
            <span className="font-bold tracking-wider text-white">KHUSHBOO</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Full-Stack Developer building high-performance, scalable web applications using React.js, Next.js, Node.js, and Express.js.
          </p>
        </div>

        {/* Action Items */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-resume"))}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors bg-white/5 border border-amber-500/20 px-4 py-2 rounded-full hover:bg-amber-500/10 cursor-pointer"
          >
            Online Resume
          </button>

          {/* Email Copy Card */}
          <div className="flex items-center gap-3 bg-[#100c18]/60 border border-amber-500/10 rounded-full px-4 py-2 text-sm text-slate-300">
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/khushboo-kumari-988a71269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-slate-400 hover:text-amber-400 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} Khushboo Kumari. All rights reserved.</span>
        <span>
          Designed & Built with <GradientText gradient="from-amber-200 to-yellow-500">♥</GradientText> in Noida, India.
        </span>
      </div>
    </footer>
  );
}
