"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "AI & ML",
    skills: ["Gemini API", "MediaPipe", "OpenCV", "Computer Vision", "Prompt Engineering"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "Ubuntu Linux"],
  },
  {
    title: "Cloud & Infra",
    skills: ["Hostinger VPS", "Deployment"],
  },
  {
    title: "Payments",
    skills: ["Razorpay", "UPI Integration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
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

        <div className="space-y-0">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-5 border-b border-border-subtle last:border-0 group"
            >
              {/* Category label */}
              <div className="sm:w-40 shrink-0">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 flex-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-bg-primary border border-border-subtle text-text-secondary hover:border-accent hover:text-text-primary transition-all duration-200 cursor-default"
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
