"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, CheckCircle2, Cpu, CreditCard, Layout, Server, Settings, Image as ImageIcon } from "lucide-react";

const TECH_CATEGORIES = [
  {
    name: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Python 3.13", "FastAPI", "Uvicorn", "REST APIs"]
  },
  {
    name: "AI",
    icon: Cpu,
    skills: ["Gemini API", "Phi-3", "MediaPipe", "OpenCV", "Computer Vision"]
  },
  {
    name: "Infrastructure",
    icon: Settings,
    skills: ["Ubuntu 24.04 LTS", "Hostinger VPS", "Git", "GitHub"]
  },
  {
    name: "Payments",
    icon: CreditCard,
    skills: ["Razorpay", "UPI Integration"]
  },
  {
    name: "Development Tools",
    icon: Settings,
    skills: ["VS Code", "Postman", "Swagger"]
  }
];

export function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative bg-bg-secondary border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
            <Trophy size={16} />
            Featured Hackathon
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Odoo x SPIT Hackathon 2025
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl">
            Shortlisted among 1,400+ teams and competed in the Grand Finale held in Mumbai.
          </p>
        </motion.div>

        {/* Hero Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-[21/9] md:aspect-[21/7] bg-bg-primary border border-border-subtle rounded-2xl mb-16 flex flex-col items-center justify-center interactive relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
          <ImageIcon size={48} className="text-text-muted opacity-50 mb-3" />
          <p className="text-text-muted font-medium text-sm tracking-widest uppercase">Event Photography Placeholder</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Story & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                Last weekend, we had the incredible opportunity to compete in the Odoo x SPIT Hackathon 2025 finale in Mumbai.
                After being shortlisted from over 1,400 teams, we spent the final 24-hour sprint building ApparelDesk.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
              {/* Qualifier */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent mt-1.5" />
                <h3 className="text-2xl font-bold text-text-primary mb-3">Qualifier Round</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Built <strong>StockMaster</strong>, a modular inventory management system designed to replace manual registers.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary">
                  <CheckCircle2 size={16} className="text-accent" />
                  Reached Top 98 out of 1,400+ teams
                </div>
              </motion.div>

              {/* Finale */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent mt-1.5" />
                <h3 className="text-2xl font-bold text-text-primary mb-3">Grand Finale (24-Hour Sprint)</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  During the finale, we built <strong>ApparelDesk</strong>, an integrated retail platform designed to bridge customer-facing shopping with backend ERP operations.
                </p>
                
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Core Features</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2" />
                    Integrated storefront and ERP workflow
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2" />
                    Razorpay payment integration
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2" />
                    Automatic invoice generation
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2" />
                    Real-time inventory synchronization
                  </li>
                </ul>

                <div className="p-6 bg-bg-primary border border-border-subtle rounded-xl border-l-2 border-l-accent">
                  <h4 className="text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Cpu size={20} className="text-accent" />
                    AI Style Advisor
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Built an AI-powered Style Advisor using MediaPipe, Gemini, and Computer Vision. 
                    The system analyzes face shape and skin tone to recommend products directly from inventory.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pt-8 border-t border-border-subtle"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                Grateful for the opportunity to compete alongside talented teams from across Mumbai. 
                This experience strengthened our teamwork, problem-solving skills, and ability to build production-ready software under tight deadlines.
              </p>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Team Visca Coders</h4>
                <div className="flex flex-wrap gap-3">
                  {["Aryan Patil", "Raj Ghorpade", "Swaraj Kanse", "Sanket Bhandari"].map(name => (
                    <span key={name} className="px-4 py-2 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary font-medium">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-8">Technology Stack</h3>
              <div className="space-y-6">
                {TECH_CATEGORIES.map((category) => (
                  <div key={category.name} className="bg-bg-primary border border-border-subtle rounded-xl p-6">
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <category.icon size={16} className="text-text-muted" />
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-bg-secondary border border-border-subtle rounded-md text-xs font-medium text-text-secondary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
