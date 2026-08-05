"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "WebSockets", "JWT Authentication"],
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
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "Ubuntu Linux"],
  },
  {
    title: "Cloud & Infra",
    skills: ["Hostinger VPS", "Vercel", "Deployment & Hosting"],
  },
  {
    title: "Payments & APIs",
    skills: ["Razorpay Integration", "UPI Integration", "Third-Party APIs"],
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
