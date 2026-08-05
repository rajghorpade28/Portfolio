"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-border-subtle bg-bg-primary py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="text-xl font-bold tracking-tight interactive mb-2">
            Raj<span className="text-accent">.</span>
          </Link>
          <p className="text-text-muted text-sm">
            Raj Ghorpade &copy; {currentYear}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/rajghorpade28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors interactive"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/raj-ghorpade-90520526b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors interactive"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
