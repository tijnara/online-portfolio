import { Briefcase, MessageSquare, Home, User, Lightbulb, Send } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-8 sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <span className="font-bold text-xl text-white">Aranjit D. Archita</span>
      <ul className="flex gap-6 text-base text-muted-foreground">
        <li>
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-primary transition-colors">
            Journey
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
      >
        <Send size={18} />
        Hire Me
      </a>
    </nav>
  );
}
