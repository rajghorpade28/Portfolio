"use client";

import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Education
          </h2>
          <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
        </motion.div>

        <div className="relative pl-6 lg:pl-10">
          {/* Timeline Line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border-subtle" />

          {/* Timeline Item */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] lg:-left-[45px] top-2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent" />
            
            <div className="glass-card rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-transform interactive relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                    Bachelor of Engineering
                  </h3>
                  <h4 className="text-lg text-accent mt-1">Information Technology</h4>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium whitespace-nowrap self-start md:self-auto">
                  Expected 2028
                </div>
              </div>

              <div className="text-text-secondary">
                <p className="font-medium text-lg mb-2">SIES Graduate School of Technology</p>
                <p className="text-sm text-text-muted">
                  Currently pursuing coursework in software engineering, algorithms, data structures, and emerging technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
