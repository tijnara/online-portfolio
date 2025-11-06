import { Briefcase, Download, Github } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 border-b border-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <Briefcase size={28} className="text-primary" />
        <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Text (from your original) */}
        <div className="flex-1 space-y-4 text-lg text-foreground leading-relaxed">
          <p>My career began in IT and Technical Support, where I developed a methodical approach to problem-solving and learned how systems work from the ground up. This foundation taught me to think systematically about how different components interact and how to diagnose issues efficiently.</p>
          <p>What drives me as a developer is my passion for the backend—the &quot;engine&quot; of an application. I love designing databases, architecting the logic that makes everything work, and building the APIs that connect it all together. While I&apos;m proficient across the full stack, I find the most satisfaction in creating robust, well-structured backend systems.</p>
        </div>
        {/* Right Column: Key Skills (from your original, re-styled as glass cards) */}
        <div className="flex-1 grid grid-cols-1 gap-4">
          <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
            <h4 className="text-primary font-semibold mb-1">Backend Architecture</h4>
            <p className="text-sm text-muted-foreground">Building robust APIs and designing efficient database schemas</p>
          </div>
          <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
            <h4 className="text-primary font-semibold mb-1">Enterprise Systems</h4>
            <p className="text-sm text-muted-foreground">Architecting ERP, POS, and HR applications from the ground up</p>
          </div>
          <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4">
            <h4 className="text-primary font-semibold mb-1">System Integration</h4>
            <p className="text-sm text-muted-foreground">Connecting hardware with web applications via WebSockets and APIs</p>
          </div>
        </div>
      </div>
      {/* Buttons (from your original, re-styled) */}
      <div className="flex gap-4 mt-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <Download size={18} />
          View Resume
        </a>
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
    </section>
  );
}
