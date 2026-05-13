'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { siteContent } from '@/content/site';
import TagPill from './TagPill';

interface TagListProps {
  tags: string[];
}

const toggleClass =
  'shrink-0 whitespace-nowrap rounded-full bg-text-muted/50 px-4 py-1.5 text-sm text-surface transition-opacity hover:opacity-70';

export default function TagList({ tags }: TagListProps) {
  const [expanded, setExpanded] = useState(false);
  const [collapsedCount, setCollapsedCount] = useState(tags.length - 1);
  const containerRef = useRef<HTMLDivElement>(null);

  // After each render, check whether the button is within 2 rows.
  // If not, remove one tag and re-check. Runs synchronously before paint.
  useLayoutEffect(() => {
    if (expanded || !containerRef.current) return;
    const children = Array.from(containerRef.current.children) as HTMLElement[];
    if (children.length < 2) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const rowHeight = children[0].getBoundingClientRect().height;
    const maxBottom = containerTop + rowHeight * 2 + 8;
    const button = children[children.length - 1];

    if (button.getBoundingClientRect().bottom > maxBottom + 1) {
      setCollapsedCount((c) => Math.max(c - 1, 1));
    }
  }, [collapsedCount, expanded]);

  // Reset and re-converge whenever the container is resized.
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => setCollapsedCount(tags.length - 1));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [tags]);

  const displayTags = expanded ? tags : tags.slice(0, collapsedCount);

  return (
    <div ref={containerRef} className="mt-6 flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <TagPill key={tag} tag={tag} />
      ))}
      {!expanded && (
        <button onClick={() => setExpanded(true)} className={toggleClass}>
          {siteContent.about.showMoreTags}
        </button>
      )}
      {expanded && (
        <button onClick={() => setExpanded(false)} className={toggleClass}>
          {siteContent.about.showLessTags}
        </button>
      )}
    </div>
  );
}
