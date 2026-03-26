"use client";

import { Briefcase, Download, Github, X } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
      <section id="about" className="py-20 border-b border-border">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Briefcase size={28} className="text-primary" />
          <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-4 text-lg text-foreground leading-relaxed">
            <p>My career began in IT and Technical Support, where I developed a methodical approach to problem-solving and learned how systems work from the ground up. This foundation taught me to think systematically about how different components interact and how to diagnose issues efficiently.</p>
            <p>What drives me as a developer is my passion for the backend—the &quot;engine&quot; of an application. I love designing databases, architecting the logic that makes everything work, and building the APIs that connect it all together. While I&apos;m proficient across the full stack, I find the most satisfaction in creating robust, well-structured backend systems.</p>
          </div>
          {/* Right Column: Key Skills */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">System Architecture</h4>
              <p className="text-sm text-muted-foreground">Building robust RESTful APIs and designing efficient, normalized SQL schemas.</p>
            </div>
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">Enterprise Systems</h4>
              <p className="text-sm text-muted-foreground">Architecting ERP, POS, and modular management applications from the ground up.</p>
            </div>
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">System Integration</h4>
              <p className="text-sm text-muted-foreground">Connecting hardware with web applications via WebSockets and real-time APIs.</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
              onClick={() => setIsResumeOpen(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Download size={18} />
            View Resume
          </button>
          <a
              href="https://github.com/tijnara"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-medium flex items-center gap-2 bg-card-glass text-foreground border border-card-glass-border backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Resume Modal */}
        {isResumeOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6">
              {/* Modal Container */}
              <div className="relative w-full max-w-5xl h-[85vh] bg-card-solid border border-card-solid-border rounded-xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">

                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-card-solid-border bg-card-solid">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-primary"/>
                    My Resume
                  </h3>
                  <div className="flex items-center gap-2">
                    {/* Fallback download button inside the modal just in case */}
                    <a
                        href="/Archita_Aranjit_Resume_Dev(B).pdf"
                        download="Archita_Aranjit_Resume_Dev(B).pdf"
                        className="px-3 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 rounded-md font-medium transition-colors"
                    >
                      Download PDF
                    </a>
                    <button
                        onClick={() => setIsResumeOpen(false)}
                        className="p-1 rounded-md hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Modal Body / PDF Viewer */}
                <div className="flex-1 w-full bg-zinc-100">
                  <iframe
                      src="/Archita_Aranjit_Resume_Dev(B).pdf#toolbar=0"
                      className="w-full h-full border-none"
                      title="Resume PDF"
                  />
                </div>
              </div>
            </div>
        )}
      </section>
  );
}