"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wrench, ShieldCheck } from "lucide-react";
import GradientText from "../ui/GradientText";
import GlassCard from "../ui/GlassCard";

const TECH_SKILLS = [
  { name: "React.js", level: 95, color: "from-amber-300 to-amber-500" },
  { name: "Next.js", level: 90, color: "from-amber-300 to-amber-500" },
  { name: "Redux Toolkit", level: 85, color: "from-amber-300 to-amber-500" },
  { name: "Tailwind CSS", level: 95, color: "from-amber-300 to-amber-500" },
  { name: "JavaScript (ES6+)", level: 92, color: "from-amber-300 to-amber-500" },
  { name: "HTML5 & CSS3", level: 95, color: "from-amber-300 to-amber-500" },
  { name: "Bootstrap", level: 80, color: "from-amber-300 to-amber-500" },
];

const CONCEPT_SKILLS = [
  { name: "REST API Integration", desc: "Connecting secure web services & database integrations." },
  { name: "Responsive Web Design", desc: "Fluid layouts matching pixel-perfect screens and mobile devices." },
  { name: "Firebase Authentication", desc: "Auth flows, Google Sign-In, and real-time database integrations." },
  { name: "Google Maps API", desc: "Location finding, geolocation mapping, and booking systems." },
  { name: "Git & GitHub", desc: "Version control, branching, PR reviews, and team deployment workflows." },
  { name: "Figma translation", desc: "Extracting style configurations and wireframes into clean frontend code." },
  { name: "Performance Optimization", desc: "Lazy loading, code splitting, asset optimizations, and Core Web Vitals." },
  { name: "Cross-Browser Compatibility", desc: "Consistent layouts and experiences across Safari, Chrome, and Firefox." },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#040206]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[25rem] h-[25rem] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            My <GradientText gradient="from-amber-200 to-amber-500">Skills</GradientText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full mb-8"
          />

          {/* Tab buttons */}
          <div className="inline-flex bg-[#100c18]/60 border border-amber-500/10 p-1.5 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "tech"
                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              Technologies
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "tools"
                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Wrench className="w-4 h-4" />
              Tools & Concepts
            </button>
          </div>
        </div>

        {/* Tech Skills Tab */}
        {activeTab === "tech" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TECH_SKILLS.map((skill, index) => (
              <GlassCard key={skill.name} delay={index * 0.05} className="p-6 border border-amber-500/10 hover:border-amber-500/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-white tracking-wide text-sm">{skill.name}</span>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/15">
                    {skill.level}%
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Tools & Concepts Tab */}
        {activeTab === "tools" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONCEPT_SKILLS.map((skill, index) => (
              <GlassCard
                key={skill.name}
                delay={index * 0.05}
                className="flex flex-col h-full border border-amber-500/10 hover:border-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1.5 tracking-wide">{skill.name}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
