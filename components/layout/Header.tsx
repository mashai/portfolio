import Container from './Container';
import { siteContent } from '@/content/site';

const { name, linkedinUrl, resumeUrl } = siteContent.header;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-base font-normal text-text">{name}</span>
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-opacity hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                width="30"
                height="30"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 rounded border border-text px-4 py-1.5 text-sm font-normal text-text transition-opacity hover:opacity-70"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 20h14" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
