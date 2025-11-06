import { ExternalLink, Github } from 'lucide-react';

export function Work() {
  return (
    <section id="projects" className="py-16 flex flex-col items-center bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          My <span className="text-orange-500">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Here are a few enterprise projects I&apos;ve built.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Project Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=ERP+System+Screenshot" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold mb-2">Full-Stack Enterprise System</h3>
          <p className="text-muted-foreground mb-2 text-sm">Architected a comprehensive ERP system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {['Next.js','React','Zustand','Directus','MySQL','ERP'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-medium border border-border">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <ExternalLink size={16} /> View
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <Github size={16} /> Code
            </a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=POS+System+Screenshot" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold mb-2">Web-Based POS System</h3>
          <p className="text-muted-foreground mb-2 text-sm">A lightweight, web-based Point of Sale (POS) application built with Next.js and React, using Supabase for the backend and Zustand for state management.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {['Next.js','React','Supabase','Zustand','POS'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-medium border border-border">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <ExternalLink size={16} /> View
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <Github size={16} /> Code
            </a>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <img src="https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=Attendance+System+Screenshot" alt="Project Screenshot" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold mb-2">Multi-Modal Attendance System</h3>
          <p className="text-muted-foreground mb-2 text-sm">Created a web-based attendance system that accepts input from physical hardware like fingerprint scanners and RFID readers. Built a Node.js Hardware Bridge using WebSockets to send data from USB hardware to the web app in real-time, with normalized SQL database for efficient logging.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {['Vue.js','Node.js','WebSockets','SQL','IoT'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-medium border border-border">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <ExternalLink size={16} /> View
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="border px-4 py-1 rounded text-primary font-medium flex items-center gap-2 hover:bg-accent transition-colors">
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
