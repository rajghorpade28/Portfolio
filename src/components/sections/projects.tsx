"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cpu, Layers, Shield, Bot } from "lucide-react";
import { Github } from "@/components/ui/icons";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  Icon: React.ElementType;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: "retrieva",
    number: "01",
    title: "Retrieva",
    description: "An advanced data retrieval system leveraging semantic search to extract relevant context from large datasets. Designed to streamline information discovery and support AI-powered query resolution.",
    techStack: ["Python", "FastAPI", "Vector DB", "NLP"],
    features: ["Semantic search capabilities", "High-performance querying", "Scalable ingestion pipeline"],
    githubUrl: "https://github.com/rajghorpade28/Retrieva",
    accentColor: "from-blue-500/10 to-purple-500/10",
    Icon: Bot,
  },
  {
    id: "dcglandingpage",
    number: "02",
    title: "DCG Landing Page",
    description: "A highly optimized, responsive marketing landing page built for the Digital Chaff Generator. Focused on conversion, accessibility, and high performance scores across all devices.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: ["Lighthouse 95+ performance", "Smooth scroll animations", "Responsive mobile-first"],
    githubUrl: "https://github.com/rajghorpade28/dcgLandingPage",
    accentColor: "from-emerald-500/10 to-teal-500/10",
    Icon: Layers,
  },
  {
    id: "digitalchaffgenerator",
    number: "03",
    title: "Digital Chaff Generator",
    description: "A specialized cybersecurity utility engineered to obfuscate network traffic and generate digital noise. Helps protect sensitive communications by masking actual data patterns.",
    techStack: ["Python", "Networking APIs", "Cryptography", "CLI"],
    features: ["Traffic obfuscation engine", "Automated noise generation", "Lightweight CLI interface"],
    githubUrl: "https://github.com/rajghorpade28/DigitalChaffGenerator",
    accentColor: "from-red-500/10 to-orange-500/10",
    Icon: Shield,
  },
  {
    id: "zengpt",
    number: "04",
    title: "ZenGPT",
    description: "A minimalist, distraction-free conversational AI interface designed for deep work. Strips away clutter to focus entirely on the dialogue between the user and the language model.",
    techStack: ["TypeScript", "React", "OpenAI API", "CSS Modules"],
    features: ["Distraction-free interface", "Contextual memory", "Fast response streaming"],
    githubUrl: "https://github.com/rajghorpade28/zengpt-",
    accentColor: "from-violet-500/10 to-indigo-500/10",
    Icon: Cpu,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Selected Work
          </h2>
          <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl">
            A curated set of projects that demonstrate my approach to solving real problems with software.
          </p>
        </motion.div>

        <div className="space-y-32">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Visual panel */}
              <div className={`lg:[direction:ltr] relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle bg-gradient-to-br ${project.accentColor} bg-bg-secondary group cursor-default`}>
                {/* Large project number */}
                <div className="absolute top-6 left-6 font-mono text-6xl font-black text-text-muted/10 select-none">
                  {project.number}
                </div>
                {/* Center icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <project.Icon
                    size={56}
                    className="text-text-muted opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-2xl transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="lg:[direction:ltr] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-accent font-bold tracking-widest">
                    {project.number}
                  </span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-7">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-7">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-secondary border border-border-subtle rounded-md text-xs font-semibold text-text-muted uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(59,130,246,0.3)]"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-subtle text-text-secondary text-sm font-medium hover:border-border-muted hover:text-text-primary transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
