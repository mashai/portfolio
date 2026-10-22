import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug, parseBodyParagraphs } from '@/lib/mdx';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import TagPill from '@/components/ui/TagPill';

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    let videoId: string | null = null;
    if (u.hostname === 'youtu.be') {
      videoId = u.pathname.slice(1);
    } else if (u.hostname.includes('youtube.com')) {
      videoId = u.searchParams.get('v');
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

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

  const localVideoPath = project.youtube?.startsWith('/') ? project.youtube : null;
  const youtubeEmbedUrl = project.youtube && !localVideoPath ? getYouTubeEmbedUrl(project.youtube) : null;

  return (
    <main>
      {project.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden md:h-72 lg:h-96">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            style={project.thumbnailOffset ? { objectPosition: project.thumbnailOffset } : undefined}
            sizes="100vw"
            priority
          />
        </div>
      )}
      <Section id="project-detail">
        <Container>
          <div className="mx-auto max-w-5xl space-y-4">
            <div className="flex items-center gap-1">
              <Link href="/" className="text-text transition-transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </Link>
              <h1 className="text-3xl font-medium text-text">{project.title}</h1>
            </div>
            <p className="text-base leading-relaxed text-text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            {project.body && (
              <div className="space-y-4 pt-4">
                {parseBodyParagraphs(project.body).map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                {project.images.map((src, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            )}
            {youtubeEmbedUrl && (
              <div className="pt-4">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={youtubeEmbedUrl}
                    className="absolute inset-0 h-full w-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} video`}
                  />
                </div>
              </div>
            )}
            {localVideoPath && (
              <div className="pt-4">
                <div className="relative pt-[56.25%]">
                  <video
                    src={localVideoPath}
                    className="absolute inset-0 h-full w-full rounded-lg"
                    controls
                    playsInline
                    title={`${project.title} video`}
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
