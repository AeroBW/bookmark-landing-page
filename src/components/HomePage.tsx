import Contact from "./Contact";
import Download from "./Download";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";

function HomePage() {
  return (
    <main class="space-y-32 overflow-hidden">
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
    </main>
  );
}

export default HomePage;
