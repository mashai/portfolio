export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
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
  body?: string;
  hide?: boolean;
}
