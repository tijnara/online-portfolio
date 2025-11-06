export function Contact() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Let's <span className="text-orange-500">Work Together</span></h2>
      <p className="mb-8 text-muted-foreground">Have a project in mind? Let's discuss how I can help bring your ideas to life</p>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-muted rounded-full p-2">📧</span>
          <span className="font-medium">aranjitarchita@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-muted rounded-full p-2">📞</span>
          <span className="font-medium">09686786072</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-muted rounded-full p-2">📍</span>
          <span className="font-medium">Lingayen, Pangasinan</span>
        </div>
      </div>
    </section>
  );
}

