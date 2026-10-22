import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types/project';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

interface ProjectFrontmatter {
  title: string;
  description: string;
  tags?: string[];
  thumbnail?: string;
  thumbnailOffset?: string;
  date: string;
  teamSize?: string;
  company?: string;
  role?: string;
  github?: string;
  website?: string;
  youtube?: string;
  images?: string[];
  hide?: boolean;
}

function resolveThumbnail(value: unknown): string | undefined {
  if (!value || typeof value !== 'string') return undefined;
  return fs.existsSync(path.join(PUBLIC_DIR, value)) ? value : undefined;
}

function parseProject(slug: string, data: ProjectFrontmatter, content?: string): Project {
  return {
    slug,
    title: data.title,
    description: data.description,
    tags: data.tags ?? [],
    thumbnail: resolveThumbnail(data.thumbnail),
    thumbnailOffset: data.thumbnailOffset,
    date: data.date,
    teamSize: data.teamSize,
    company: data.company,
    role: data.role,
    github: data.github,
    website: data.website,
    youtube: data.youtube,
    images: data.images ?? [],
    hide: data.hide ?? false,
    body: content !== undefined ? content.trim() : undefined,
  };
}

export function getUniqueTags(projects: Project[]): string[] {
  return [...new Set(projects.flatMap((p) => p.tags))].sort();
}

export function parseBodyParagraphs(body: string): string[] {
  return body.split(/\n\n+/);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  return parseProject(slug, data as ProjectFrontmatter, content);
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
      const { data } = matter(raw);
      return parseProject(slug, data as ProjectFrontmatter);
    })
    .filter((p) => !p.hide)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
