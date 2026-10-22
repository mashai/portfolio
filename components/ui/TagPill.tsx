import Link from 'next/link';

interface TagPillProps {
  tag: string;
  linked?: boolean;
  compact?: boolean;
}

const pillBase = 'shrink-0 whitespace-nowrap rounded-full border border-border text-text-muted';
const pillSizes = {
  default: 'px-4 py-1.5 text-sm',
  compact: 'px-2 py-0.5 text-xs',
};

export default function TagPill({ tag, linked = true, compact = false }: TagPillProps) {
  const className = `${pillBase} ${compact ? pillSizes.compact : pillSizes.default}`;

  if (!linked) {
    return <span className={className}>{tag}</span>;
  }
  return (
    <Link
      href={`/projects/tag/${encodeURIComponent(tag)}`}
      className={`${className} transition-colors hover:border-text hover:text-text`}
    >
      {tag}
    </Link>
  );
}
