export function About() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">About <span className="text-orange-500">Me</span></h2>
      <p className="mb-6 text-muted-foreground">From IT support to full-stack development: building the engines that power applications</p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="px-4 py-2 rounded bg-white border text-base font-medium">↔ Full Stack Developer</button>
        <button className="px-4 py-2 rounded bg-white border text-base font-medium">Database Design</button>
        <button className="px-4 py-2 rounded bg-white border text-base font-medium">Enterprise Solutions</button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto text-left">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <p className="mb-4">My career began in IT and Technical Support, where I developed a methodical approach to problem-solving and learned how systems work from the ground up. This foundation taught me to think systematically about how different components interact and how to diagnose issues efficiently.</p>
          <p className="mb-4">What drives me as a developer is my passion for the backend—the "engine" of an application. I love designing databases, architecting the logic that makes everything work, and building the APIs that connect it all together. While I'm proficient across the full stack, I find the most satisfaction in creating robust, well-structured backend systems.</p>
          <p className="mb-4">I specialize in building full-stack enterprise applications using <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Vue.js</span>, and <span className="font-semibold">Node.js</span>. My expertise lies in designing and optimizing <span className="font-semibold">SQL databases</span> (MySQL) and architecting APIs with services like <span className="font-semibold">Directus</span> and <span className="font-semibold">Supabase</span>. Whether it's building real-time attendance systems with hardware integration or architecting comprehensive ERP systems, I bring both technical skill and creative problem-solving to every project.</p>
          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2"><span>📄</span>View Resume</button>
            <a href="https://github.com/tijnara" target="_blank" rel="noopener" className="px-4 py-2 rounded-md border font-medium">GitHub: tijnara</a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="text-orange-500 font-semibold mb-2">Backend Architecture</h4>
            <p className="text-sm text-muted-foreground">Building robust APIs and designing efficient database schemas</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="text-orange-500 font-semibold mb-2">Enterprise Systems</h4>
            <p className="text-sm text-muted-foreground">Architecting ERP, POS, and HR applications from the ground up</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="text-orange-500 font-semibold mb-2">System Integration</h4>
            <p className="text-sm text-muted-foreground">Connecting hardware with web applications via WebSockets and APIs</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="text-orange-500 font-semibold mb-2">Problem Solving</h4>
            <p className="text-sm text-muted-foreground">Methodical approach honed through IT support and technical troubleshooting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
