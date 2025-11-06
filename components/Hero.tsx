import { User, Linkedin, Github, Mail, Send } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-24 flex flex-col md:flex-row items-center gap-12 border-b border-border">
      {/* Left Column */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        {/* Placeholder for Profile Picture */}
        <div className="w-40 h-40 rounded-full bg-card-solid border-2 border-card-solid-border flex items-center justify-center mb-4">
          <User size={80} className="text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-white">Aranjit D. Archita</h1>
        <p className="text-xl text-primary font-medium mt-1">Full-Stack Developer</p>
        <p className="text-muted-foreground mt-2">Lingayen, Pangasinan</p>
        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/tijnara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aranjitarchita@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        {/* Schedule a call button */}
        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors mt-8"
        >
          <Send size={18} />
          Schedule a call
        </a>
      </div>
      {/* Right Column (Using text from your original About.tsx) */}
      <div className="flex-1">
        <p className="text-lg text-foreground leading-relaxed">
          My career began in IT and Technical Support, where I developed a methodical approach to problem-solving and learned how systems work from the ground up. This foundation taught me to think systematically about how different components interact and how to diagnose issues efficiently.
        </p>
        <p className="text-lg text-foreground leading-relaxed mt-4">
          I specialize in building full-stack enterprise applications using{' '}
          <strong className="text-white">Next.js</strong>,{' '}
          <strong className="text-white">React</strong>,{' '}
          <strong className="text-white">Vue.js</strong>, and{' '}
          <strong className="text-white">Node.js</strong>. My expertise lies in designing and optimizing SQL databases (MySQL) and architecting APIs with services like Directus and Supabase.
        </p>
      </div>
    </section>
  );
}
