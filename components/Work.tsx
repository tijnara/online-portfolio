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
            <img src="/erp.png" alt="Full-Stack Enterprise System" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Full-Stack Enterprise System</h3>
          <p className="text-muted-foreground text-sm">Architected a comprehensive ERP system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js","React","Directus","MySQL"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="https://github.com/tijnara/erp-web" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> View Repository
            </a>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            <img src="/pos.png" alt="Web-Based POS System" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Web-Based POS System</h3>
          <p className="text-muted-foreground text-sm">A lightweight, web-based Point of Sale (POS) application built with Next.js and React, using Supabase for the backend and Zustand for state management.</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js","React","Supabase","Zustand"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="https://seasidepos.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="https://github.com/tijnara/WebBasedPOS" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> View Repository
            </a>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
            <img src="/attendance.png" alt="Multi-Modal Attendance System" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Multi-Modal Attendance System</h3>
          <p className="text-muted-foreground text-sm">Created a web-based attendance system that accepts input from physical hardware like fingerprint scanners and RFID readers. Built a Node.js Hardware Bridge using WebSockets to send data from USB hardware to the web app in real-time, with normalized SQL database for efficient logging.</p>
          <div className="flex flex-wrap gap-2">
            {["Vue.js","Node.js","WebSockets","SQL"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="https://attendance-system-vue-modern.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="https://github.com/tijnara/attendance-system-vue-modern" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> View Repository
            </a>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 4 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/assets.png" alt="Asset & Equipment Manager" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">Asset & Equipment Manager</h3>
          <p className="text-muted-foreground text-sm">
            Full-stack web application for managing assets and equipment. Node.js backend with Express and MySQL provides a REST API for CRUD operations and search. The frontend is built with HTML, CSS, and vanilla JavaScript, featuring a form for asset entry, a searchable table, and full asset management capabilities.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Node.js","Express","MySQL","HTML","CSS","JavaScript"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="https://github.com/tijnara/VERTEX-ER_asset_and_equipments" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> View Repository
            </a>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        {/* Project Card 5 */}
        <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
          <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/user.png" alt="User Manager" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white">User Manager</h3>
          <p className="text-muted-foreground text-sm">
            Full-stack HR user management module for VERTEX-ER. Node.js backend with Express and MySQL provides REST API endpoints for CRUD operations and user search. The frontend uses HTML, CSS, and vanilla JavaScript, featuring a dynamic form for employee data (with cascading Philippine address dropdowns) and a searchable user list table. Includes edit and delete actions for user records.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Node.js","Express","MySQL","HTML","CSS","JavaScript"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto pt-4">
            <a href="https://github.com/tijnara/VERTEX-ER_HR-users" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <ExternalLink size={16} /> View Repository
            </a>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
