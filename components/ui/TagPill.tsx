import Link from 'next/link';

interface TagPillProps {
  tag: string;
}

export default function TagPill({ tag }: TagPillProps) {
  return (
    <Link
      href={`/projects/${encodeURIComponent(tag)}`}
      className="shrink-0 whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm text-text-muted transition-colors hover:border-text hover:text-text"
    >
      {tag}
    </Link>
  );
}
