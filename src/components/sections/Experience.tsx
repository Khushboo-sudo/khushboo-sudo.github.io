"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import GradientText from "../ui/GradientText";
import GlassCard from "../ui/GlassCard";

const WORK_EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Spods Technologies",
    period: "May 2025 - Present",
    bullets: [
      "Developing scalable and responsive web applications using React.js and Next.js.",
      "Building complete user-side platforms and admin panels for business management systems.",
      "Integrating REST APIs and implementing dynamic frontend functionality.",
      "Optimizing frontend performance and improving user experience across devices.",
      "Collaborating with designers and backend developers for seamless project delivery.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AIPRUS SOFTWARE PVT LTD",
    period: "June 2023 - Feb 2024",
    bullets: [
      "Developed and maintained responsive web applications using React.js.",
      "Implemented pixel-perfect UI from Figma design prototypes.",
      "Integrated third-party APIs and improved frontend functionality.",
      "Built reusable component libraries and responsive layouts.",
      "Performed testing and debugging to maintain application quality.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SLOG SOLUTIONS PVT LTD",
    period: "Mar 2022 - May 2023",
    bullets: [
      "Built responsive user interfaces using HTML, CSS, JavaScript, and React.js.",
      "Improved frontend performance and ensured cross-browser compatibility.",
      "Developed responsive layouts for mobile and desktop platforms.",
      "Maintained code quality through debugging and testing practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#06040a]/40">
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Work <GradientText gradient="from-amber-200 to-amber-500">Experience</GradientText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-500/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-500/10 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {WORK_EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${index}`}
                  className="flex flex-col md:flex-row relative items-stretch gap-8 md:gap-0"
                >
                  {/* Left Side (Desktop: empty or content / Mobile: padding) */}
                  <div className={`w-full md:w-1/2 flex justify-start md:justify-end md:pr-12 md:text-right ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="pl-12 md:pl-0 flex flex-col justify-center gap-1.5"
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider md:justify-end">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-white tracking-wide">{exp.company}</h4>
                      <p className="text-slate-400 text-sm font-medium">{exp.role}</p>
                    </motion.div>
                  </div>

                  {/* Center timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-4 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-6 h-6 rounded-full bg-slate-950 border-4 border-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Right Side (Content - GlassCard) */}
                  <div className={`w-full md:w-1/2 md:pl-12 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}>
                    <GlassCard
                      delay={0.1}
                      className="border border-amber-500/10 hover:border-amber-500/20 transition-all duration-300 h-full"
                    >
                      <ul className="space-y-2 text-slate-300 text-sm font-light">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex gap-2 items-start leading-relaxed">
                            <span className="text-amber-400 font-bold select-none shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
