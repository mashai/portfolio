export const siteContent = {
  site: {
    title: 'Chai Lacombe-Bar',
    description: 'Senior Software Engineer — Systems & Platform Architecture',
  },
  header: {
    name: 'Chai Lacombe-Bar',
    resumeUrl: '/CharlotteLacombeBarCV.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/charlotte-lacombe-bar-99843150/',
  },
  hero: {
    headline: 'Hi, I am Chai',
    subheadline: 'Senior Software Engineer | Systems & Platform Architecture',
  },
  about: {
    bio: [
      "I'm a software engineer and technical lead with 13+ years of experience working on complex production systems, primarily in game development and consulting environments, building and shipping features and products from prototype through production.",
      "Alongside leading core systems and feature development, I've taken responsibility for the full delivery lifecycle; from architecture and implementation to build pipelines, releases, cloud infrastructure, and internal tooling. I'm often brought into projects that are behind schedule or difficult to maintain, where my role is to quickly understand existing systems, resolve critical issues, and restore engineering workflows so teams can move forward and ship confidently.",
      "My experience includes reverse-engineering complex legacy systems, building MVPs and rapid prototypes, modernizing existing platforms, developing backend services, and creating tools that improve both developer and content team productivity.",
      "In short, I enjoy creating practical solutions to complex problems, whatever form that might take.",
    ],
    showMoreTags: 'Show More',
    showLessTags: 'Show Less',
  },
  contact: {
    cta: 'Want to get in touch about a role or contract work?',
    fields: {
      name: 'Name',
      company: 'Company Name',
      website: 'Company Website',
      email: 'Email',
      message: 'Message',
    },
    submit: 'Get in touch',
    success: "Thanks for reaching out — I'll be in touch soon.",
    error: 'Something went wrong. Please try again.',
  },
} as const;
