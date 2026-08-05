"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import Link from "next/link";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)",
          }}
        />
        {/* Soft glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[72px] leading-tight font-bold tracking-tight text-text-primary mb-6"
          >
            I build practical software, AI-powered applications, and automation tools.
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-xl md:text-2xl font-medium text-text-secondary">
              Raj Ghorpade
            </h2>
            <p className="text-text-muted mt-2 text-lg">
              Information Technology Student <br />
              SIES Graduate School of Technology, Class of 2028
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-accent-hover hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] interactive"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://github.com/rajghorpade28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle bg-bg-secondary text-text-primary hover:border-accent hover:-translate-y-1 transition-all interactive"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raj-ghorpade-90520526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle bg-bg-secondary text-text-primary hover:border-accent hover:-translate-y-1 transition-all interactive"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-text-secondary hover:text-text-primary hover:underline underline-offset-4 transition-all interactive"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
