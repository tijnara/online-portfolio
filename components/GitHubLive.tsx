"use client";

import { Github, User, Users, Heart, Eye } from 'lucide-react';
import useSWR from 'swr/immutable';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function ContributionGraph() {
  // Use a public service for the contribution graph
  return (
    <div className="bg-card-solid border border-card-solid-border rounded-lg p-6" style={{ background: 'transparent' }}>
      <img
        src="https://ghchart.rshah.org/tijnara"
        alt="GitHub Contribution Graph"
        className="w-full h-40 object-contain rounded-md"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

function GitHubStats() {
  // Get live stats from GitHub API
  const { data, error } = useSWR('https://api.github.com/users/tijnara', fetcher);

  if (error) return <div className="text-red-500">Failed to load GitHub stats.</div>;
  if (!data) return <div className="text-muted-foreground">Loading GitHub stats...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
        <User size={24} className="text-primary" />
        <div>
          <p className="text-2xl font-semibold text-white">{data.followers}</p>
          <p className="text-sm text-muted-foreground">Followers</p>
        </div>
      </div>
      <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
        <Users size={24} className="text-primary" />
        <div>
          <p className="text-2xl font-semibold text-white">{data.following}</p>
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      </div>
      <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
        <Heart size={24} className="text-primary" />
        <div>
          <p className="text-2xl font-semibold text-white">{data.public_repos}</p>
          <p className="text-sm text-muted-foreground">Public Repos</p>
        </div>
      </div>
      <div className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex items-center gap-3">
        <Eye size={24} className="text-primary" />
        <div>
          <p className="text-2xl font-semibold text-white">{data.public_gists}</p>
          <p className="text-sm text-muted-foreground">Public Gists</p>
        </div>
      </div>
    </div>
  );
}

export function GitHub() {
  return (
    <section id="github" className="py-20 border-b border-border">
      <div className="flex items-center gap-3 mb-8">
        <Github size={28} className="text-primary" />
        <h2 className="text-3xl font-bold text-white">GitHub Contributions</h2>
      </div>
      <ContributionGraph />
      <GitHubStats />
    </section>
  );
}
