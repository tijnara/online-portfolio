import { ExternalLink, Github, Code } from 'lucide-react';

export function Work() {
  return (
    <section id="projects" className="py-20 border-b border-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <Code size={28} className="text-primary" />
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
      </div>
      {/* Grid of Solid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/600x400/18181B/27272A?text=ERP+System" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Full-Stack Enterprise System</h3>
          <p className="text-muted-foreground text-sm">Architected a comprehensive ERP system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js","React","Directus","MySQL"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/600x400/18181B/27272A?text=Web-Based+POS" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Web-Based POS System</h3>
          <p className="text-muted-foreground text-sm">A lightweight, web-based Point of Sale (POS) application built with Next.js and React, using Supabase for the backend and Zustand for state management.</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js","React","Supabase","Zustand"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/600x400/18181B/27272A?text=Attendance+System" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Multi-Modal Attendance System</h3>
          <p className="text-muted-foreground text-sm">Created a web-based attendance system that accepts input from physical hardware like fingerprint scanners and RFID readers. Built a Node.js Hardware Bridge using WebSockets to send data from USB hardware to the web app in real-time, with normalized SQL database for efficient logging.</p>
          <div className="flex flex-wrap gap-2">
            {["Vue.js","Node.js","WebSockets","SQL"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
