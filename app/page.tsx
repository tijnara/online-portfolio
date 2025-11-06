import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Work } from "../components/Work";
import { GitHub } from "../components/GitHub"; // New
import { Cta } from "../components/Cta";     // New
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      {/* Center the main content */}
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Work />
        <GitHub />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
