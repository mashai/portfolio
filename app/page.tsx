import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Contact from '@/components/sections/Contact';
import { getAllProjects } from '@/lib/mdx';

export default function Home() {
  const projects = getAllProjects();
  const tags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  return (
    <main>
      <Hero />
      <About tags={tags} />
      <ProjectsGrid projects={projects} />
      <Contact />
    </main>
  );
}
