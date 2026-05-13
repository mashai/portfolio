import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import { getAllProjects } from '@/lib/mdx';

export default function Home() {
  const projects = getAllProjects();
  const tags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  return (
    <main>
      <Hero />
      <About tags={tags} />
      <section id="projects" className="flex min-h-[50vh] items-center justify-center">
        <span className="text-sm text-text-muted">Projects</span>
      </section>
      <section id="contact" className="flex min-h-[50vh] items-center justify-center">
        <span className="text-sm text-text-muted">Contact</span>
      </section>
    </main>
  );
}
