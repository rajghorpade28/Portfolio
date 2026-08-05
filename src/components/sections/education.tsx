"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    id: "siesgst",
    institution: "SIES Graduate School of Technology",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    duration: "August 2025 – August 2028",
    grade: null,
    current: true,
  },
  {
    id: "bharati",
    institution: "Bharati Vidyapeeth",
    degree: "Diploma in Computer Technology",
    field: "Computer Engineering",
    duration: "2022 – 2025",
    grade: "90.34%",
    current: false,
  },
  {
    id: "shreeram",
    institution: "Shreeram Vidyalaya & Junior College of Science",
    degree: "Secondary Education",
    field: null,
    duration: null,
    grade: "88.80%",
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
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

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border-subtle" />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[14px] top-6 w-3 h-3 rounded-full border-2 ${item.current ? "bg-accent border-accent" : "bg-white border-border-muted"}`} />

                <div className="bg-white border border-border-subtle rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {item.degree}
                      </h3>
                      {item.field && (
                        <p className="text-accent font-medium mt-0.5">{item.field}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Current
                        </span>
                      )}
                      {item.grade && (
                        <span className="inline-flex px-3 py-1 bg-bg-secondary border border-border-subtle text-text-secondary text-xs font-semibold rounded-full">
                          Grade: {item.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-text-secondary font-medium text-base">
                    {item.institution}
                  </p>

                  {item.duration && (
                    <p className="text-text-muted text-sm mt-1.5">{item.duration}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
