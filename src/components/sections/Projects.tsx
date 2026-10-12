"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ArrowUpRight, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import GradientText from "../ui/GradientText";
import GlassCard from "../ui/GlassCard";

const CATEGORIES = ["All", "Full Stack", "Platforms & SaaS", "Enterprise & CRM"];

const PROJECTS_DATA = [
  {
    id: "pick-a-pro",
    title: "Pick A Pro",
    subtitle: "On-Demand Marketplace Ecosystem",
    category: "Full Stack",
    desc: "End-to-end on-demand service marketplace connecting verified home service professionals with customers in real-time. Engineered 4 integrated production applications: Customer Web Portal, Cross-Platform Mobile Apps (iOS & Android), Partner Service App, and an Enterprise Admin Operations Dashboard.",
    tech: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Node.js", "Firebase Auth & FCM", "Google Maps API"],
    bullets: [
      "Engineered cross-platform mobile apps and web frontend using React.js, Next.js, and React Native with shared modular component libraries.",
      "Implemented secure multi-tier role-based authentication (RBAC) via Firebase Auth for Customers, Service Providers, and Operations Admins.",
      "Integrated Google Maps Geolocation & Places API for automated proximity dispatch, live provider tracking, and dynamic pricing.",
      "Leveraged Redux Toolkit for centralized global state and Firebase Cloud Messaging (FCM) for real-time booking push notifications."
    ],
    image: "/projects/pick-a-pro/desktop.webp",
    logo: "/logos/projects/pickapro.png",
    demo: "https://pickapro.co.nz/",
    github: "https://github.com/Khushboo-sudo/pick-a-pro"
  },
  {
    id: "propertyworks",
    title: "PropertyWorks",
    subtitle: "Real Estate Intelligence & Advisory Platform",
    category: "Platforms & SaaS",
    desc: "Full-stack real estate intelligence and advisory platform engineered with a dedicated Admin Panel for managing property projects, listings, leads, blogs, and platform content. Designed scalable frontend and backend architecture, integrated secure REST APIs, and built responsive user experiences.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Lead Management", "SEO"],
    bullets: [
      "Developed end-to-end real estate portal and dedicated Admin Panel for managing property projects, listings, leads, and Knowledge Center blogs.",
      "Built responsive, reusable frontend components using React.js, Next.js, Tailwind CSS, and TypeScript with mobile-first performance.",
      "Engineered backend REST APIs, database schemas, OTP-based secure admin actions, and automated lead capture pipelines.",
      "Implemented programmatic SEO optimization, fast project directory filters, and end-to-end production deployment workflows."
    ],
    image: "/projects/propertyworks/desktop.webp",
    logo: "/logos/projects/propertyworks.png",
    demo: "https://propertyworks.in/",
    github: "https://github.com/Khushboo-sudo/propertyworks"
  },
  {
    id: "memory-caravan",
    title: "Memory Caravan",
    subtitle: "QR-Based Digital Media & Keepsake Platform",
    category: "Platforms & SaaS",
    desc: "End-to-end QR-based digital media platform allowing users to scan unique QR codes and securely access personalized photo and video keepsakes. Designed a private video storage and streaming architecture using Cloudflare R2, short-lived playback tokens, and HTTP Range-based streaming without exposing storage objects.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare R2", "Video Streaming", "QR Routing"],
    bullets: [
      "Engineered end-to-end QR-based media platform with dynamic routing, album previews, and secure media access mapping.",
      "Designed private video storage and streaming pipeline with Cloudflare R2, short-lived playback tokens, and HTTP Range-based chunk delivery.",
      "Built backend APIs, database integration, and security controls with Supabase PostgreSQL, Next.js, and TypeScript.",
      "Delivered fluid mobile-first UI with Tailwind CSS and handled complete storage management, media processing, and production deployment."
    ],
    image: "/projects/memory-caravan/desktop.webp",
    demo: "https://memory-caravan.onrender.com/",
    github: "https://github.com/Khushboo-sudo/memory-caravan"
  },
  {
    id: "grasberg",
    title: "Grasberg International",
    subtitle: "Forex Platform & Role-Based CRM",
    category: "Enterprise & CRM",
    desc: "Enterprise forex brokerage platform combining an informational brand portal with a comprehensive role-based CRM. Engineered dedicated modules for User, Partner, Super Admin, and Sub Admin roles, integrating REST APIs and MetaTrader 5 (MT5) backend trading workflows.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "MetaTrader 5 (MT5)", "Role-Based CRM"],
    bullets: [
      "Built frontend for a global forex platform combining an informational website with a multi-tenant role-based CRM using Next.js.",
      "Delivered SEO-friendly website pages and dedicated portal modules for User, Partner, Super Admin, and Sub Admin roles.",
      "Integrated REST APIs and worked with MetaTrader 5 (MT5) backend APIs for trading workflows and account management.",
      "Implemented responsive UI with Tailwind CSS, role authorization controls, and high-performance server-rendered pages."
    ],
    image: "/projects/grasberg/desktop.webp",
    logo: "/logos/projects/grasberg.png",
    demo: "https://grasberginternational.com/",
    github: "https://github.com/Khushboo-sudo/grasberg-crm"
  },
  {
    id: "spods",
    title: "SPODS Technologies",
    subtitle: "Corporate Brand & Services Platform",
    category: "Enterprise & CRM",
    desc: "Official corporate website and services platform for SPODS Technologies. Built to serve as the primary digital touchpoint for clients, showcasing enterprise capabilities, core services, and contact channels.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "REST APIs"],
    bullets: [
      "Architected a responsive, modern corporate web presence with optimized performance and accessibility.",
      "Implemented streamlined navigation to highlight core services like Web/Mobile Development and AI Integration.",
      "Ensured rapid page loads and high SEO rankings through static generation and optimized media assets."
    ],
    image: "/projects/spods/desktop.webp",
    logo: "/logos/spods.png",
    demo: "https://www.spodstechnologies.com/",
    github: "https://github.com/Khushboo-sudo/spods-technologies"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

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
          <div className="flex flex-wrap justify-center gap-2 bg-[#100c18]/60 border border-amber-500/10 p-1.5 rounded-full w-fit mx-auto backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold"
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
                  className="flex flex-col w-full !p-0 border border-amber-500/10 overflow-hidden hover:shadow-[0_15px_40px_-15px_rgba(245,158,11,0.25)] hover:border-amber-500/25 transition-all duration-300 group"
                >
                  {/* Real Project Desktop Mockup Image */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-950/90 border-b border-amber-500/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0914] via-transparent to-black/30 pointer-events-none" />

                    {/* Project Logo badge if available */}
                    {project.logo && (
                      <div className="absolute top-3 left-3 bg-[#0d0a14]/90 border border-amber-500/25 backdrop-blur-md rounded-xl p-2 shadow-lg flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={26}
                          height={26}
                          className="object-contain"
                        />
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/75 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded backdrop-blur-md shadow">
                      Live Production
                    </div>
                  </div>

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

                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/title block">
                        <h4 className="text-xl font-bold text-white tracking-wide mb-1 flex items-center gap-2 group-hover/title:text-amber-300 transition-colors">
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/title:text-amber-400 transition-colors shrink-0" />
                        </h4>
                      </a>
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

                    {/* Tech pills & Actions footer */}
                    <div className="pt-4 border-t border-white/5 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-black bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300"
                        >
                          <Globe className="w-3.5 h-3.5" /> Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white hover:scale-[1.02] transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Source Code
                        </a>
                      </div>
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
