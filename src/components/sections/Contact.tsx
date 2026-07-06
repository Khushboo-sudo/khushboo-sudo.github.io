"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import GradientText from "../ui/GradientText";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06040a]/40">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Get In <GradientText gradient="from-amber-200 to-amber-500">Touch</GradientText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <GlassCard delay={0.1} className="h-full flex flex-col justify-between border border-amber-500/10" hoverEffect={false}>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed">
                  Feel free to reach out for project opportunities, job offers, or just to say hello. I will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">EMAIL ME</div>
                      <a href="mailto:khushboosoni6746@gmail.com" className="text-white hover:text-amber-400 transition-colors text-sm break-all font-medium">
                        khushboosoni6746@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">CALL ME</div>
                      <a href="tel:+918168648574" className="text-white hover:text-amber-400 transition-colors text-sm font-medium">
                        +91 8168648574
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">LOCATION</div>
                      <span className="text-slate-300 text-sm font-medium">Noida, Uttar Pradesh, India</span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">LINKEDIN</div>
                      <a
                        href="https://www.linkedin.com/in/khushboo-kumari-988a71269"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
                      >
                        Khushboo Kumari
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra visual decoration tag */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] text-slate-500 font-mono">
                <span>LOCAL TIME: GMT+5:30</span>
                <span>STATUS: AVAILABLE</span>
              </div>
            </GlassCard>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <GlassCard delay={0.2} className="h-full flex flex-col justify-center border border-amber-500/10" hoverEffect={false}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#0d0a12]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all font-light"
                          placeholder="Your name"
                        />
                        {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#0d0a12]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all font-light"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0d0a12]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all font-light"
                        placeholder="Project consultation, job offer..."
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-[#0d0a12]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all font-light resize-none"
                        placeholder="Write your message here..."
                      />
                      {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>}
                    </div>

                    <Button type="submit" variant="primary" className="w-full justify-center">
                      {loading ? "Sending Message..." : "Send Message"} <Send className="w-4 h-4" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="text-center py-12 flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto font-light leading-relaxed">
                        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                      </p>
                    </div>
                    <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-4">
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
