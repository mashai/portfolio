import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import TagPill from './TagPill';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-surface-muted">
      <div className="relative aspect-video w-full bg-surface-muted">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-medium text-text">{project.title}</h3>
          {project.role && <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">{project.role}</p>}
        </div>
        <div className="relative flex-1 overflow-hidden">
          <p className="line-clamp-4 text-sm text-text-muted opacity-60 transition-opacity duration-200 group-hover:opacity-0">
            {project.description}
          </p>
          <div className="absolute inset-0 flex flex-wrap content-start gap-1.5 overflow-hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {project.tags.map((tag) => (
              <TagPill key={tag} tag={tag} linked={false} compact />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
