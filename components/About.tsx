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
            <p>My career trajectory—from IT and Technical Support through modern full-stack development—shaped how I architect systems at scale. Those early years troubleshooting networks and infrastructure taught me that robust systems don&apos;t just work; they&apos;re designed to work reliably. I developed a methodical, systems-thinking approach that carries through every line of code I write today.</p>
            <p>What drives me is solving real business problems through backend engineering. My portfolio demonstrates this across enterprise applications: designing normalized SQL schemas and RESTful APIs for ERP and POS systems, Business Management Systems, architecting procurement and HR management platforms. I&apos;ve learned that the most elegant backend is invisible—it handles complexity silently while the frontend shines.</p>
            <p>While I&apos;m fluent across the full stack (TypeScript, Vue, Next.js, JavaScript), I find the greatest satisfaction in the systems layer: database architecture, API design, business logic that scales, and the infrastructure that ties it all together. That&apos;s where I deliver the most impact—building the engine that makes everything else possible.</p>
          </div>
          {/* Right Column: Key Skills */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">System Architecture</h4>
              <p className="text-sm text-muted-foreground">Architected RESTful APIs and optimized SQL databases for enterprise platforms—ERP, POS, and procurement systems handling high-volume transactions.</p>
            </div>
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">Enterprise Application Frameworks</h4>
              <p className="text-sm text-muted-foreground">Building comprehensive ERP, POS, Business Management Systems and HR management systems with modular architecture—designed for extensibility across employee management, asset tracking, procurement workflows, and order processing.</p>
            </div>
            <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
              <h4 className="text-primary font-semibold mb-1">System Integration</h4>
              <p className="text-sm text-muted-foreground">Full-stack enterprise systems architecture—from RESTful backends managing inventory, procurement, and HR workflows to real-time dashboards. Event-driven synchronization ensures consistency across simultaneous operations (transactions, stock updates, attendance records) in high-concurrency environments.</p>
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
                        href="/(B)Archita_Aranjit_Resume_ITSpecialist.pdf"
                        download="Archita_Aranjit_Resume_ITSpecialist.pdf"
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
                      src="/(B)Archita_Aranjit_Resume_ITSpecialist.pdf#toolbar=0"
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