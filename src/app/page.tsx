import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24 gap-20">
      <Hero />
      <Experience />
      <Project />
      <Skills />
    </main>
  );
}
