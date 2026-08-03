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
          {/* Project Card NEW */}
          <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
            <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
              <img src="/hotelandresort.png" alt="Full-Stack Hotel & Resort Reservation & Management System" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white">Full-Stack Hotel & Resort Reservation & Management System</h3>
            <p className="text-muted-foreground text-sm">Architected an end-to-end beachfront resort platform with Next.js 15, TypeScript, and Supabase. Engineered a Two-Way iCal Synchronization System connecting direct website reservations with major Online Travel Agencies (Airbnb & Booking.com) to eliminate double bookings using dynamic .ics route handlers and automated Vercel Cron background parsing. Features zero-fee local payment collection (GCash/Maya/Bank) with receipt uploads, an automated multi-stage SMTP email engine, and a role-based administrative portal for real-time OTA calendar sync, payment verification, custom cancellation workflows, and site content customization.</p>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "Supabase", "Server Actions", "Vercel Cron", "Nodemailer"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto pt-4">
              <a href="https://github.com/tijnara/hotel-resort-booking-public" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
                <Github size={16} /> View Repository
              </a>
              <span className="text-muted-foreground font-medium flex items-center gap-2">
                <ExternalLink size={16} /> Live (SOON)
              </span>
            </div>
          </div>
          {/* Project Card 1 */}
          <div className="bg-card-solid rounded-lg border border-card-solid-border p-6 flex flex-col gap-4 transition-all hover:border-primary/50">
            <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
              <img src="/erp.png" alt="Full-Stack Enterprise System" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white">Full-Stack Enterprise System</h3>
            <p className="text-muted-foreground text-sm">Architected a comprehensive enterprise resource planning (ERP) system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.</p>
            <div className="flex flex-wrap gap-2">
              {["Next.js","React","Zustand","Directus","MySQL"].map((tag) => (
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
              <img src="/pos.png" alt="Web-Based POS & Business Management System" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white">Web-Based POS & Business Management System</h3>
            <p className="text-muted-foreground text-sm">Engineered a comprehensive, full-stack enterprise platform using Next.js, Node.js, and MySQL. Designed a multi-module business management dashboard encompassing a high-performance Point of Sale (POS) interface with cart management and printable receipt generation, alongside robust back-office modules for catalog and inventory management, employee salary distribution, debt management, and real-time financial expense tracking.</p>
            <div className="flex flex-wrap gap-2">
              {["Next.js","React","JavaScript","CSS"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto pt-4">
              <a href="https://seasidepos.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-2 hover:underline">
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
            <p className="text-muted-foreground text-sm">Designed a modern, web-based attendance system supporting fingerprint biometric, RFID, and barcode scanning. Created a Node.js Hardware Bridge to communicate with the Vue.js frontend in real-time using WebSockets, backed by a 3-table SQL schema.</p>
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
            <h3 className="text-xl font-bold text-white">Asset & Equipment Management System</h3>
            <p className="text-muted-foreground text-sm">
              A system for tracking company assets and equipment. Built with a Node.js/Express backend, MySQL database, and a frontend using Vanilla HTML, CSS, and JavaScript. Provides full asset management capabilities and search endpoints.
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
        </div>
      </section>
  );
}