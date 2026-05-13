import Image from 'next/image';
import { siteContent } from '@/content/site';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import TagList from '@/components/ui/TagList';

interface AboutProps {
  tags: string[];
}

export default function About({ tags }: AboutProps) {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="h-40 w-40 overflow-hidden rounded-full -rotate-[5deg]">
              <Image
                src="/profile-picture.png"
                alt="Chai Lacombe-Bar"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <div className="space-y-4">
              {siteContent.about.bio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-text">
                  {paragraph}
                </p>
              ))}
            </div>
            <TagList tags={tags} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
