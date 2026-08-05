"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Gemini API", "MediaPipe", "OpenCV", "Computer Vision", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "Ubuntu Linux"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Hostinger VPS", "Deployment"],
  },
  {
    title: "Payments & Integration",
    skills: ["Razorpay Integration", "UPI Integration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-medium border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
