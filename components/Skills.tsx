import {
    Database,
    Settings,
    Code,
    Cable,
    Building,
    Combine,
    Network,
    Wrench,
} from 'lucide-react';
import React from 'react';
import {
    SiNextdotjs,
    SiReact,
    SiVuedotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMysql,
    SiDirectus,
    SiSupabase,
    SiPhp,
    SiPostgresql,
    SiDocker,
    SiGit
} from 'react-icons/si';

// Your skill list updated to match the new resume
const skillsList = [
    'Next.js',
    'Vue.js',
    'React',
    'Tailwind CSS',
    'Node.js',
    'PHP',
    'Directus',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'Git',
    'RESTful APIs',
    'System Integration',
];

// A helper map to assign icons.
const iconMap: { [key: string]: React.ElementType } = {
    // Brand Logos from react-icons
    'Next.js': SiNextdotjs,
    React: SiReact,
    'Vue.js': SiVuedotjs,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': SiNodedotjs,
    PHP: SiPhp,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    Directus: SiDirectus,
    Supabase: SiSupabase,
    Docker: SiDocker,
    Git: SiGit,

    // Descriptive Icons from lucide-react
    WebSockets: Cable,
    SQL: Database,
    'Enterprise Architecture': Building,
    'System Integration': Combine,
    'RESTful APIs': Network,
    'IT Support': Wrench,
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
                    // Use the icon from the map, or the fallback 'Code' icon
                    const Icon = iconMap[item] || Code;
                    return (
                        <div
                            key={item}
                            className="bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg p-4 flex flex-col items-center justify-center gap-3 aspect-square transition-all hover:border-primary/50"
                        >
                            <Icon className="w-10 h-10 text-primary" />
                            <span className="text-foreground text-sm font-medium text-center">
                                {item}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}