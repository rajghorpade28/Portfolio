"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 20% 50%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 20% 50%, #000 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-text-muted font-medium tracking-wide">
                Available for internships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.05] mb-8"
            >
              Building{" "}
              <span className="text-accent">software</span>
              {" "}that{" "}
              <br className="hidden lg:block" />
              actually works.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              AI-powered applications, automation solutions, and modern web software —
              built with curiosity and shipped with care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-16"
            >
              <Link
                href="#projects"
                className="group flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)]"
              >
                See My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/rajghorpade28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-muted transition-all hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/raj-ghorpade-90520526b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-muted transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </motion.div>

            {/* Quick stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-8 pt-8 border-t border-border-subtle"
            >
              <div>
                <p className="text-2xl font-bold text-text-primary">4+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Projects Built</p>
              </div>
              <div className="w-px h-10 bg-border-subtle" />
              <div>
                <p className="text-2xl font-bold text-text-primary">1,400+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Teams Competed</p>
              </div>
              <div className="w-px h-10 bg-border-subtle" />
              <div>
                <p className="text-2xl font-bold text-text-primary">2028</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Graduating</p>
              </div>
            </motion.div>
          </div>

          {/* Right — terminal card, 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="bg-bg-secondary border border-border-subtle rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-primary">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-text-muted font-mono">profile.json</span>
              </div>
              {/* JSON content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <span className="text-text-muted">{"{"}</span>
                <div className="pl-4 mt-1 space-y-1">
                  <p>
                    <span className="text-blue-400">&quot;name&quot;</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-green-400">&quot;Raj Ghorpade&quot;</span>
                    <span className="text-text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-blue-400">&quot;role&quot;</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-green-400">&quot;IT Student &amp; Builder&quot;</span>
                    <span className="text-text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-blue-400">&quot;college&quot;</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-green-400">&quot;SIES GST&quot;</span>
                    <span className="text-text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-blue-400">&quot;stack&quot;</span>
                    <span className="text-text-muted">: [</span>
                  </p>
                  <p className="pl-4 text-yellow-400">&quot;Python&quot;, &quot;FastAPI&quot;,</p>
                  <p className="pl-4 text-yellow-400">&quot;Node.js&quot;, &quot;React&quot;,</p>
                  <p className="pl-4 text-yellow-400">&quot;Gemini API&quot;, &quot;MediaPipe&quot;</p>
                  <p>
                    <span className="text-text-muted">],</span>
                  </p>
                  <p>
                    <span className="text-blue-400">&quot;interests&quot;</span>
                    <span className="text-text-muted">: [</span>
                    <span className="text-yellow-400">&quot;AI&quot;</span>
                    <span className="text-text-muted">, </span>
                    <span className="text-yellow-400">&quot;Web&quot;</span>
                    <span className="text-text-muted">, </span>
                    <span className="text-yellow-400">&quot;Automation&quot;</span>
                    <span className="text-text-muted">],</span>
                  </p>
                  <p>
                    <span className="text-blue-400">&quot;available&quot;</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-accent font-bold">true</span>
                  </p>
                </div>
                <span className="text-text-muted">{"}"}</span>
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="text-accent font-bold">❯</span>
                  <span className="inline-block w-2 h-4 bg-accent/70 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
