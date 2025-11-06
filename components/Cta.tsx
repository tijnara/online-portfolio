import { Rocket, Mail } from 'lucide-react';

export function Cta() {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="flex justify-center items-center gap-3 mb-6">
        <Rocket size={32} className="text-primary" />
        <h2 className="text-3xl font-bold text-white">Let&apos;s Build Something Amazing</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Ready to bring your ideas to life? I&apos;m always excited to collaborate on innovative projects and help transform your vision into reality.
      </p>
      <a
        href="mailto:aranjitarchita@gmail.com"
        className="inline-flex items-center gap-3 bg-card-glass backdrop-blur-md border border-card-glass-border rounded-lg py-3 px-6 text-foreground font-medium transition-all hover:border-primary/50"
      >
        <Mail size={20} className="text-primary" />
        aranjitarchita@gmail.com
      </a>
    </section>
  );
}

