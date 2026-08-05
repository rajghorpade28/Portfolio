"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Leadership & Volunteering
          </h2>
          <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative pl-16"
        >
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border-subtle" />
          {/* Timeline dot */}
          <div className="absolute left-[14px] top-6 w-3 h-3 rounded-full bg-white border-2 border-accent" />

          <div className="bg-white border border-border-subtle rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl font-bold text-text-primary">Event Volunteer</h3>
                <p className="text-accent font-medium mt-0.5">IEEE SIESGST</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-bg-secondary border border-border-subtle text-text-muted text-xs font-medium rounded-full self-start">
                <Calendar size={12} />
                Techopedia 14
              </span>
            </div>

            <div className="flex items-center gap-2 text-text-muted text-sm mb-5">
              <Users size={15} />
              <span>IEEE Student Branch — SIES Graduate School of Technology</span>
            </div>

            <div className="space-y-3 text-text-secondary leading-relaxed">
              <p>
                Actively contributed to the on-ground execution of Techopedia 14, the flagship technical event of the college's IEEE chapter.
              </p>
              <p>
                Collaborated closely with a team of volunteers to manage event logistics, coordinate between different sessions, and ensure a smooth experience for all participants.
              </p>
              <p>
                Played a key role in the successful management and coordination of the day-long event.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
