import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-background py-8 px-8 mt-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-sm text-muted-foreground">
          © 2025 Aranjit D. Archita. Made with <span className="text-primary">♥</span>
        </span>
        <div className="flex gap-5">
          <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:aranjitarchita@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
