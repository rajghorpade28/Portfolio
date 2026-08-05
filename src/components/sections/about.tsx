"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Calendar, Code, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-bg-primary">
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
          {/* Profile Photo */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border-subtle shadow-md">
              <Image
                src="/raj.jpg"
                alt="Raj Ghorpade"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 256px, 288px"
              />
            </div>
          </motion.div>

          {/* Bio and Info Cards */}
          <motion.div
            className="lg:col-span-8 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I am an Information Technology student who genuinely enjoys building software projects.
              My primary interests lie in Artificial Intelligence, web development, and automation.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              I focus on continuously learning modern engineering practices and creating tools that solve practical problems.
              Currently, I am actively expanding my development experience and preparing for software engineering opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Education</h3>
                </div>
                <p className="text-text-secondary text-sm">Information Technology</p>
                <p className="text-text-muted text-sm">SIES GST</p>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <Calendar size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Graduation</h3>
                </div>
                <p className="text-text-secondary text-sm">Class of 2028</p>
                <p className="text-text-muted text-sm">Bachelor of Engineering</p>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <Code size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Primary Focus</h3>
                </div>
                <p className="text-text-secondary text-sm">AI & Automation</p>
                <p className="text-text-muted text-sm">Software Development</p>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-bg-secondary rounded-lg text-accent">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-semibold text-text-primary">Location</h3>
                </div>
                <p className="text-text-secondary text-sm">Mumbai, India</p>
                <p className="text-text-muted text-sm">Open to remote opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
