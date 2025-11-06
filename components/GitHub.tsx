import { Github, User, Users, Heart, Eye } from 'lucide-react';

export function GitHub() {
  return (
    <section id="github" className="py-20 border-b border-border">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <Github size={28} className="text-primary" />
        <h2 className="text-3xl font-bold text-white">GitHub Contributions</h2>
      </div>
      {/* Placeholder for Contribution Graph */}
      <div className="bg-card-solid border border-card-solid-border rounded-lg p-6">
        <p className="text-center text-muted-foreground mb-4">
          Loading Contribution Graph...
        </p>
        {/* This is a static image placeholder.
          For a dynamic graph, you can use a service like:
          <img src="https://ghchart.rshah.org/tijnara" alt="GitHub Contribution Graph" />
        */}
        <div className="w-full h-40 bg-muted rounded-md flex items-center justify-center">
          <p className="text-muted-foreground">GitHub Graph Placeholder</p>
        </div>
      </div>
      {/* GitHub Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
          <User size={24} className="text-primary" />
          <div>
            <p className="text-2xl font-semibold text-white">116</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
        </div>
        <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
          <Users size={24} className="text-primary" />
          <div>
            <p className="text-2xl font-semibold text-white">33</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </div>
        <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
          <Heart size={24} className="text-primary" />
          <div>
            <p className="text-2xl font-semibold text-white">55</p>
            <p className="text-sm text-muted-foreground">Love Count</p>
          </div>
        </div>
        <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
          <Eye size={24} className="text-primary" />
          <div>
            <p className="text-2xl font-semibold text-white">198</p>
            <p className="text-sm text-muted-foreground">Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}

