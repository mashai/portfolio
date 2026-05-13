import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllProjects, getProjectBySlug } from '@/lib/mdx';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import TagPill from '@/components/ui/TagPill';

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      <div className="relative h-48 w-full overflow-hidden md:h-72 lg:h-96">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <Section id="project-detail">
        <Container>
          <div className="mx-auto max-w-5xl space-y-4">
            <h1 className="text-3xl font-medium text-text">{project.title}</h1>
            <p className="text-base leading-relaxed text-text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            {project.body && (
              <div className="space-y-4 pt-4">
                {project.body.split(/\n\n+/).map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
