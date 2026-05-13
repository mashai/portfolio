import { getAllProjects } from '@/lib/mdx';
import About from '@/components/sections/About';

export default function TagLayout({ children }: { children: React.ReactNode }) {
  const projects = getAllProjects();
  const tags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  return (
    <>
      <About tags={tags} />
      {children}
    </>
  );
}
