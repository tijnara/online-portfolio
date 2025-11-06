import { Code, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-16 text-center bg-gradient-to-b from-orange-50/40 to-white">
      <div className="flex justify-center items-center mb-6">
        <span className="hidden md:inline-block mr-8 text-orange-500">
          <Code size={48} strokeWidth={1} />
        </span>
        <span className="font-bold text-xl text-primary">Aranjit D. Archita</span>
        <span className="hidden md:inline-block ml-8 text-orange-500">
          <Terminal size={48} strokeWidth={1} />
        </span>
      </div>
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <span role="img" aria-label="wave">👋</span> Hi, I&apos;m Aranjit D. Archita
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          I am a <span className="text-orange-500">Full-Stack Developer</span> who builds and modernizes <span className="text-orange-500">enterprise applications</span>
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Using Vue.js, Laravel, and Node.js to create robust, scalable solutions for complex business needs.
        </p>
        <a
          href="#projects"
          className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors"
        >
          Explore Portfolio
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-4">
        <div className="flex flex-col items-center">
          <span className="text-orange-400 text-3xl">4+</span>
          <span className="mt-2 text-sm text-muted-foreground">Enterprise Systems Built</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-orange-400 text-3xl">10+</span>
          <span className="mt-2 text-sm text-muted-foreground">Technologies Mastered</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-orange-400 text-3xl">5+</span>
          <span className="mt-2 text-sm text-muted-foreground">Years IT Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-orange-400 text-3xl">3+</span>
          <span className="mt-2 text-sm text-muted-foreground">Major Projects Delivered</span>
        </div>
      </div>
    </section>
  );
}
