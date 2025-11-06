import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-bold text-lg">Aranjit D. Archita</span>
          <p className="text-sm mt-2 max-w-xs text-gray-300">
            Full-stack developer specializing in building comprehensive enterprise solutions. Proven expertise in modern front-end stacks like Next.js/React and Vue.js, paired with robust Node.js backends (Express, WebSockets) and SQL databases.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm flex flex-col gap-1">
            <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white">My Work</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aranjitarchita@gmail.com" className="text-gray-300 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2025 Aranjit D. Archita. Made with <span className="text-orange-500">♥</span>
      </div>
    </footer>
  );
}
