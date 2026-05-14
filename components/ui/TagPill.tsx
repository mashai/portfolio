import Link from 'next/link';

interface TagPillProps {
  tag: string;
  linked?: boolean;
}

const pillClass =
  'shrink-0 whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm text-text-muted';

export default function TagPill({ tag, linked = true }: TagPillProps) {
  if (!linked) {
    return <span className={pillClass}>{tag}</span>;
  }
  return (
    <Link
      href={`/projects/tag/${encodeURIComponent(tag)}`}
      className={`${pillClass} transition-colors hover:border-text hover:text-text`}
    >
      {tag}
    </Link>
  );
}
