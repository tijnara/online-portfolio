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

