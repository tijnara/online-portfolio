import { Briefcase, MessageSquare, Home, User, Lightbulb, Mail } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 border-b border-border bg-white sticky top-0 z-50">
      <span className="font-bold text-xl text-primary">Aranjit D. Archita</span>
      <ul className="flex gap-8 text-base text-foreground">
        <li>
          <a href="#home" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Home size={18} /> Home
          </a>
        </li>
        <li>
          <a href="#about" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <User size={18} /> About
          </a>
        </li>
        <li>
          <a href="#skills" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Lightbulb size={18} /> Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Briefcase size={18} /> Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <MessageSquare size={18} /> Contact
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-orange-600 transition-colors"
      >
        <Mail size={18} />
        Hire Me
      </a>
    </nav>
  );
}
