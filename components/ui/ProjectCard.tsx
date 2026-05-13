import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import TagPill from './TagPill';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="flex flex-col overflow-hidden rounded-lg bg-surface-muted transition-opacity hover:opacity-80">
      <div className="relative aspect-video w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-base font-medium text-text">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
