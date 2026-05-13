import { Project } from '@/types/project';
import ProjectCard from '@/components/ui/ProjectCard';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <Section id="projects">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
