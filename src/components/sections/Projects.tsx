"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ArrowUpRight, TrendingUp, Sparkles, ShoppingBag, Globe } from "lucide-react";
import GradientText from "../ui/GradientText";
import GlassCard from "../ui/GlassCard";

const CATEGORIES = ["All", "Full Stack", "CRM & Web", "E-Commerce"];

const PROJECTS_DATA = [
  {
    id: "pick-a-pro",
    title: "Pick a Pro",
    subtitle: "Professional Home Services Platform",
    category: "Full Stack",
    desc: "A complete service marketplace ecosystem including a customer booking portal and admin panel dashboard.",
    tech: ["React.js", "Next.js", "Redux Toolkit", "Firebase Auth", "Google Maps API"],
    bullets: [
      "Built service booking, provider onboarding, and operational workflows.",
      "Implemented role-based access controls and real-time push notifications."
    ],
    mockup: "booking"
  },
  {
    id: "grasberg",
    title: "Grasberg International",
    subtitle: "Forex Business CRM Platform",
    category: "CRM & Web",
    desc: "A robust corporate website combined with a role-based CRM dashboard integrating trading metrics.",
    tech: ["Next.js", "Tailwind CSS", "REST API", "MT5 APIs", "Charts.js"],
    bullets: [
      "Developed client-side portals for User, Partner, Super Admin, and Sub Admin roles.",
      "Integrated secure MetaTrader 5 APIs for real-time trade monitoring."
    ],
    mockup: "chart"
  },
  {
    id: "spods",
    title: "Spods Technologies Website",
    subtitle: "Modern Corporate Web Platform",
    category: "CRM & Web",
    desc: "Corporate showcase platform optimized for maximum SEO ranking, client onboarding, and speed performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Best Practices"],
    bullets: [
      "Designed and coded modern SEO-friendly layouts yielding top performance scores.",
      "Enhanced user conversion metrics via interactive services grids."
    ],
    mockup: "landing"
  },
  {
    id: "nobiy",
    title: "NOBIY",
    subtitle: "E-Commerce Clothing App",
    category: "E-Commerce",
    desc: "A sleek fashion store catalog with dynamic categorization, responsive shopping cart, and custom checkout forms.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Figma Prototype"],
    bullets: [
      "Engineered flexible client-side cart handling with persistent caching.",
      "Designed UI wireframes in Figma and conducted user feedback tests."
    ],
    mockup: "shop"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const renderMockup = (type: string) => {
    switch (type) {
      case "booking":
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-950/25 to-slate-900 border-b border-amber-500/10 relative p-4 flex flex-col justify-between overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/15 rounded-full blur-xl" />
            
            {/* Booking Card UI */}
            <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-bold text-black">SP</div>
                <div>
                  <div className="text-[10px] font-bold text-white">Plumbing Repair</div>
                  <div className="text-[8px] text-slate-400 font-light">Scheduled for Today</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">$85.00</span>
            </div>

            {/* Steps indicator */}
            <div className="flex gap-2">
              <div className="flex-1 h-1 bg-amber-500 rounded-full" />
              <div className="flex-1 h-1 bg-amber-500 rounded-full" />
              <div className="flex-1 h-1 bg-white/10 rounded-full" />
            </div>

            <div className="flex justify-between items-center text-[8px] text-amber-500/70 font-mono">
              <span>STATUS: IN_PROGRESS</span>
              <span>PROVIDER: ASSIGNED</span>
            </div>
          </div>
        );
      case "chart":
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 to-[#1e1508] border-b border-amber-500/10 relative p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-amber-500/10 rounded-full blur-xl" />
            
            {/* Chart Header */}
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" /> EUR/USD Live
              </span>
              <span className="text-amber-400 font-semibold">+1.42%</span>
            </div>

            {/* Drawing a clean chart representation using SVG */}
            <svg className="w-full h-16 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" viewBox="0 0 100 30" fill="none">
              <path
                d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2 L100,30 L0,30 Z"
                fill="url(#chart-glow)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mini User Tag */}
            <div className="flex gap-2">
              <span className="text-[8px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-white/5 font-mono">Super Admin</span>
              <span className="text-[8px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-white/5 font-mono">Partner ID: #1042</span>
            </div>
          </div>
        );
      case "landing":
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#1b1405] to-[#04020c] border-b border-amber-500/10 relative p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-12 -left-12 w-28 h-28 bg-amber-500/15 rounded-full blur-xl animate-pulse-slow" />
            
            {/* Website Hero Mockup */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[7px] text-amber-300 w-fit">
                <Sparkles className="w-2.5 h-2.5" /> Next-Gen Enterprise solutions
              </div>
              <h5 className="text-[12px] font-bold text-white tracking-tight leading-tight">Spods Innovative Tech</h5>
              <div className="w-2/3 h-1.5 bg-slate-800 rounded-full" />
            </div>

            {/* Browser frame decoration */}
            <div className="flex justify-between items-center border-t border-white/5 pt-2 text-[8px] text-slate-500 font-mono">
              <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-amber-400" /> spods.co</span>
              <span>100% SEO</span>
            </div>
          </div>
        );
      case "shop":
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#241505] to-slate-950 border-b border-amber-500/10 relative p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-500/10 rounded-full blur-xl" />

            {/* Shopping interface details */}
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">NOBIY STORE</span>
              <div className="p-1 bg-white/5 rounded-full border border-white/10 text-amber-400">
                <ShoppingBag className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Clothes grid mockup */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 border border-white/10 rounded p-1.5 flex flex-col gap-1">
                <div className="h-6 bg-slate-900 rounded" />
                <div className="h-1 bg-slate-600 rounded w-2/3" />
                <div className="h-1 bg-slate-700 rounded w-1/2" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded p-1.5 flex flex-col gap-1">
                <div className="h-6 bg-slate-900 rounded" />
                <div className="h-1 bg-slate-600 rounded w-2/3" />
                <div className="h-1 bg-slate-700 rounded w-1/2" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#03050c]">
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            My <GradientText gradient="from-amber-200 to-amber-500">Projects</GradientText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full mb-8"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 bg-[#100c18]/60 border border-amber-500/10 p-1 rounded-full w-fit mx-auto backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex"
              >
                <GlassCard
                  hoverEffect={true}
                  className="flex flex-col w-full !p-0 border border-amber-500/10 overflow-hidden hover:shadow-[0_15px_40px_-15px_rgba(245,158,11,0.25)] hover:border-amber-500/25 transition-all duration-300"
                >
                  {/* Web device vector mockup representation */}
                  {renderMockup(project.mockup)}

                  {/* Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-widest border border-amber-500/15">
                          {project.category}
                        </span>
                        <span className="text-slate-500 text-xs flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" /> Specs
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white tracking-wide mb-1 flex items-center gap-2 group-hover:text-amber-300 transition-colors">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                      </h4>
                      <p className="text-slate-400 text-xs font-semibold mb-3 italic">{project.subtitle}</p>
                      
                      <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">{project.desc}</p>
                      
                      <ul className="mb-6 space-y-1.5 text-slate-400 text-xs font-light">
                        {project.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-amber-400 font-bold select-none">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech pills footer */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
