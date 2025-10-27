import { AboutMe } from "./components/AboutMe";
import { Academic } from "./components/Academic";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] transition">
      <Header />
      <main className="flex flex-col gap-20">
        <Banner />
        <AboutMe />
        <Experience />
        <Academic />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
