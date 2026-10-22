import { getAllProjects, getUniqueTags } from '@/lib/mdx';
import About from '@/components/sections/About';

export default function TagLayout({ children }: { children: React.ReactNode }) {
  const projects = getAllProjects();
  const tags = getUniqueTags(projects);

  return (
    <>
      <About tags={tags} />
      {children}
    </>
  );
}
