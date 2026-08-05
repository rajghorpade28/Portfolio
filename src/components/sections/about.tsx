"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Calendar, Code, MapPin } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column - Portrait Placeholder */}
          <motion.div
            className="lg:col-span-5 w-full aspect-[4/5] rounded-2xl bg-bg-secondary border border-border-subtle flex flex-col items-center justify-center relative overflow-hidden group interactive"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent z-10" />
            
            <div className="z-20 text-center px-6">
              <User size={64} className="mx-auto text-text-muted mb-4 opacity-50" />
              <p className="text-text-muted text-sm font-medium">Portrait ready for future update.</p>
            </div>
          </motion.div>

          {/* Right Column - Bio and Info Cards */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I am an Information Technology student who genuinely enjoys building software projects. 
                My primary interests lie in Artificial Intelligence, web development, and automation.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                I focus on continuously learning modern engineering practices and creating tools that solve practical problems. 
                Currently, I am actively expanding my practical development experience and preparing for future software engineering opportunities.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform interactive">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Education</h3>
                </div>
                <p className="text-text-secondary text-sm">Information Technology</p>
                <p className="text-text-muted text-sm">SIES GST</p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform interactive">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <Calendar size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Graduation</h3>
                </div>
                <p className="text-text-secondary text-sm">Class of 2028</p>
                <p className="text-text-muted text-sm">Bachelor of Engineering</p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform interactive">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <Code size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Primary Focus</h3>
                </div>
                <p className="text-text-secondary text-sm">AI & Automation</p>
                <p className="text-text-muted text-sm">Software Development</p>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform interactive">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Location</h3>
                </div>
                <p className="text-text-secondary text-sm">Mumbai, India</p>
                <p className="text-text-muted text-sm">Open to remote opportunities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
