"use client";

import React, { useEffect, useRef } from "react";

export default function StardustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      decay: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const createParticle = (x: number, y: number) => {
      if (particles.length > 80) return;
      
      const size = Math.random() * 2 + 1;
      const speedX = (Math.random() - 0.5) * 0.8;
      const speedY = (Math.random() - 0.5) * 0.8 - 0.4;
      const alpha = 1;
      const decay = Math.random() * 0.015 + 0.01;

      const golds = [
        "rgba(245, 158, 11, ",
        "rgba(252, 211, 7, ",
        "rgba(217, 119, 6, ",
        "rgba(253, 230, 138, "
      ];
      const color = golds[Math.floor(Math.random() * golds.length)];

      particles.push({ x, y, size, color, speedX, speedY, alpha, decay });
    };

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
      if (Math.random() > 0.5) {
        createParticle(e.clientX + (Math.random() - 0.5) * 10, e.clientY + (Math.random() - 0.5) * 10);
      }
    };

    // Only enable mouse trails on devices with cursors
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Continuous subtle background drift particles (simulating gold dust)
    const driftInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        createParticle(
          Math.random() * canvas.width,
          canvas.height + 10
        );
      }
    }, 200);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(245, 158, 11, 0.3)";
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      clearInterval(driftInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-20" />;
}
