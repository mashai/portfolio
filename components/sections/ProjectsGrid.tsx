'use client';

import { useState } from 'react';
import { Project } from '@/types/project';
import { siteContent } from '@/content/site';
import ProjectCard from '@/components/ui/ProjectCard';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const COLLAPSED_COUNT = 8;

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, COLLAPSED_COUNT);
  const hasMore = projects.length > COLLAPSED_COUNT;

  return (
    <Section id="projects">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="rounded border border-text-muted px-6 py-2.5 text-sm text-text-muted transition-opacity hover:opacity-70"
            >
              {expanded ? siteContent.projects.showLess : siteContent.projects.showMore}
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
