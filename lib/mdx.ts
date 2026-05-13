import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types/project';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export function getProjectBySlug(slug: string): Project | undefined {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    tags: data.tags ?? [],
    thumbnail: data.thumbnail,
    date: data.date,
    body: content.trim(),
  } satisfies Project;
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
      return {
        slug,
        title: data.title,
        description: data.description,
        tags: data.tags ?? [],
        thumbnail: data.thumbnail,
        date: data.date,
      } satisfies Project;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
