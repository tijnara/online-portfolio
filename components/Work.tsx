export function Work() {
  return (
    <section className="py-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Example Project Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <span className="text-muted-foreground">Project Image</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Full-Stack Enterprise System</h3>
          <p className="text-muted-foreground mb-2">Architected a comprehensive enterprise resource planning (ERP) system. Built a modern frontend with Next.js, React, and Zustand for managing modules like Sales Orders, Inventory, and HR. The backend is powered by Directus and a MySQL database.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {['Next.js','React','Zustand','Directus','MySQL','ERP'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-medium border border-border">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="border px-4 py-1 rounded text-primary font-medium">View</button>
            <button className="border px-4 py-1 rounded text-primary font-medium">Code</button>
          </div>
        </div>
        {/* Add more project cards as needed to match screenshots */}
      </div>
    </section>
  );
}

