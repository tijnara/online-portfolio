import { Database, Server, Component, Code, Settings } from 'lucide-react';
import React from 'react';

// Your skill list
const skillsList = [
	"Next.js", "React", "Vue.js", "Tailwind CSS", "Zustand",
	"Node.js", "Laravel", "Express", "WebSockets",
	"MySQL", "SQL", "Directus", "Supabase",
	"Enterprise Architecture", "System Integration", "API Design", "IT Support"
];

// A helper map to assign icons. Add more as you like.
const iconMap: { [key: string]: React.ElementType } = {
	"Next.js": Component,
	"React": Component,
	"Vue.js": Component,
	"Node.js": Server,
	"Laravel": Server,
	"MySQL": Database,
	"SQL": Database,
	"Supabase": Database,
};

export function Skills() {
	return (
		<section id="skills" className="py-20 border-b border-border">
			{/* Section Header */}
			<div className="flex items-center gap-3 mb-8">
				<Settings size={28} className="text-primary" />
				<h2 className="text-3xl font-bold text-white">Tech Arsenal</h2>
			</div>
			{/* Grid of Glass Cards */}
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{skillsList.map((item) => {
					const Icon = iconMap[item] || Code;
					return (
						<div
							key={item}
							className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex flex-col items-center justify-center gap-3 aspect-square transition-all hover:border-primary/50"
						>
							<Icon className="w-10 h-10 text-primary" />
							<span className="text-foreground text-sm font-medium text-center">{item}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
