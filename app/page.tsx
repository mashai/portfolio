export default function Home() {
  return (
    <main>
      <section id="hero" className="flex min-h-screen items-center justify-center">
        <span className="text-sm text-text-muted">Hero</span>
      </section>
      <section id="about" className="flex min-h-[50vh] items-center justify-center">
        <span className="text-sm text-text-muted">About</span>
      </section>
      <section id="projects" className="flex min-h-[50vh] items-center justify-center">
        <span className="text-sm text-text-muted">Projects</span>
      </section>
      <section id="contact" className="flex min-h-[50vh] items-center justify-center">
        <span className="text-sm text-text-muted">Contact</span>
      </section>
    </main>
  );
}
