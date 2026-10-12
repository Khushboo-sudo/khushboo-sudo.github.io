"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, MapPin, GraduationCap, Briefcase } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#06040a]/40">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            About <GradientText gradient="from-amber-200 to-amber-500">Me</GradientText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white tracking-wide"
            >
              Translating Vision into Modern High-Performance Code
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 leading-relaxed text-base font-light"
            >
              I am a Full-Stack Developer with 3+ years of experience building responsive and scalable web applications using React.js, Next.js, Node.js, and Express.js. I specialize in REST API integration, reusable component architectures, authentication, admin dashboards, and performance optimisation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 leading-relaxed text-base font-light"
            >
              My engineering approach prioritizes pixel-perfect designs, performance optimization, and cross-browser compatibility. Experienced in developing user-friendly applications following modern web practices and collaborating smoothly with designers and developers for seamless agile project delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-3 items-center"
            >
              <Button
                href="/Khushboo_Kumari_Resume.pdf"
                download="Khushboo_Kumari_Resume.pdf"
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Download Resume (PDF)
              </Button>
              <Button
                href="/resume"
                variant="secondary"
                className="inline-flex items-center gap-2 border-amber-500/20 text-amber-200 hover:text-white"
              >
                View Online Resume
              </Button>
            </motion.div>
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard delay={0.1} className="flex flex-col justify-between h-40 border border-amber-500/10 hover:border-amber-500/20">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl w-fit">
                <Briefcase className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">3+ Years</h4>
                <p className="text-slate-400 text-xs tracking-wider font-semibold">PROFESSIONAL EXPERIENCE</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.2} className="flex flex-col justify-between h-40 border border-amber-500/10 hover:border-amber-500/20">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl w-fit">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Noida, India</h4>
                <p className="text-slate-400 text-xs tracking-wider font-semibold">CURRENT LOCATION</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} className="flex flex-col justify-between h-40 sm:col-span-2 border border-amber-500/10 hover:border-amber-500/20">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl w-fit">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Maharshi Dayanand University</h4>
                <p className="text-slate-400 text-xs tracking-wider font-semibold">GRADUATION | ROHTAK, HARYANA (01/2018)</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
