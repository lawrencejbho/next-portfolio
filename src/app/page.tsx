import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>
      </div>
    </main>
  );
}
