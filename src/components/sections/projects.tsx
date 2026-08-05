"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers, Cpu, Server, Terminal, Shield } from "lucide-react";
import { Github } from "@/components/ui/icons";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ElementType;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: "retrieva",
    title: "Retrieva",
    description: "An advanced data retrieval system leveraging semantic search to extract relevant context from large datasets. Designed to streamline information discovery and support AI-powered query resolution.",
    techStack: ["Python", "FastAPI", "Vector Database", "NLP Models"],
    features: ["Semantic Search Capabilities", "High-performance querying", "Scalable data ingestion pipeline"],
    githubUrl: "https://github.com/rajghorpade28/Retrieva",
    icon: Server,
  },
  {
    id: "dcglandingpage",
    title: "DCG Landing Page",
    description: "A highly optimized, responsive marketing landing page built for the Digital Chaff Generator. Focused on conversion, accessibility, and high performance scores across all devices.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: ["Lighthouse 95+ Scores", "Smooth scroll animations", "Responsive mobile-first design"],
    githubUrl: "https://github.com/rajghorpade28/dcgLandingPage",
    icon: Layers,
  },
  {
    id: "digitalchaffgenerator",
    title: "Digital Chaff Generator",
    description: "A specialized cybersecurity utility engineered to obfuscate network traffic and generate digital noise. Helps protect sensitive communications by masking actual data patterns from potential surveillance.",
    techStack: ["Python", "Networking APIs", "Cryptography", "CLI"],
    features: ["Traffic obfuscation", "Automated noise generation", "Lightweight command-line interface"],
    githubUrl: "https://github.com/rajghorpade28/DigitalChaffGenerator",
    icon: Shield,
  },
  {
    id: "zengpt",
    title: "ZenGPT",
    description: "A minimalist, distraction-free conversational AI interface designed for deep work. Strips away complex UI elements to focus entirely on the dialogue between the user and the language model.",
    techStack: ["TypeScript", "React", "OpenAI API", "CSS Modules"],
    features: ["Distraction-free UI", "Contextual memory", "Fast response streaming"],
    githubUrl: "https://github.com/rajghorpade28/zengpt-",
    icon: Cpu,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Selected Work
          </h2>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl">
            A curated showcase of applications and tools engineered for performance and utility.
          </p>
        </motion.div>

        <div className="space-y-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center group`}
            >
              {/* Project Visual / Image Placeholder */}
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-bg-secondary rounded-2xl border border-border-subtle overflow-hidden relative interactive flex flex-col items-center justify-center group-hover:border-accent/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/50 to-transparent" />
                <project.icon size={64} className="text-text-muted opacity-30 mb-4" />
                <p className="text-text-muted font-medium text-sm tracking-widest uppercase">Project Visual</p>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-text-secondary">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10 flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-secondary border border-border-subtle rounded-md text-sm font-medium text-text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-primary hover:border-text-primary transition-colors interactive"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
