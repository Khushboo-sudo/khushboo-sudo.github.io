"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer logic
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-[#040206]/85 backdrop-blur-md border-b border-white/5" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Khushboo Kumari Portfolio Home">
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
          <span className="font-bold text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors duration-300">
            KHUSHBOO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#100c18]/60 border border-amber-500/10 rounded-full px-2 py-1.5 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                  isActive ? "text-amber-200" : "text-slate-300 hover:text-amber-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-amber-500/10 border border-amber-500/25 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button href="/docs/Khushboo_Kumari_Resume.pdf" download="Khushboo_Kumari_Resume.pdf" variant="glow" className="text-xs py-2 px-5">
            Download CV <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#100c18]/60 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="absolute top-full left-0 w-full bg-[#0a0810]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 border-b border-white/5 ${
                    activeSection === item.href.substring(1)
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button
              href="/docs/Khushboo_Kumari_Resume.pdf"
              download="Khushboo_Kumari_Resume.pdf"
              variant="primary"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download CV <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
