"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import StardustCanvas from "@/components/ui/StardustCanvas";
import ResumeView from "@/components/resume/ResumeView";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleCheckHash = () => {
      if (window.location.hash === "#resume") {
        setIsResumeOpen(true);
      }
    };

    const handleOpenResume = () => {
      setIsResumeOpen(true);
    };

    handleCheckHash();
    window.addEventListener("hashchange", handleCheckHash);
    window.addEventListener("open-resume", handleOpenResume);

    return () => {
      window.removeEventListener("hashchange", handleCheckHash);
      window.removeEventListener("open-resume", handleOpenResume);
    };
  }, []);

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === "#resume") {
      history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040206] text-[#f8fafc] selection:bg-amber-500 selection:text-black flex flex-col justify-between overflow-x-hidden">
      {/* Interactive gold stardust canvas layer */}
      <StardustCanvas />

      {/* Background glow effects across the page */}
      <div className="cosmic-mesh" />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal Overlay: Opens on same page with portfolio cosmic background */}
      {isResumeOpen && (
        <ResumeView isModal={true} onClose={handleCloseResume} />
      )}
    </div>
  );
}
