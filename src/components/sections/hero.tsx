"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-primary"
    >
      {/* Subtle light grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-accent uppercase tracking-widest mb-6"
          >
            Software Engineering Student
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[68px] leading-[1.1] font-bold tracking-tight text-text-primary mb-8"
          >
            Building modern software, AI-powered applications, and automation solutions.
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-text-secondary">
              Raj Ghorpade &mdash; Information Technology, SIES Graduate School of Technology, Class of 2028
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://github.com/rajghorpade28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-muted bg-bg-primary text-text-secondary hover:text-text-primary hover:border-text-primary hover:-translate-y-0.5 hover:shadow-sm transition-all"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raj-ghorpade-90520526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-muted bg-bg-primary text-text-secondary hover:text-text-primary hover:border-text-primary hover:-translate-y-0.5 hover:shadow-sm transition-all"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
