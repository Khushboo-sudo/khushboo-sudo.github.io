"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from "lucide-react";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      
      {/* Visual background lines / grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Glow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20 text-amber-200 text-xs font-semibold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.05)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Available for New Projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white"
        >
          Hi, I am <br className="sm:hidden" />
          <GradientText gradient="from-amber-200 via-yellow-400 to-amber-500">
            Khushboo Kumari
          </GradientText>
        </motion.h1>

        {/* Sub-headline / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Full-Stack Developer with <span className="text-amber-400 font-semibold">3+ years</span> of experience building responsive and scalable web applications using <span className="text-white font-semibold">React.js</span>, <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">Node.js</span>, and <span className="text-white font-semibold">Express.js</span>. Skilled in REST API integration, reusable component architectures, authentication, and performance optimisation.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl mb-20"
        >
          <Button href="#projects" variant="primary" className="w-full sm:w-auto px-7">
            Explore My Work <Code2 className="w-4 h-4" />
          </Button>
          <Button href="/Khushboo_Kumari_Resume.pdf" download="Khushboo_Kumari_Resume.pdf" variant="secondary" className="w-full sm:w-auto px-7">
            Download Resume <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button href="/resume" variant="secondary" className="w-full sm:w-auto px-7 border-amber-500/20 text-amber-200 hover:text-white">
            Online CV <Sparkles className="w-4 h-4 text-amber-400" />
          </Button>
        </motion.div>

        {/* Terminal/Code Card Preview on Hero for visual WOW factor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl glass-panel rounded-2xl border border-amber-500/10 shadow-2xl relative overflow-hidden text-left"
        >
          <div className="bg-[#0b0812] border-b border-amber-500/10 px-4 py-3.5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-amber-500/70" />
              <span>developer_profile.ts — khushboo</span>
            </div>
            <div className="w-14" /> {/* Spacer */}
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
            <div>
              <span className="text-amber-400">const</span> <span className="text-amber-200">developer</span> = &#123;
            </div>
            <div className="pl-6">
              name: <span className="text-emerald-300">&apos;Khushboo Kumari&apos;</span>,
            </div>
            <div className="pl-6">
              role: <span className="text-emerald-300">&apos;Full-Stack Developer&apos;</span>,
            </div>
            <div className="pl-6">
              experience: <span className="text-amber-300">&apos;3+ Years&apos;</span>,
            </div>
            <div className="pl-6">
              frontend: [<span className="text-emerald-300">&apos;React.js&apos;</span>, <span className="text-emerald-300">&apos;Next.js&apos;</span>, <span className="text-emerald-300">&apos;Redux Toolkit&apos;</span>, <span className="text-emerald-300">&apos;Tailwind CSS&apos;</span>],
            </div>
            <div className="pl-6">
              backend: [<span className="text-emerald-300">&apos;Node.js&apos;</span>, <span className="text-emerald-300">&apos;Express.js&apos;</span>, <span className="text-emerald-300">&apos;REST APIs&apos;</span>, <span className="text-emerald-300">&apos;Firebase Auth&apos;</span>],
            </div>
            <div className="pl-6">
              location: <span className="text-emerald-300">&apos;Noida, India&apos;</span>,
            </div>
            <div className="pl-6 text-slate-500 font-light italic">
              // Skilled in REST API integration, reusable component architectures, authentication, &amp; admin dashboards
            </div>
            <div className="pl-6">
              passions: [<span className="text-emerald-300">&apos;Full-Stack Architecture&apos;</span>, <span className="text-emerald-300">&apos;Performance Optimisation&apos;</span>, <span className="text-emerald-300">&apos;User-Centric UI/UX&apos;</span>]
            </div>
            <div>&#125;;</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-amber-500/70 text-xs font-semibold cursor-pointer hover:text-amber-400"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>

      </div>
    </section>
  );
}
