import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-gray-50/50">
      <h2 className="text-2xl font-bold mb-4">Let&apos;s <span className="text-orange-500">Work Together</span></h2>
      <p className="mb-8 text-muted-foreground">Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.</p>
      <div className="flex flex-col items-center gap-6">
        <a
          href="mailto:aranjitarchita@gmail.com"
          className="flex items-center gap-3 group"
        >
          <span className="bg-orange-100 text-orange-600 rounded-full p-3 transition-all group-hover:scale-110">
            <Mail size={20} />
          </span>
          <span className="font-medium text-lg group-hover:text-orange-500 transition-colors">
            aranjitarchita@gmail.com
          </span>
        </a>
        <a
          href="tel:09686786072"
          className="flex items-center gap-3 group"
        >
          <span className="bg-orange-100 text-orange-600 rounded-full p-3 transition-all group-hover:scale-110">
            <Phone size={20} />
          </span>
          <span className="font-medium text-lg group-hover:text-orange-500 transition-colors">
            09686786072
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="bg-orange-100 text-orange-600 rounded-full p-3">
            <MapPin size={20} />
          </span>
          <span className="font-medium text-lg">
            Lingayen, Pangasinan
          </span>
        </div>
      </div>
    </section>
  );
}
