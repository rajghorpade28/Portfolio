"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset success state after a few seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto">
            Feel free to reach out for collaborations, projects, or professional opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-bg-secondary border border-border-subtle rounded-2xl p-8 mb-12 shadow-sm"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent</h3>
                <p className="text-text-secondary">Thank you for reaching out. I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-border-subtle text-text-primary rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 interactive"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-border-subtle text-text-primary rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 interactive"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-bg-primary border border-border-subtle text-text-primary rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 interactive"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-bg-primary border border-border-subtle text-text-primary rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none interactive"
                    placeholder="Hello, I'd like to discuss..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-accent-hover transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="mailto:rajghorpade231@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
          >
            <Mail size={18} />
            <span className="font-medium">rajghorpade231@gmail.com</span>
          </a>

          <a
            href="https://github.com/rajghorpade28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
          >
            <Github size={18} />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/raj-ghorpade-90520526b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
          >
            <Linkedin size={18} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
