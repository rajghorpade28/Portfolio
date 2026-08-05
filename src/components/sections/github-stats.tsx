"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Code, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/icons";
import type { GitHubUser } from "@/lib/github";

interface GithubStatsProps {
  user: GitHubUser | null;
}

export function GithubStats({ user }: GithubStatsProps) {
  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight flex items-center gap-3">
              <Github className="text-text-primary" size={32} />
              GitHub
            </h2>
            <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
          </motion.div>
          
          <motion.a
            href="https://github.com/rajghorpade28"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-bg-secondary text-text-primary hover:border-accent hover:text-accent transition-colors interactive self-start md:self-auto"
          >
            <span>@rajghorpade28</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center interactive"
          >
            <div className="w-24 h-24 rounded-full border-4 border-bg-primary shadow-lg overflow-hidden mb-6 bg-bg-secondary flex items-center justify-center">
              {user ? (
                <img src={user.avatar_url} alt={user.login} className="w-full h-full object-cover" />
              ) : (
                <Github size={40} className="text-text-muted" />
              )}
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-1">
              Raj Ghorpade
            </h3>
            <p className="text-text-secondary mb-6">Software Development & AI</p>
            
            <div className="w-full grid grid-cols-2 gap-4 border-t border-border-subtle pt-6 mt-auto">
              <div>
                <p className="text-3xl font-bold text-text-primary">
                  {user ? user.public_repos : "-"}
                </p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mt-1">Repositories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary">
                  Active
                </p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mt-1">Status</p>
              </div>
            </div>
          </motion.div>

          {/* Placeholders for Contributions and Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-8 flex-1 flex flex-col interactive group">
              <div className="flex items-center gap-3 mb-6">
                <GitCommit className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-text-primary">Contributions</h3>
              </div>
              <div className="flex-1 border border-dashed border-border-subtle rounded-xl flex items-center justify-center bg-bg-secondary/50 min-h-[150px]">
                <p className="text-text-muted text-sm font-medium flex items-center gap-2">
                  <Github size={16} />
                  Contribution graph will be integrated soon
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 flex flex-col interactive">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-accent" size={20} />
                  <h3 className="text-lg font-bold text-text-primary">Languages</h3>
                </div>
                <div className="flex-1 border border-dashed border-border-subtle rounded-xl flex items-center justify-center bg-bg-secondary/50 min-h-[120px] p-4 text-center">
                  <p className="text-text-muted text-sm font-medium">
                    Language breakdown statistics placeholder
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex flex-col interactive">
                <div className="flex items-center gap-3 mb-4">
                  <GitPullRequest className="text-accent" size={20} />
                  <h3 className="text-lg font-bold text-text-primary">Open Source</h3>
                </div>
                <div className="flex-1 border border-dashed border-border-subtle rounded-xl flex items-center justify-center bg-bg-secondary/50 min-h-[120px] p-4 text-center">
                  <p className="text-text-muted text-sm font-medium">
                    Open source work and pull requests
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
