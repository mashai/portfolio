import { notFound } from 'next/navigation';
import { getAllProjects } from '@/lib/mdx';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import ProjectCard from '@/components/ui/ProjectCard';

export function generateStaticParams() {
  const projects = getAllProjects();
  const tags = [...new Set(projects.flatMap((p) => p.tags))];
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const all = getAllProjects();
  const projects = all.filter((p) => p.tags.includes(decoded));

  if (projects.length === 0) notFound();

  return (
    <main>
      <Section id="tag-filter">
        <Container>
          <h1 className="mb-10 text-2xl font-medium text-text">{decoded}</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
