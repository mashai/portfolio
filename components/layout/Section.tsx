interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function Section({
  children,
  className,
  as: Tag = 'section',
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={['py-8 md:py-12', className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}
