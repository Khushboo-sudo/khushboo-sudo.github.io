"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If scrolled near page bottom, highlight contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      // Filter only section links that begin with '#'
      const sectionLinks = NAV_ITEMS.filter((item) => item.href.startsWith("#"));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionLinks.length - 1; i >= 0; i--) {
        const item = sectionLinks[i];
        const el = document.querySelector(item.href);
        if (el && (el as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(item.href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      setActiveSection(id);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3.5 bg-[#040206]/90 backdrop-blur-xl border-b border-amber-500/10 shadow-lg shadow-black/40"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group"
          aria-label="Khushboo Kumari Portfolio Home"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-amber-300 to-amber-500 p-[1px] shadow-lg shadow-amber-500/10 group-hover:rotate-6 transition-transform duration-300">
            <div className="w-full h-full bg-[#0c0a12] rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Khushboo Logo"
                width={40}
                height={40}
                className="object-cover scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors duration-300 leading-tight">
              KHUSHBOO
            </span>
            <span className="text-[9px] font-mono tracking-widest text-amber-400/80 uppercase">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#100c18]/80 border border-amber-500/20 rounded-full px-3 py-1.5 backdrop-blur-2xl shadow-inner shadow-white/5">
          {NAV_ITEMS.map((item) => {
            const isHash = item.href.startsWith("#");
            const id = isHash ? item.href.substring(1) : "";
            const isActive = isHash && activeSection === id;

            if (!isHash) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-xs font-semibold text-amber-300 hover:text-white transition-all rounded-full flex items-center gap-1 hover:bg-amber-500/10"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-xs font-semibold transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? "text-amber-200 font-bold shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                    : "text-slate-300 hover:text-amber-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/25 via-yellow-500/30 to-amber-500/25 border border-amber-400/60 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] relative z-10" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            href="/Khushboo_Kumari_Resume.pdf"
            download="Khushboo_Kumari_Resume.pdf"
            variant="glow"
            className="text-xs py-2 px-5"
          >
            Download CV <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#100c18]/80 border border-amber-500/20 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0a0810]/98 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-6 flex flex-col gap-4 md:hidden z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isHash = item.href.startsWith("#");
                const id = isHash ? item.href.substring(1) : "";
                const isActive = isHash && activeSection === id;

                if (!isHash) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-semibold py-2.5 px-4 rounded-xl text-amber-300 hover:bg-amber-500/10 flex items-center justify-between border border-amber-500/20"
                    >
                      <span>{item.label}</span>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-amber-500/20 border border-amber-400/50 text-amber-200 font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <Button
                href="/Khushboo_Kumari_Resume.pdf"
                download="Khushboo_Kumari_Resume.pdf"
                variant="primary"
                className="w-full justify-center text-xs py-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download CV <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
