import { Database, Server, Component, Code } from 'lucide-react';

const skills = {
  frontend: {
    title: "Frontend Development",
    icon: <Component className="text-orange-500" />,
    items: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Zustand"]
  },
  backend: {
    title: "Backend Development",
    icon: <Server className="text-orange-500" />,
    items: ["Node.js", "Laravel", "Express", "WebSockets"]
  },
  database: {
    title: "Database & BaaS",
    icon: <Database className="text-orange-500" />,
    items: ["MySQL", "SQL", "Directus", "Supabase"]
  },
  general: {
    title: "General Skills",
    icon: <Code className="text-orange-500" />,
    items: ["Enterprise Architecture", "System Integration", "API Design", "IT Support"]
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="mb-12 text-muted-foreground">
          A look at the technologies and principles I work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(skills).map((skillCategory) => (
            <div
              key={skillCategory.title}
              className="bg-white p-6 rounded-lg border border-border shadow-sm"
            >
              <div className="mb-4 inline-block bg-orange-100 p-3 rounded-full">
                {skillCategory.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skillCategory.title}</h3>
              <ul className="flex flex-wrap gap-2 justify-center">
                {skillCategory.items.map((item) => (
                  <li
                    key={item}
                    className="bg-muted text-muted-foreground text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
