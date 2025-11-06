export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-bold text-lg">Aranjit D. Archita</span>
          <p className="text-sm mt-2 max-w-xs">Full-stack developer specializing in building comprehensive enterprise solutions. Proven expertise in modern front-end stacks like Next.js/React and Vue.js, paired with robust Node.js backends (Express, WebSockets) and SQL databases.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm flex flex-col gap-1">
            <li>Home</li>
            <li>About</li>
            <li>My Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex gap-2">
            <span className="bg-muted rounded-full p-2">🔗</span>
            <span className="bg-muted rounded-full p-2">✉️</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-8">© 2025 Aranjit D. Archita. Made with <span className="text-orange-500">♥</span></div>
    </footer>
  );
}
export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 border-b border-border bg-white">
      <span className="font-bold text-xl text-primary">Aranjit D. Archita</span>
      <ul className="flex gap-8 text-base text-foreground">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium">Hire Me</button>
    </nav>
  );
}

