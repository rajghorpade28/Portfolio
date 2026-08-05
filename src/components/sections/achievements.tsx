"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Cloud, Bot, ExternalLink, Award } from "lucide-react";

const FEATURED_ACHIEVEMENTS = [
  {
    id: "odoo-hackathon",
    title: "Odoo × SPIT Hackathon 2025",
    organization: "Odoo & SPIT",
    date: "2025",
    description: "Competed in the Grand Finale after progressing through the selection rounds. Built ApparelDesk, an integrated retail platform featuring ERP integration, AI-powered style recommendations, automated invoicing, Razorpay payments, and real-time inventory synchronization.",
    icon: Trophy,
    medalColor: "text-yellow-500",
  },
  {
    id: "paradox-ai",
    title: "PARADOX Agentic AI Hackathon 2026",
    organization: "PARADOX",
    date: "2026",
    description: "Participated in an AI-focused hackathon, collaborating on innovative solutions under time constraints while strengthening practical problem-solving and teamwork skills.",
    icon: Bot,
    medalColor: "text-slate-400",
  },
  {
    id: "google-dev-groups",
    title: "Gen AI Study Jams",
    organization: "Google Developer Groups",
    date: "2024",
    description: "Completed hands-on learning focused on Generative AI, Vertex AI, Gemini APIs, prompt engineering, and modern AI application development.",
    icon: Medal,
    medalColor: "text-blue-500",
  },
  {
    id: "google-cloud",
    title: "Google Cloud Skill Boost Program",
    organization: "Google Cloud",
    date: "2024",
    description: "Successfully completed Google's cloud learning program covering modern cloud technologies and practical hands-on exercises.",
    icon: Cloud,
    medalColor: "text-emerald-500",
  }
];

const CERTIFICATIONS = [
  {
    id: "web3",
    title: "Web3 Development Workshop",
    organization: "Tech Organization",
    date: "2025",
  },
  {
    id: "hack-flame",
    title: "Hack The Flame 2025",
    organization: "Hackathon Participation",
    date: "2025",
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-bg-secondary border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl">
            A record of continuous learning, competitive problem-solving, and practical skill development.
          </p>
        </motion.div>

        {/* Featured Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
            <Trophy size={24} className="text-accent" />
            Featured Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-primary border border-border-subtle rounded-2xl p-8 flex flex-col h-full group hover:border-border-muted transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-bg-secondary border border-border-subtle ${achievement.medalColor}`}>
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-1">
                      {achievement.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                      <span className="font-medium">{achievement.organization}</span>
                      {achievement.date && (
                        <>
                          <span className="text-border-muted">•</span>
                          <span>{achievement.date}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed flex-grow">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
            <Award size={24} className="text-accent" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-bg-primary border border-border-subtle rounded-xl p-6 flex flex-col group hover:border-accent/50 transition-colors"
              >
                <h4 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                  {cert.title}
                </h4>
                <div className="text-sm text-text-secondary mb-6 flex-grow">
                  <p>{cert.organization}</p>
                  <p>{cert.date}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-text-primary transition-colors mt-auto w-fit"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
