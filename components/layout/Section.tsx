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
      className={['py-16 md:py-24', className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}
